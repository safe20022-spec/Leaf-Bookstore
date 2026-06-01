import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { bookService } from '../Services/bookService';

import Header from '../Components/layout/Header';
import BookHeroSection from '../Components/BookDetails/BookHeroSection';

import BookTabsContainer from '../Components/BookDetails/BookTabsContainer';
import BookDetailsTable from '../Components/BookDetails/BookDetailsTable';
import BookReviewsList from '../Components/BookDetails/BookReviewsList';
import RelatedBooks from '../Components/BookDetails/RelatedBooks';

import { ChevronLeft, Loader2 } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: book, isLoading, isError } = useQuery({
    queryKey: ['book', id],
    queryFn: () => bookService.getBookById(id as string),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });

  const bookReviews = book?.reviews || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAF6] flex flex-col items-center justify-center gap-3">
        <Loader2 className="animate-spin text-green-600" size={40} />
        <p className="text-gray-500 font-bold text-sm tracking-wide animate-pulse">Loading Book Details...</p>
      </div>
    );
  }

  if (isError || !book) {
    return (
      <div className="min-h-screen bg-[#F8FAF6] flex flex-col items-center justify-center gap-4">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
          <p className="text-red-500 font-black text-lg mb-2">Oops! Something went wrong</p>
          <p className="text-gray-400 font-bold text-xs mb-6">We couldn't find the book you are looking for.</p>
          <button onClick={() => navigate('/books')} className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer">
            Back to Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF6] flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        
        <button 
          onClick={() => navigate(-1)} 
          className="group flex items-center gap-2 text-gray-400 hover:text-green-600 font-bold text-sm mb-8 transition-colors cursor-pointer"
        >
          <div className="p-1.5 rounded-lg border border-gray-200 bg-white group-hover:border-green-200 transition-all shadow-sm">
            <ChevronLeft size={16} />
          </div>
          Back to Results
        </button>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <BookHeroSection book={book} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
          
          <div className="lg:col-span-8">
            <BookTabsContainer activeTab={activeTab} setActiveTab={setActiveTab}>
              
              {activeTab === 'details' ? (
                <BookDetailsTable book={book} />
              ) : (
                <BookReviewsList book={book} reviews={bookReviews} />
              )}
              
            </BookTabsContainer>
          </div>

          <div className="lg:col-span-4">
            <RelatedBooks currentBookId={book.id} categories={book.categories} author={book.author} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default BookDetails;