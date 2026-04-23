import { ChevronRight } from 'lucide-react';

interface BookSelectionProps {
  title: string;
  bgColor: string;
  accentColor: string;
  decorationType: 'dots' | 'circles';
}

const BookSelectionSection = ({ title, bgColor, accentColor, decorationType }: BookSelectionProps) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 h-[250px] flex flex-col justify-between ${bgColor}`}>
      
      {decorationType === 'circles' ? (
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 ${accentColor}`}></div>
      ) : (
        <div className="absolute top-4 right-4 grid grid-cols-3 gap-1 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${accentColor}`}></div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center relative z-10">
        <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
        <button className="bg-white p-1.5 rounded-full shadow-sm hover:scale-110 transition-transform">
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex gap-4 relative z-10 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-w-[80px] aspect-[3/4] bg-white/60 rounded-lg shadow-sm border border-white/40 animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

export default BookSelectionSection;