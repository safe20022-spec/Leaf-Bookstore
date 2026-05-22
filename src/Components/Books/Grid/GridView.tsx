import type { EnhancedBook } from '../../../Types';
import BookGridCard from '../Cards/BookGridCard';
import { useViewStore } from '../../../Store/useViewStore';

const GridView = ({ books }: { books: EnhancedBook[] }) => { 
  const { currentPage } = useViewStore();

  return (
    <div 
      key={`grid-page-${currentPage}`} 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 page-fade-animation"
    >
      {books.map((book) => (
        <BookGridCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default GridView;