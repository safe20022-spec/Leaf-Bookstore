import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ViewStoreState {
  viewMode: 'grid' | 'list';
  timeFilter: string;
  filters: {
    editorPicks: string;
    publisher: string;
    year: string;
    categories: string[];
    priceRange: [number, number];
    rating: number | null;
  };

  setViewMode: (mode: 'grid' | 'list') => void;
  setTimeFilter: (filter: string) => void;
  updateFilter: (key: string, value: any) => void;
  resetFilters: () => void;
}

export const useViewStore = create<ViewStoreState>()(
  persist(
    (set) => ({
      viewMode: 'grid',
      timeFilter: 'This Month',
      filters: {
        editorPicks: '',
        publisher: '',
        year: '',
        categories: [],
        priceRange: [0, 1000],
        rating: null,
      },

      setViewMode: (mode) => set({ viewMode: mode }),
      
      setTimeFilter: (filter) => set({ timeFilter: filter }),

      updateFilter: (key, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        })),

      resetFilters: () =>
        set({
          timeFilter: 'This Month',
          filters: {
            editorPicks: '',
            publisher: '',
            year: '',
            categories: [],
            priceRange: [0, 1000],
            rating: null,
          },
        }),
    }),
    {
      name: 'bookstore-view-settings', 
    }
  )
);