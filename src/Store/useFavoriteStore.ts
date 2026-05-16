import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteState {
  favorites: string[];
  toggleFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
  clearFavorites: () => void;
}

const getCurrentUserId = (): string | null => {
  const authData = localStorage.getItem('user');
  if (!authData) return null;
  try {
    const parsed = JSON.parse(authData);
    return parsed.id || null;
  } catch {
    return null;
  }
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (bookId) => {
        const currentFavorites = get().favorites;
        const isExist = currentFavorites.includes(bookId);
        if (isExist) {
          set({ favorites: currentFavorites.filter(id => id !== bookId) });
        } else {
          set({ favorites: [...currentFavorites, bookId] });
        }
      },
      isFavorite: (bookId) => get().favorites.includes(bookId),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'lumina-favs',
      storage: {
        getItem: (name) => {
          const userId = getCurrentUserId();
          const key = userId ? `${name}-${userId}` : name;
          const value = localStorage.getItem(key);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          const userId = getCurrentUserId();
          const key = userId ? `${name}-${userId}` : name;
          localStorage.setItem(key, JSON.stringify(value));
        },
        removeItem: (name) => {
          const userId = getCurrentUserId();
          const key = userId ? `${name}-${userId}` : name;
          localStorage.removeItem(key);
        },
      },
    }
  )
);