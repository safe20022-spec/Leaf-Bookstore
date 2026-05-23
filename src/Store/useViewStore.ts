import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ViewStoreState {
  viewMode: 'grid' | 'list';
  timeFilter: string;
  filters: {
    searchQuery: string;
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

  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: (totalPages: number) => void;
  prevPage: () => void;
  nums: [string, string, string, string],
}

export const useViewStore = create<ViewStoreState>()(
  persist(
    (set) => ({
      viewMode: 'grid',
      timeFilter: 'This Month',
      filters: {
        searchQuery: '',
        editorPicks: '',
        publisher: '',
        year: '',
        categories: [],
        priceRange: [0, 1000],
        rating: null,
      },
      currentPage: 1,
      itemsPerPage: 12,
      nums: ['hi', 'by', 'man', 'men'],

      setViewMode: (mode) => set({ viewMode: mode }),
      setTimeFilter: (filter) => set({ timeFilter: filter }),
      
      updateFilter: (key, value) =>
        set((state) => ({
          currentPage: 1,
          filters: { ...state.filters, [key]: value },
        })),

      resetFilters: () =>
        set({
          currentPage: 1,
          timeFilter: 'This Month',
          filters: { searchQuery: '', editorPicks: '', publisher: '', year: '', categories: [], priceRange: [0, 1000], rating: null },
        }),

      setCurrentPage: (page) => set({ currentPage: page }),
      nextPage: (totalPages) => set((state) => ({
        currentPage: state.currentPage < totalPages ? state.currentPage + 1 : state.currentPage
      })),
      prevPage: () => set((state) => ({
        currentPage: state.currentPage > 1 ? state.currentPage - 1 : state.currentPage
      })),
    }),
    {
      name: 'bookstore-view-settings',
      partialize: (state) => ({
        viewMode: state.viewMode,
        timeFilter: state.timeFilter,
        filters: state.filters,
      }),
    }
  )
);