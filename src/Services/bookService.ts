import { MOCK_BOOKS } from '../Data/books';
import { MOCK_REVIEWS } from '../Data/reviews';

interface GetBooksParams {
  timeFilter: string;
  filters: {
    categories: string[];
    priceRange: [number, number];
    editorPicks: string;
    publisher: string;
    year: string;
  };
}

export const bookService = {
  async getBooks({ timeFilter, filters }: GetBooksParams) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let filtered = [...MOCK_BOOKS];

    const now = new Date();
    filtered = filtered.filter((book) => {
      const bookDate = new Date(book.createdAt);
      const diffInDays = (now.getTime() - bookDate.getTime()) / (1000 * 3600 * 24);
      if (timeFilter === 'Today') return diffInDays <= 1;
      if (timeFilter === 'This Week') return diffInDays <= 7;
      if (timeFilter === 'This Month') return diffInDays <= 30;
      return true;
    });

    if (filters.categories.length > 0) {
      filtered = filtered.filter((book) =>
        book.categories.some(cat => filters.categories.includes(cat))
      );
    }
    filtered = filtered.filter(
      (book) => 
        book.newPrice >= filters.priceRange[0] && 
        book.newPrice <= filters.priceRange[1]
    );

  if (filters.year) {
    filtered = filtered.filter((book) => {
      const bookYear = new Date(book.createdAt).getFullYear().toString();
      return bookYear === filters.year;
    });
  }

  if (filters.publisher) {
    filtered = filtered.filter((book) => book.publisher === filters.publisher);
  }

    let processedBooks = filtered.map((book) => {
      const bookReviews = MOCK_REVIEWS.filter((r) => r.bookId === book.id);
      const avgRating = bookReviews.length > 0
          ? bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length
          : 0;

      return {
        ...book,
        averageRating: parseFloat(avgRating.toFixed(1)),
        totalReviews: bookReviews.length,
      };
    });

    if (filters.editorPicks === 'Best Seller') {
      processedBooks.sort((a, b) => b.averageRating - a.averageRating);
    } 
    else if (filters.editorPicks === 'Most Commented') {
      processedBooks.sort((a, b) => b.totalReviews - a.totalReviews);
    } 
    else if (filters.editorPicks === 'Newest Books') {
      processedBooks.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return processedBooks;
  },
};