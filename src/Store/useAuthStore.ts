import { create } from 'zustand';
import { useFavoriteStore } from './useFavoriteStore';

interface SafeUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: SafeUser | null;
  isAuthenticated: boolean;
  login: (userData: SafeUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('user'),
  
  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    set({ user: userData, isAuthenticated: true });
    useFavoriteStore.persist.rehydrate();
  },
  
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
    useFavoriteStore.getState().clearFavorites();
  },
}));