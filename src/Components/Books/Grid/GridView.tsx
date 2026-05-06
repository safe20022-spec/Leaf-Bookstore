import BookGridCard from '../Cards/BookGridCard';
import type { EnhancedBook } from '../../../Types';

const GridView = ({ books }: { books: EnhancedBook[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
    {books.map((book) => (
      <BookGridCard key={book.id} book={book} />
    ))}
  </div>
);

export default GridView;