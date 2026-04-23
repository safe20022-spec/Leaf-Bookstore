import { Calendar, User } from 'lucide-react';

interface NewsProps {
  title: string;
  author: string;
  date: string;
  imageColor: string;
}

const NewsCard = ({ title, author, date, imageColor }: NewsProps) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className={`relative w-full aspect-video ${imageColor} rounded-3xl mb-5 overflow-hidden shadow-sm transition-transform duration-500 group-hover:shadow-xl`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="w-full h-full flex items-center justify-center">
           <div className="w-20 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col px-2">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            <User size={12} className="text-green-500" />
            {author}
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase font-bold tracking-widest">
            <Calendar size={12} className="text-green-500" />
            {date}
          </div>
        </div>

        <h3 className="text-lg font-extrabold text-gray-800 leading-snug mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
          {title}
        </h3>

        <button className="text-green-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all self-start border-b-2 border-green-500/20 pb-1">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;