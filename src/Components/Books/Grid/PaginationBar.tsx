import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useViewStore } from '../../../Store/useViewStore';
import type { EnhancedBook } from '../../../Types';

interface PaginationBarProps {
  activeBooks: EnhancedBook[];
}

const PaginationBar = ({ activeBooks }: PaginationBarProps) => {
  const { currentPage, itemsPerPage, setCurrentPage, nextPage, prevPage } = useViewStore();

  const totalBooks = activeBooks.length;
  const totalPages = Math.ceil(totalBooks / itemsPerPage);

  if (totalPages <= 1) return null;

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const showingFrom = totalBooks === 0 ? 0 : indexOfFirstBook + 1;
  const showingTo = Math.min(indexOfLastBook, totalBooks);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-100">
      <p className="text-sm text-gray-500 font-medium">
        Showing <span className="text-gray-900 font-bold">{showingFrom} to {showingTo}</span> of <span className="text-gray-900 font-bold">{totalBooks}</span> Entries
      </p>

      <div className="flex items-center gap-1.5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-2.5 rounded-xl border border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-all disabled:opacity-40 cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-9 h-9 cursor-pointer rounded-xl text-xs font-bold transition-all ${
              currentPage === page
                ? "bg-green-600 text-white shadow-md shadow-green-100"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => nextPage(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2.5 rounded-xl border border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-green-600 transition-all disabled:opacity-40 cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;