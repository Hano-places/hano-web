"use client"

import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

interface ChartData {
  day: string;
  registeredUsers: number;
  visitors: number;
}

const mockData: ChartData[] = [
  { day: 'Sun', registeredUsers: 45, visitors: 65 },
  { day: 'Mon', registeredUsers: 75, visitors: 85 },
  { day: 'Tue', registeredUsers: 55, visitors: 70 },
  { day: 'Wed', registeredUsers: 85, visitors: 35 },
  { day: 'Thu', registeredUsers: 70, visitors: 80 },
  { day: 'Fri', registeredUsers: 60, visitors: 75 },
  { day: 'Sat', registeredUsers: 80, visitors: 90 },
];

const ActivityTrendChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('All Time');
  const periods = ['All Time', '7 Days', '24 Hours', '1 Hour'];

  const maxValue = Math.max(...mockData.flatMap(d => [d.registeredUsers, d.visitors]));

  const getPathData = (data: number[], color: 'users' | 'visitors') => {
    const width = 100;
    const height = 60;
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - (value / maxValue) * height;
      return `${x},${y}`;
    });

    return `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`;
  };

  const registeredUsersData = mockData.map(d => d.registeredUsers);
  const visitorsData = mockData.map(d => d.visitors);

  return (
    <div className="bg-brand-dark-900 border-4 border-brand-dark-800 rounded-xl p-4 sm:p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg font-medium text-brand-dark-50">
          Activity Trend
        </h3>
        <button className="p-1 hover:bg-muted rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5 text-brand-dark-100" />
        </button>
      </div>

      {/* Time Period Filters */}
      <div className="flex flex-wrap gap-2 mb-2">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 text-sm rounded-lg transition-colors ${
              selectedPeriod === period
                ? 'bg-brand-dark-800 text-brand-dark-100'
                : 'text-brand-dark-100 hover:text-brand-dark-700 hover:bg-muted/50'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Legend below period buttons, top-right */}
      <div className="flex justify-end gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-small bg-gray-400"></div>
          <span className="text-sm text-brand-dark-100">Registered Users</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-small bg-gray-500"></div>
          <span className="text-sm text-brand-dark-100">Visitors</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-brand-dark-100 py-2">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart SVG */}
        <div className="ml-8 sm:ml-10">
          <svg
            viewBox="0 0 100 60"
            className="w-full h-32 sm:h-40"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="100" height="15" patternUnits="userSpaceOnUse">
                <path d="M 0 15 L 100 15" stroke="currentColor" strokeWidth="0.2" className="text-border" />
              </pattern>
            </defs>
            <rect width="100" height="60" fill="url(#grid)" />

            {/* Gradients */}
            <defs>
              <linearGradient id="registeredUsersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="visitorsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(107, 114, 128)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(107, 114, 128)" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Registered Users */}
            <path
              d={getPathData(registeredUsersData, 'users')}
              fill="url(#registeredUsersGradient)"
              stroke="rgb(156, 163, 175)"
              strokeWidth="0.5"
            />

            {/* Visitors */}
            <path
              d={getPathData(visitorsData, 'visitors')}
              fill="url(#visitorsGradient)"
              stroke="rgb(107, 114, 128)"
              strokeWidth="0.5"
            />
          </svg>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 text-xs text-brand-dark-100">
            {mockData.map((item) => (
              <span key={item.day} className="text-center">
                {item.day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTrendChart;
