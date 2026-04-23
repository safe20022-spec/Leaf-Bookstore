const Subscribe = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-[#4ADE80] rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-green-100">
        
        <div className="absolute top-[-20%] left-[-5%] w-64 h-64 bg-orange-400 rounded-full opacity-80 blur-2xl"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="absolute top-10 right-20 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 0L55.9808 45H4.01924L30 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            Subscribe to our newsletter for the <br /> latest updates and offers
          </h2>
          
          <div className="bg-white p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-xl w-full max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 w-full px-6 py-3 text-gray-700 outline-none rounded-full"
            />
            <button className="bg-[#6366F1] text-white px-10 py-4 rounded-xl md:rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-95 w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;