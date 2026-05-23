import { useQuery } from '@tanstack/react-query';
import { bookService } from '../../../Services/bookService';
import { useViewStore } from '../../../Store/useViewStore';
import ControlBar from './ControlBar';
import GridView from './GridView';
import ListView from './ListView';
import BooksSkeleton from './BooksSkeleton';
import PaginationBar from './PaginationBar';

const BooksGridContainer = () => {
  const { 
    viewMode, 
    setViewMode, 
    timeFilter, 
    filters,
    currentPage, 
    itemsPerPage 
  } = useViewStore();

  const { data: books, isLoading, isError } = useQuery({
    queryKey: ['books', timeFilter, filters],
    queryFn: () => bookService.getBooks({ timeFilter, filters }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className="flex-1">
        <ControlBar viewMode={viewMode} setViewMode={setViewMode} />
        <BooksSkeleton viewMode={viewMode} />
      </div>
    );
  }  

  if (isError) {
    return <div className="py-20 text-center text-red-500">Failed to load books.</div>;
  }

  const safeBooks = books || [];

  const filteredBooksBySearch = safeBooks.filter((book) => {
    const query = (filters?.searchQuery || '').toLowerCase().trim();
    if (!query) return true; 
    
    const bookTitle = book?.title ? String(book.title).toLowerCase() : '';
    const bookAuthor = book?.author ? String(book.author).toLowerCase() : '';

    return (
      bookTitle.includes(query) || 
      bookAuthor.includes(query)
    );
  });
  
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;

  const currentBooksToShow = filteredBooksBySearch.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="flex-1 flex flex-col">
      <h2 className="text-2xl font-black text-gray-900 mb-3">Books</h2>
      <ControlBar viewMode={viewMode} setViewMode={setViewMode} />

      {filteredBooksBySearch.length === 0 ? (
        <div className="py-20 text-center text-gray-500 font-medium">
          No books found matching "{filters?.searchQuery}"
        </div>
      ) : (
        viewMode === 'grid' ? (
          <GridView books={currentBooksToShow} />
        ) : (
          <ListView books={currentBooksToShow} />
        )
      )}

      <PaginationBar activeBooks={filteredBooksBySearch} />
    </div>
  );
};

export default BooksGridContainer;