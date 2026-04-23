const BestSellerCard = () => {
  return (
    <div className="bg-[#1C1D21] rounded-3xl p-8 flex flex-col items-center justify-between h-full relative overflow-hidden shadow-xl">
      
      <h3 className="text-xl font-bold text-white tracking-tight text-center w-full">
        Best Seller
      </h3>

      <div className="flex flex-col items-center w-full mt-4">
        <div className="w-full max-w-[160px] aspect-[3/4] bg-[#3B3C42] rounded-xl shadow-2xl border border-[#4F5057] flex items-center justify-center mb-6 transition-transform hover:scale-105 duration-300">
          <span className="text-gray-500 text-xs">Book Cover</span>
        </div>

        <div className="text-center w-full px-4">
          <div className="h-4 bg-[#3B3C42] w-3/4 mx-auto rounded animate-pulse mb-2"></div>
          <div className="h-3 bg-[#3B3C42] w-1/2 mx-auto rounded animate-pulse"></div>
        </div>
      </div>

      <button className="text-green-400 font-bold text-sm mt-6 border-b border-green-500/50 pb-1 hover:text-green-300 transition-all">
        View Details
      </button>
    </div>
  );
};

export default BestSellerCard;