export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image?: string;
  categories: string[];
  oldPrice: number;
  newPrice: number;
  averageRating: number;
  totalHearts: number;
  createdAt: string;
}

export interface Review {
  id: string;
  bookId: string;
  userId: string; 
  userName: string; 
  rating: number;  
  comment: string;
  createdAt: string;
}

export interface Favorite {
  userId: string;
  bookId: string;
}

export type EnhancedBook = Book & {
  totalReviews: number;
};