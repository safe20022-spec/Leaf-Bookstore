import BookListCard from '../Cards/BookListCard';
import type { EnhancedBook } from '../../../Types';

interface ListViewProps {
  books: EnhancedBook[];
}

const ListView = ({ books }: ListViewProps) => {
  return (
    <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {books.length > 0 ? (
        books.map((book) => (
          <BookListCard key={book.id} book={book} />
        ))
      ) : (
        <div className="py-20 text-center text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          No books found in this category.
        </div>
      )}
    </div>
  );
};

export default ListView;