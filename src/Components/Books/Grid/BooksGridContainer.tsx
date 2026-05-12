import { useQuery } from '@tanstack/react-query';
import { bookService } from '../../../Services/bookService';
import { useViewStore } from '../../../Store/useViewStore';
import ControlBar from './ControlBar';
import GridView from './GridView';
import ListView from './ListView';
import BooksSkeleton from './BooksSkeleton';

const BooksGridContainer = () => {
  const { viewMode, setViewMode, timeFilter, filters } = useViewStore();

  const { data: books, isLoading, isError } = useQuery({
    queryKey: ['books', timeFilter, filters],
    
    queryFn: () => bookService.getBooks({ timeFilter, filters }),
    
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return (
      <div className="flex-1">
        <ControlBar 
          viewMode={viewMode} 
          setViewMode={setViewMode}        />
        <BooksSkeleton viewMode={viewMode} />
      </div>
    );
  }  

  if (isError) return <div className="py-20 text-center text-red-500">Failed to load books.</div>;

  return (
    <div className="flex-1">
      <ControlBar 
        viewMode={viewMode} 
        setViewMode={setViewMode}
      />

      {viewMode === 'grid' ? (
        <GridView books={books || []} />
      ) : (
        <ListView books={books || []} />
      )}
    </div>
  );
};

export default BooksGridContainer;