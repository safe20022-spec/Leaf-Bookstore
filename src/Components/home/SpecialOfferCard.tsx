// src/components/home/SpecialOfferCard.tsx
import { ShoppingCart } from 'lucide-react';

interface SpecialOfferProps {
  title: string;
  author: string;
  description: string;
  price: number;
  oldPrice: number;
  imageColor: string;
}

const SpecialOfferCard = ({ title, author, description, price, oldPrice, imageColor }: SpecialOfferProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 flex flex-col h-full
                    transition-all duration-300 ease-in-out
                    
                    hover:-translate-y-2 
                    hover:shadow-xl hover:shadow-green-100/70 
                    hover:border-green-100/50 
                    
                    cursor-pointer group 
    ">
      
      <div className={`w-full aspect-[4/3] ${imageColor} rounded-2xl mb-6 flex items-center justify-center shadow-inner overflow-hidden`}>
         <div className="w-24 h-36 bg-white/40 rounded-md shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-105"></div>
      </div>

      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">{title}</h4>
        <p className="text-sm text-green-600 font-medium mb-3">{author}</p>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
          <span className="text-xl font-bold text-gray-800">${price.toFixed(2)}</span>
        </div>
        
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition-all active:scale-95 shadow-md shadow-green-100">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpecialOfferCard;