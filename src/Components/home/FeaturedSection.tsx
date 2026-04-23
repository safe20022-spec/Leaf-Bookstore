import { Star, ShoppingCart } from 'lucide-react';

const FeaturedSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-[#F9FBF9] rounded-[3rem] my-12">
      <h2 className="text-3xl font-black text-gray-900 mb-10 pl-4">Featured Books</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 aspect-[3/4] bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner">
             <div className="w-32 h-48 bg-white shadow-2xl rotate-3 rounded"></div>
          </div>
          
          <div className="flex flex-col justify-center flex-1">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-400 ml-2">(4.5)</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">The Absolute Hero</h3>
            <p className="text-green-600 font-semibold text-sm mb-4">By James Clear</p>
            <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-4">
              This book provides a deep dive into the habits that transform lives. Learn how small changes can lead to remarkable results over time.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-black text-gray-900">$29.99</span>
              <button className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all">
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-full aspect-[3/4] bg-white rounded-2xl mb-3 shadow-sm border border-gray-100 transition-transform group-hover:-translate-y-2 flex items-center justify-center">
                 <div className="w-12 h-16 bg-gray-50 shadow-md"></div>
              </div>
              <h4 className="text-xs font-bold text-gray-800 truncate w-full">Similar Book {i}</h4>
              <p className="text-[10px] text-green-600">$19.00</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;