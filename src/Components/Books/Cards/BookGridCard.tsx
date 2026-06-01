import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { Book } from '../../../Types';
import { useFavoriteStore } from '../../../Store/useFavoriteStore';
import { useNavigate } from 'react-router-dom';

interface BookGridCardProps {
  book: Book;
}

const BookGridCard = ({ book }: BookGridCardProps) => {
  const { id, title, author, image, averageRating, newPrice, oldPrice, totalHearts } = book;
  
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const favorited = isFavorite(id);

  const handleCardClick = () => {
    navigate(`/books/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group cursor-pointer relative bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-green-100 border border-transparent hover:border-green-50 flex flex-col h-full"
    >
      
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-gray-100 shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          className={`absolute cursor-pointer top-3 right-3 p-2 backdrop-blur-sm rounded shadow-sm transition-all ${favorited ? "bg-green-500" : "bg-white"}`}
        >
          <Heart 
            size={20} 
            className={`transition-colors duration-300 ${
              favorited 
                ? "fill-green-500 text-white" 
                : "text-gray-400 hover:text-green-500"
            }`} 
          />
        </button>
      </div>

      <div className="space-y-2 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 truncate text-md">{title}</h3>
            <p className="text-sm text-gray-400 font-medium">{author}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-600">{averageRating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart size={14} className={favorited ? "fill-green-500 text-green-500" : "text-gray-300"} />
            <span className="text-[14px] font-bold text-gray-400">
              {favorited ? totalHearts + 1 : totalHearts}
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 hidden group-hover:flex items-center justify-between animate-in fade-in slide-in-from-bottom-2 duration-300 bg-white pt-2">
          <div className="flex flex-col">
            <span className="text-green-600 font-bold text-base">${newPrice}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">${oldPrice}</span>
            )}
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-green-600 text-white p-2.5 rounded-xl hover:bg-green-700 transition-all active:scale-90 shadow-md shadow-green-100 cursor-pointer"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookGridCard;