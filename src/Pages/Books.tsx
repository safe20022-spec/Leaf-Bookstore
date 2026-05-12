import Header from "../Components/layout/Header";
import BooksGridContainer from "../Components/Books/Grid/BooksGridContainer";
import FilterSidebar from "../Components/Books/Filter/FilterSidebar";
const Books = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          <aside className="w-full md:w-64 lg:w-72 shrink-0">
            <FilterSidebar />
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