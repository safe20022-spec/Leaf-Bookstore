import { useQuery } from "@tanstack/react-query";
import { bookService } from "../../Services/bookService";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SaleBookCard from "../home/SaleBookCard";
import { useRef, useState } from "react";

const BooksOnSale = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { data: saleBooks } = useQuery({
        queryKey: ['saleBooks'],
        queryFn: bookService.getSaleBooks
    });

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'left' 
                ? scrollLeft - clientWidth 
                : scrollLeft + clientWidth;
            
            sliderRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    const dots = [0, 1, 2];

    return (
        <section className="py-12 container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Books on Sale</h2>
                
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-1.5">
                        {dots.map((dot) => (
                            <span 
                                key={dot}
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                    activeIndex === dot ? "bg-green-500 w-4" : "bg-gray-200"
                                }`}
                            ></span>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            className="p-2 border border-gray-100 rounded-full hover:bg-green-500 hover:text-white transition-all text-gray-400 active:scale-95"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="p-2 border border-gray-100 rounded-full hover:bg-green-500 hover:text-white transition-all text-gray-400 active:scale-95"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div 
                ref={sliderRef}
                onScroll={handleScroll} 
                className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {saleBooks?.map(book => (
                    <div key={book.id} className="min-w-[160px] sm:min-w-[200px] lg:min-w-[225px] snap-start">
                        <SaleBookCard 
                            title={book.title} 
                            categories={book.categories} 
                            price={book.newPrice} 
                            oldPrice={book.oldPrice} 
                            rating={book.averageRating} 
                            discount={book.discountPercentage} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BooksOnSale;