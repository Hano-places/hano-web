import { LoginForm } from "@/components/login-form";
import ProgressTable from "@/components/progress-table";
import ValueCard from '@/components/value-card';
import ActivityTrendChart from '@/components/ActivityTrendChart';
import { Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-dark-900 flex items-center justify-center p-4">
          <div className="w-full ">
              {/* <ActivityTrendChart /> */}

        {/* <ValueCard
          title="Visitors"
          value={4}
          unit="Users"
          description="1 hr ago"
          iconColor="text-green-500"
          icon={<Users />}
          className="w-80"
          label="Active"
        /> */}

        <LoginForm />
        {/* <ProgressTable /> */}
      </div>
    </div>
  );
}
