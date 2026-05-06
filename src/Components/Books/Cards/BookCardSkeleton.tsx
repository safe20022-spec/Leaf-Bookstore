const BookCardSkeleton = ({ viewMode }: { viewMode: 'grid' | 'list' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-gray-50 rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 items-center animate-pulse">
        <div className="w-32 h-44 md:w-40 md:h-52 bg-gray-200 rounded-2xl shrink-0" />
        <div className="flex-1 w-full space-y-4">
          <div className="h-6 bg-gray-200 rounded-md w-3/4" />
          <div className="h-4 bg-gray-200 rounded-md w-1/4" />
          <div className="space-y-2 py-2">
            <div className="h-3 bg-gray-200 rounded-md w-full" />
            <div className="h-3 bg-gray-200 rounded-md w-5/6" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="h-8 bg-gray-200 rounded-md w-20" />
            <div className="h-12 bg-gray-200 rounded-xl w-32" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-3xl p-4 flex flex-col h-full animate-pulse">
      <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded-md w-3/4" />
        <div className="h-3 bg-gray-200 rounded-md w-1/2" />
        <div className="h-3 bg-gray-200 rounded-md w-1/4" />
      </div>
    </div>
  );
};

export default BookCardSkeleton;