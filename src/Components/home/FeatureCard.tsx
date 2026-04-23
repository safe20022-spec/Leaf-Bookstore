import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 transition-all hover:bg-gray-50 rounded-2xl cursor-default group">
      <div className="bg-green-100 p-3 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <div className="flex flex-col">
        <h4 className="font-bold text-gray-800 text-sm whitespace-nowrap">
          {title}
        </h4>
        <p className="text-xs text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;