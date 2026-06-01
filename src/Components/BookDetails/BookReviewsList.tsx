import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  bookId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface BookReviewsListProps {
  book: {
    rating?: number;
    reviewsCount?: number;
  };
  reviews: Review[];
}

const BookReviewsList: React.FC<BookReviewsListProps> = ({ book, reviews }) => {
  
  const totalReviewsCount = reviews.length || 1;
  
  const starDistribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    const percentage = Math.round((count / totalReviewsCount) * 100);
    return { star, percentage };
  });

  const fallbackRating = reviews.length > 0 
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
    : 0;

  const displayRating = book.rating !== undefined ? book.rating : fallbackRating;

  return (
    <div className="animate-in fade-in duration-300 space-y-8">
      
      <div className="flex flex-col sm:flex-row items-center gap-8 bg-gray-50/40 p-6 rounded-2xl border border-gray-100/70">
        
        <div className="flex-1 w-full space-y-2">
          <h4 className="font-bold text-gray-900 text-md mb-4 tracking-wide">
            Rating Information
          </h4>
          {starDistribution.map((dist) => (
            <div key={dist.star} className="flex items-center gap-3 text-md font-bold text-gray-400">
              <span className="w-3 text-gray-500">{dist.star}</span>
              <Star size={14} className="fill-amber-400 text-amber-400 shrink-0" />
              
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${dist.percentage}%` }}
                />
              </div>
              
              <span className="w-8 text-right text-gray-500">{dist.percentage}%</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-200/60 pt-4 sm:pt-0 sm:pl-8 shrink-0 min-w-[140px]">
          <span className="text-5xl font-black text-gray-900 leading-none mb-2">
            {displayRating.toFixed(1)}
          </span>
          <div className="flex text-amber-400 gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.round(displayRating) ? "currentColor" : "none"} 
                className={i < Math.round(displayRating) ? "text-amber-400" : "text-gray-200"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400 font-bold">
            ({book.reviewsCount || reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-2xl bg-white">
            <p className="text-gray-400 font-bold text-sm">No reviews yet for this book.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div 
              key={review.id} 
              className="border border-gray-100/80 rounded-2xl p-5 flex flex-col sm:flex-row justify-between gap-4 bg-white hover:shadow-md hover:shadow-gray-100/40 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 font-black text-sm shrink-0 uppercase border border-gray-200">
                  {review.userName.charAt(0)}
                </div>
                
                <div className="space-y-1">
                  <h5 className="font-bold text-gray-900 text-md">{review.userName}</h5>
                  <span className="text-[12px] text-gray-400 font-bold block">
                    {new Date(review.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed max-w-2xl pt-1">
                    {review.comment}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-1.5 shrink-0 self-start sm:self-center bg-gray-50/60 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl border border-gray-100 sm:border-none">
                <span className="text-sm font-black text-orange-600 leading-none">
                  {review.rating.toFixed(1)}
                </span>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      fill={i < review.rating ? "currentColor" : "none"} 
                      className={i < review.rating ? "text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {reviews.length > 0 && (
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-sm py-4 rounded-xl transition-all active:scale-[0.995] cursor-pointer shadow-lg shadow-green-100/80">
          View More
        </button>
      )}

    </div>
  );
};

export default BookReviewsList;