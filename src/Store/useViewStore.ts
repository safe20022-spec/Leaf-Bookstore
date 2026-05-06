import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ViewState {
  viewMode: 'grid' | 'list';
  timeFilter: string;
  setViewMode: (mode: 'grid' | 'list') => void;
  setTimeFilter: (filter: string) => void;
}

export const useViewStore = create<ViewState>()(
  persist(
    (set) => ({
      viewMode: 'grid',
      timeFilter: 'Today',

      setViewMode: (mode) => set({ viewMode: mode }),

      setTimeFilter: (filter) => set({ timeFilter: filter }),
    }),
    {
      name: 'user-preferences-storage', 
    }
  )
);
