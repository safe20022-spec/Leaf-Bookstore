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
  
  const indexOfLastBook = currentPage * itemsPerPage; // 12
  const indexOfFirstBook = indexOfLastBook - itemsPerPage; // 12 - 12 = 0
  const currentBooksToShow = safeBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="flex-1 flex flex-col">
      <ControlBar viewMode={viewMode} setViewMode={setViewMode} />

      {viewMode === 'grid' ? (
        <GridView books={currentBooksToShow} />
      ) : (
        <ListView books={currentBooksToShow} />
      )}

      <PaginationBar activeBooks={safeBooks} />
    </div>
  );
};

export default BooksGridContainer;