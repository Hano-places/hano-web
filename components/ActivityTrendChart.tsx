"use client"

import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export interface ChartDataPoint {
  day: string;
  registeredUsers: number;
  visitors: number;
}

interface ActivityTrendChartProps {
  data: ChartDataPoint[];
  periods?: string[];
  title?: string;
}

const ActivityTrendChart: React.FC<ActivityTrendChartProps> = ({
  data,
  periods = ['All Time', '7 Days', '24 Hours', '1 Hour'],
  title = 'Activity Trend',
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('All Time');

  const maxValue = Math.max(...data.flatMap(d => [d.registeredUsers, d.visitors]));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-dark-800 border border-brand-dark-700 rounded-lg p-3 shadow-lg">
          <p className="text-brand-dark-100 text-sm font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-brand-dark-100">
                {entry.dataKey === 'registeredUsers' ? 'Registered Users' : 'Visitors'}: {entry.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-brand-dark-900 border border-brand-dark-700 rounded-xl p-4 sm:p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg font-medium text-brand-dark-50">
          {title}
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
      <div className="w-full h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="registeredUsersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(156, 163, 175)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="rgb(156, 163, 175)" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(107, 114, 128)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="rgb(107, 114, 128)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgb(55, 65, 81)"
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgb(209, 213, 219)', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgb(209, 213, 219)', fontSize: 12 }}
              domain={[0, maxValue]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="registeredUsers"
              stroke="rgb(156, 163, 175)"
              strokeWidth={2}
              fill="url(#registeredUsersGradient)"
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="rgb(107, 114, 128)"
              strokeWidth={2}
              fill="url(#visitorsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityTrendChart;
