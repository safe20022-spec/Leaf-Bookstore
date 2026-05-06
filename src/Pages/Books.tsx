import Header from "../Components/layout/Header";
import BooksGridContainer from "../Components/Books/Grid/BooksGridContainer";
const Books = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          <aside className="w-full md:w-64 lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              <h2 className="text-xl font-black text-gray-900 mb-6">Filter Option</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 min-h-[400px]">
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Categories</p>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border border-gray-300 bg-white" />
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">Price Range</p>
                    <div className="h-2 bg-gray-200 rounded-full relative">
                       <div className="absolute left-4 right-10 h-full bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100">
                  Refine Search
                </button>
              </div>
            </div>
          </aside>

          <section className="flex-1">
             <h2 className="text-xl font-black text-gray-900 mb-6">Books</h2>
             <BooksGridContainer />
          </section>

        </div>
      </main>
    </div>
  )
}

export default Books;