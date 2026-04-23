import { ArrowRight } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="bg-[#F1F8F5] rounded-3xl p-10 relative overflow-hidden h-full min-h-[390px] flex flex-col justify-center border border-green-50/50">
      
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF9F66] rounded-full opacity-90"></div>
      
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D1E9DE] rounded-full opacity-60"></div>
      
      <div className="relative z-10 max-w-lg">
        <span className="text-green-600 font-bold text-sm mb-3 block tracking-[0.2em] uppercase">
          Back to School
        </span>
        
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Special 50% Off <br />
          <span className="text-2xl lg:text-3xl font-medium text-gray-500">
            for our summer collection
          </span>
        </h2>
        
        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-100">
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="bg-white text-green-700 border border-green-100 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;