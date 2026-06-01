import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { bookService } from '../../Services/bookService';
import { Star, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface RelatedBooksProps {
  currentBookId: string;
  categories?: string[];
  author?: string;
}

interface BookMinified {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price?: number;
  rating?: number;
}

const RelatedBooks: React.FC<RelatedBooksProps> = ({ currentBookId, categories = [], author = '' }) => {
  const navigate = useNavigate();

  const primaryCategory = categories.length > 0 ? categories[0] : '';

  const { data: allRelatedBooks, isLoading, isError } = useQuery({
    queryKey: ['related-books', currentBookId, categories, author],
    queryFn: () => bookService.getBooksByCategory(currentBookId, categories, author),
    enabled: !!currentBookId && categories.length > 0,
    staleTime: 1000 * 60 * 15, 
  });

  const relatedBooks: BookMinified[] = allRelatedBooks ? allRelatedBooks.slice(0, 3) : [];

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <Loader2 className="animate-spin text-green-600 mb-2" size={24} />
        <p className="text-gray-400 font-bold text-xs">Fetching related books...</p>
      </div>
    );
  }

  if (isError || relatedBooks.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center py-8">
        <h3 className="font-black text-gray-900 text-base mb-1">Related Books</h3>
        <p className="text-gray-400 font-medium text-xs py-4">No recommendations available for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
      
      <div className="flex justify-between items-center border-b border-gray-50 pb-3">
        <h3 className="font-black text-gray-900 text-base tracking-tight">
          Related Books
        </h3>
        <button 
          onClick={() => navigate(`/books?category=${encodeURIComponent(primaryCategory)}`)}
          className="text-green-600 hover:text-green-700 flex items-center gap-1 font-bold text-xs transition-colors cursor-pointer group"
        >
          See All 
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {relatedBooks.map((book) => (
          <div 
            key={book.id}
            onClick={() => navigate(`/books/${book.id}`)}
            className="flex gap-4 items-center p-2 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-22 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 shadow-sm group-hover:shadow transition-shadow">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <h4 className="font-bold text-gray-900 text-sm truncate group-hover:text-green-600 transition-colors">
                {book.title}
              </h4>
              <p className="text-gray-400 font-bold text-xs truncate">
                by {book.author}
              </p>
              
              <div className="flex items-center gap-1 pt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={10} 
                      fill={i < Math.floor(book.rating || 4.5) ? "currentColor" : "none"} 
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-black pt-0.5">
                  {(book.rating || 4.5).toFixed(1)}
                </span>
              </div>

              {book.price && (
                <p className="text-green-600 font-black text-xs pt-1">
                  ${book.price.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RelatedBooks;