import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { Book } from '../../../Types';

interface BookGridCardProps {
  book: Book;
}

const BookGridCard = ({ book }: BookGridCardProps) => {
  const { title, author, image, averageRating, newPrice, oldPrice } = book;

  return (
    <div className="group relative bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-green-100 border border-transparent hover:border-green-50 flex flex-col h-full">
      
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-gray-100 shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <div className="space-y-2 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 truncate text-sm">{title}</h3>
        <p className="text-xs text-gray-400 font-medium">{author}</p>
        
        <div className="flex items-center gap-1 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-gray-600">{averageRating}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 hidden group-hover:flex items-center justify-between animate-in fade-in slide-in-from-bottom-2 duration-300 bg-white pt-2">
          <div className="flex flex-col">
            <span className="text-green-600 font-bold text-base">${newPrice}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">${oldPrice}</span>
            )}
          </div>
          
          <button className="bg-green-600 text-white p-2.5 rounded-xl hover:bg-green-700 transition-all active:scale-90 shadow-md shadow-green-100">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookGridCard;