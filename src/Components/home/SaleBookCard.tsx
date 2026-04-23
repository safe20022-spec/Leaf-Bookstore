import { Star } from 'lucide-react';

interface SaleBookProps {
  title: string;
  categories: string[];
  price: number;
  oldPrice: number;
  rating: number;
  discount: string;
  imageColor: string;
}

const SaleBookCard = ({ title, categories, price, oldPrice, rating, discount, imageColor }: SaleBookProps) => {
  return (
    <div className="flex flex-col group">
      <div className={`relative w-full aspect-[3/4] ${imageColor} rounded-2xl mb-4 overflow-hidden shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md`}>
        <div className="absolute top-0 left-0 bg-orange-500 text-white font-bold text-xs px-3 py-1.5 rounded-br-xl z-10">
          {discount}
        </div>
        
        <div className="w-full h-full flex items-center justify-center">
           <div className="w-16 h-24 bg-white/30 rounded shadow-lg"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <h4 className="font-bold text-gray-800 text-sm mb-1 truncate">{title}</h4>
        <p className="text-[10px] text-green-600 font-medium mb-3 uppercase tracking-tight">
          {categories.join(' • ')}
        </p>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-600">{rating}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] text-gray-400 line-through leading-none">${oldPrice.toFixed(2)}</span>
            <span className="text-sm font-bold text-green-600 leading-tight">${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBookCard;