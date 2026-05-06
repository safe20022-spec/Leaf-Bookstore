import {MOCK_BOOKS} from '../Data/books';
import { MOCK_REVIEWS } from '../Data/reviews';

export const bookService = {
  async getBooks() {
    // Network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return MOCK_BOOKS.map(book => {
      const bookReviews = MOCK_REVIEWS.filter(r => r.bookId === book.id);
      const avgRating = bookReviews.length > 0 
        ? bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length 
        : 0;

      return {
        ...book,
        averageRating: parseFloat(avgRating.toFixed(1)),
        totalReviews: bookReviews.length,
      };
    });
  }
};