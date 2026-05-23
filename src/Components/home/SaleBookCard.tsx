import { Star } from 'lucide-react';

interface SaleBookProps {
  title: string;
  categories: string[];
  price: number;
  oldPrice: number;
  rating: number;
  discount: number;
  image?: string;
  imageColor?: string;
}

const SaleBookCard = ({ title, categories, price, oldPrice, rating, discount, image, imageColor }: SaleBookProps) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative w-full aspect-[3/4] rounded-2xl mb-4 overflow-hidden shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md bg-gray-100">
        
        <div className="absolute top-0 left-0 bg-[#FF776D] text-white font-bold text-md px-3 py-1.5 rounded-br-xl z-10">
          {discount}%
        </div>
        
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" 
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
      </div>

      <div className="flex flex-col">
        <h4 className="font-bold text-gray-800 text-lg mb-1 truncate" title={title}>{title}</h4>
        <p className="text-[12px] text-green-600 font-medium mb-3 uppercase tracking-tight">
          {categories.join(' • ')}
        </p>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold text-gray-600">{rating}</span>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[14px] text-gray-400 line-through leading-none">${oldPrice.toFixed(2)}</span>
            <span className="text-md font-bold text-green-600 leading-tight">${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBookCard;