import BookCardSkeleton from '../Cards/BookCardSkeleton';

const BooksSkeleton = ({ viewMode }: { viewMode: 'grid' | 'list' }) => {
  const skeletons = Array.from({ length: 8 }); 

  return (
    <div className={
      viewMode === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
        : "flex flex-col gap-5"
    }>
      {skeletons.map((_, index) => (
        <BookCardSkeleton key={index} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default BooksSkeleton;