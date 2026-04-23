interface FlashSaleCardProps {
  title: string;
  categories: string[];
  price: number;
  oldPrice: number;
  imageColor: string;
}

const FlashSaleCard = ({ title, categories, price, oldPrice, imageColor }: FlashSaleCardProps) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className={`w-full aspect-[3/4] ${imageColor} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}>
        <div className="w-20 h-28 bg-white/50 rounded shadow-md border border-white/30"></div>
        
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">
          SAVE {Math.round(((oldPrice - price) / oldPrice) * 100)}%
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-green-600 transition-colors">
          {title}
        </h4>

        <div className="flex flex-wrap justify-center gap-1 mb-2">
          {categories.map((cat, idx) => (
            <span key={idx} className="text-[10px] font-semibold text-green-600 uppercase tracking-wider">
              {cat}{idx < categories.length - 1 ? " •" : ""}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold text-base">
            ${price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${oldPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;