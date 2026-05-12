import { useState } from 'react';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';
import { useViewStore } from '../../../Store/useViewStore'; 

interface ControlBarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const SORT_OPTIONS = [
  { label: 'Newest', value: 'Newest Books' },
  { label: 'Best Seller', value: 'Best Seller' },
  { label: 'Most Commented', value: 'Most Commented' }
];

const ControlBar = ({ viewMode, setViewMode }: ControlBarProps) => {
  const { timeFilter, setTimeFilter, filters, updateFilter } = useViewStore();
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const timeFilters = ['All Times', 'Today', 'This Week', 'This Month'];

  const currentSortLabel = SORT_OPTIONS.find(opt => opt.value === filters.editorPicks)?.label || 'Newest';

  return (
    <div className="sticky top-[70px] z-20 bg-white/95 backdrop-blur-md py-4 mb-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4 transition-all duration-300">
      
      {/* Time Filters */}
      <div className="flex gap-6 text-sm font-bold text-gray-400">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setTimeFilter(filter)}
            className={`transition-all pb-1 cursor-pointer ${
              timeFilter === filter 
                ? 'text-gray-900 border-b-2 border-green-500' 
                : 'hover:text-gray-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* View Mode Toggler */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === 'grid' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'
            }`}
          >
            <LayoutGrid size={18}/>
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              viewMode === 'list' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'
            }`}
          >
            <List size={18}/>
          </button>
        </div>

        {/* Sort Dropdown (Editor Picks Logic) */}
        <div className="relative">
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer min-w-[140px] justify-between"
          >
            <span className="text-gray-600">{currentSortLabel}</span>
            <ChevronDown size={16} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSortOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)}></div>
              
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      updateFilter('editorPicks', option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center justify-between ${
                      filters.editorPicks === option.value ? 'text-green-600 bg-green-50/50' : 'text-gray-600'
                    }`}
                  >
                    {option.label}
                    {filters.editorPicks === option.value && <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlBar;