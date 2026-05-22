import { Users, BookOpen, SwatchBook, PenTool } from 'lucide-react';
import Header from '../Components/layout/Header';
import PromoBanner from '../Components/home/PromoBanner';
import BestSellerCard from '../Components/home/BestSellerCard';
import { Truck, ShieldCheck, ThumbsUp, Headset } from 'lucide-react';
import FeatureCard from '../Components/home/FeatureCard';
import BookSelectionSection from '../Components/home/BookSelectionSection';
import FlashSaleCard from '../Components/home/FlashSaleCard';
import SpecialOfferCard from '../Components/home/SpecialOfferCard';
import FeaturedSection from '../Components/home/FeaturedSection';
import TestimonialCard from '../Components/home/TestimonialCard';
import SaleBookCard from '../Components/home/SaleBookCard';
import NewsCard from '../Components/home/NewsCard';
import StatItem from '../Components/home/StatItem';
import Subscribe from '../Components/home/Subscribe';
import Footer from '../Components/layout/Footer';
import Features from '../Components/home/Features';



const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PromoBanner />
          </div>
          <div className="lg:col-span-1">
            <BestSellerCard />
          </div>
        </div>

        <Features />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <BookSelectionSection 
            title="Recommended For You"
            bgColor="bg-[#FFF4E5]" 
            accentColor="bg-orange-400"
            decorationType="circles"
          />
          <BookSelectionSection 
            title="Popular in 2026"
            bgColor="bg-[#E3F2FD]" 
            accentColor="bg-blue-400"
            decorationType="dots"
          />
        </div>

        <div className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Special Offers</h2>
                <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
                Check out our latest discounts on the best-selling books of the season.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SpecialOfferCard 
                title="The Art of Design"
                author="By Sarah Jenkins"
                description="Learn the fundamentals of modern design and how to apply them in your projects."
                price={25.00}
                oldPrice={45.00}
                imageColor="bg-blue-50"
                />
                <SpecialOfferCard 
                title="Nature's Whisper"
                author="By David Atten"
                description="A deep dive into the world's most mysterious forests and their hidden secrets."
                price={18.50}
                oldPrice={32.00}
                imageColor="bg-green-50"
                />
                <SpecialOfferCard 
                title="Future Tech 2026"
                author="By Alan Turing Jr."
                description="Exploring the boundaries of AI, robotics, and the future of human-machine interaction."
                price={30.00}
                oldPrice={55.00}
                imageColor="bg-purple-50"
                />
            </div>
  
            <div className="flex justify-center gap-2 mt-10">
                <div className="w-8 h-2 bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
        </div>

        <div className="py-12 border-t border-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-black text-gray-900 mb-2">Flash Sale</h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Don't miss the deal</p>
                
                <div className="mt-4 h-10 flex justify-center items-center">
                <span className="text-gray-300 text-sm italic">Countdown Timer Placeholder...</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <FlashSaleCard 
                title="The Wild Oak"
                categories={["Nature", "Adventure"]}
                price={12.00}
                oldPrice={24.00}
                imageColor="bg-gray-100"
                />
                <FlashSaleCard 
                title="Space Echoes"
                categories={["Sci-Fi"]}
                price={15.50}
                oldPrice={30.00}
                imageColor="bg-blue-50"
                />
                <FlashSaleCard 
                title="Silent Night"
                categories={["Mystery", "Drama"]}
                price={10.00}
                oldPrice={18.00}
                imageColor="bg-purple-50"
                />
                <FlashSaleCard 
                title="Urban Design"
                categories={["Architecture"]}
                price={20.00}
                oldPrice={45.00}
                imageColor="bg-orange-50"
                />
                <FlashSaleCard 
                title="Cooking Master"
                categories={["Food", "Lifestyle"]}
                price={14.00}
                oldPrice={28.00}
                imageColor="bg-green-50"
                />
            </div>
        </div>

        <div className="py-12 border-t border-gray-50">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-gray-900">Books on Sale</h2>
                <button className="text-green-600 font-bold text-sm hover:underline">View All</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <SaleBookCard 
                title="The Midnight Library"
                categories={["Fiction", "Drama"]}
                price={14.00}
                oldPrice={28.00}
                rating={4.8}
                discount={50}
                imageColor="bg-blue-50"
                />
                <SaleBookCard 
                title="Atomic Habits"
                categories={["Self-Help"]}
                price={12.50}
                oldPrice={25.00}
                rating={4.9}
                discount={50}
                imageColor="bg-orange-50"
                />
                <SaleBookCard 
                title="Deep Work"
                categories={["Productivity"]}
                price={15.00}
                oldPrice={30.00}
                rating={4.7}
                discount={50}
                imageColor="bg-gray-100"
                />
            </div>
        </div>

        <div>
            <FeaturedSection />
        </div>

        <div className="py-20 container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
                <h2 className="text-3xl font-black text-gray-900 mb-4">Testimonials</h2>
                <p className="text-gray-400 text-sm max-w-lg mb-8">
                Our community is growing every day. Here is what some of our 
                readers have to say about their experience with us.
                </p>

                <div className="flex items-center -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-green-600 flex items-center justify-center text-white text-xs font-bold">
                    21K+
                </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard 
                name="Eslam Mohamed"
                role="Software Engineer"
                comment="The variety of tech books here is amazing. I found everything I needed for my MERN stack journey in one place."
                stars={5}
                />
                <TestimonialCard 
                name="Sarah Ahmed"
                role="Graphic Designer"
                comment="Fast delivery and the books arrived in perfect condition. The UI of the website is also very comfortable for the eyes."
                stars={5}
                />
                <TestimonialCard 
                name="Omar Khalid"
                role="University Student"
                comment="Affordable prices and great discounts for students. I highly recommend this store for anyone looking for quality."
                stars={4}
                />
            </div>
        </div>

        <div className="py-20 container mx-auto px-4 border-t border-gray-50">
            <div className="flex justify-between items-end mb-12">
                <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Latest News</h2>
                <p className="text-gray-400 text-sm">Stay updated with the latest trends in the world of books.</p>
                </div>
                <button className="bg-green-50 text-green-600 px-6 py-3 rounded-2xl font-bold text-sm hover:bg-green-600 hover:text-white transition-all">
                View All News
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <NewsCard 
                title="Why reading books every day is important for your brain"
                author="Admin"
                date="20 April 2026"
                imageColor="bg-blue-50"
                />
                <NewsCard 
                title="Top 10 books to read in the summer of 2026"
                author="Sarah J."
                date="18 April 2026"
                imageColor="bg-orange-50"
                />
                <NewsCard 
                title="How to build a personal library on a small budget"
                author="Mike Ross"
                date="15 April 2026"
                imageColor="bg-green-50"
                />
                <NewsCard 
                title="The future of AI in writing modern science fiction"
                author="Tech Team"
                date="10 April 2026"
                imageColor="bg-purple-50"
                />
            </div>
        </div>

        <div className="py-16 container mx-auto px-4 border-b border-gray-50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <StatItem 
                icon={<Users size={32} strokeWidth={2.5} />} 
                count="125,963" 
                label="Happy Customers" 
                />
                <StatItem 
                icon={<BookOpen size={32} strokeWidth={2.5} />} 
                count="10,672+" 
                label="Book Collections" 
                />
                <StatItem 
                icon={<SwatchBook size={32} strokeWidth={2.5} />} 
                count="1,562" 
                label="Our Stores" 
                />
                <StatItem 
                icon={<PenTool size={32} strokeWidth={2.5} />} 
                count="457" 
                label="Famous Writers" 
                />
            </div>
        </div>

        <div>
            <Subscribe />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;






