import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { EnhancedBook } from '../../../Types';

const BookListCard = ({ book }: { book: EnhancedBook }) => {
  const { title, author, image, averageRating, newPrice, oldPrice, description, totalReviews } = book;

  return (
    <div className="group bg-white rounded-[2rem] p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-green-100 border border-transparent hover:border-green-50 flex flex-col sm:flex-row gap-6 items-center">
      
      <div className="relative w-32 h-44 md:w-40 md:h-52 shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      <div className="flex-1 min-w-0 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{title}</h3>
            <p className="text-sm text-gray-400 font-medium">{author}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 my-4 leading-relaxed">
          {description || "No description available for this book. Explore more details to learn about the plot and characters."}
        </p>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-700">{averageRating}</span>
          </div>
          <span className="text-gray-400 text-xs">({totalReviews} reviews)</span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-green-600 font-black text-xl">${newPrice}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">${oldPrice}</span>
            )}
          </div>
          
          <button className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-100">
            <ShoppingCart size={18} />
            <span className="hidden xs:block text-sm">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;