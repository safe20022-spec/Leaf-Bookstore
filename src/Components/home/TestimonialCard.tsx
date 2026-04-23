import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  stars: number;
}

const TestimonialCard = ({ name, role, comment, stars }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="flex justify-end mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
            />
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
        "{comment}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden border-2 border-green-50">
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;