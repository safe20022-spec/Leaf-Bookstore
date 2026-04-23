import type { ReactNode } from 'react';

interface StatItemProps {
  icon: ReactNode;
  count: string;
  label: string;
}

const StatItem = ({ icon, count, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 transition-transform hover:scale-105 duration-300">
      <div className="text-green-600 mb-4 bg-green-50 p-4 rounded-2xl">
        {icon}
      </div>
      
      <h3 className="text-3xl font-black text-gray-900 mb-1">
        {count}
      </h3>
      
      <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
};

export default StatItem;