import React, { useState } from 'react';
import { Star, MessageCircle, Plus, Minus, Heart, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';

interface BookHeroSectionProps {
  book: {
    id: string;
    title: string;
    author: string;
    description?: string;
    coverImage?: string;
    publisher?: string;
    year?: string | number;
    price: number;
    oldPrice?: number;
    discountPercentage?: number;
    rating?: number;
    reviewsCount?: number;
    totalHearts: number;
    inStock?: boolean;
  };
}

const BookHeroSection: React.FC<BookHeroSectionProps> = ({ book }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const currentPrice = book.price.toFixed(2);
  const originalPrice = book.oldPrice?.toFixed(2);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out this amazing book: ${book.title}`);

  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        <div className="md:col-span-4 lg:col-span-4 flex justify-center items-start">
          <div className="relative w-full max-w-[280px] md:max-w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl shadow-gray-200/80 group">
            
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
            )}
            
            <img
              src={book.coverImage || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=500'}
              alt={book.title}
              onLoad={() => setIsImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105 ${
                isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-none mb-3">
                  {book.title}
                </h1>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(book.rating || 4.5) ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">{(book.rating || 4.5).toFixed(1)}</span>
                  <span className="text-gray-400">({book.reviewsCount || 2380} Reviews)</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-green-600 font-medium">{book.totalHearts || '15k'} Likes</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-start bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Share on Facebook"
                >
                  {/* <Facebook size={16} fill="currentColor" /> */}
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                  title="Share on Twitter"
                >
                  {/* <Twitter size={16} fill="currentColor" /> */}
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Share on WhatsApp"
                >
                  <MessageCircle size={16} fill="currentColor" />
                </a>
              </div>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
              {book.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>

            <div className="grid grid-cols-3 gap-3 max-w-xl mb-6">
              <div className="bg-gray-50 border border-gray-100/80 p-3 rounded-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs shrink-0">
                  {book.author.charAt(0)}
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Author</p>
                  <p className="text-xs font-bold text-gray-900 truncate">{book.author}</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100/80 p-3 rounded-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs shrink-0">
                  P
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Publisher</p>
                  <p className="text-xs font-bold text-gray-900 truncate">{book.publisher || 'Lumina Press'}</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100/80 p-3 rounded-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs shrink-0">
                  Y
                </div>
                <div className="truncate">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Year</p>
                  <p className="text-xs font-bold text-gray-900 truncate">{book.year || '2026'}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8 border-b border-dashed border-gray-100 pb-6">
              <div className="flex items-center gap-1.5 bg-green-50 text-green-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-green-100/50">
                <Truck size={14} />
                FREE SHIPPING
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-emerald-100/50">
                <ShieldCheck size={14} />
                {book.inStock !== false ? 'IN STOCK' : 'OUT OF STOCK'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl font-black text-gray-900">${currentPrice}</span>
              {book.oldPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
                  <span className="bg-orange-500 text-white font-black text-xs px-2 py-0.5 rounded-lg">
                    {book.discountPercentage || 20}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 flex-1 sm:flex-none justify-end">
              <div className="flex items-center border border-gray-200 bg-white rounded-xl overflow-hidden h-12">
                <button 
                  onClick={decrementQty}
                  className="p-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-bold text-sm text-gray-900 select-none">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQty}
                  className="p-3 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-6 h-12 rounded-xl shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95 cursor-pointer">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 h-12 w-12 rounded-xl border flex items-center justify-center transition-all active:scale-95 cursor-pointer ${
                  isFavorite 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'bg-white border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookHeroSection;