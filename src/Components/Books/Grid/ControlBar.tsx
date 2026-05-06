import { LayoutGrid, List, ChevronDown } from 'lucide-react';

interface ControlBarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  activeTimeFilter: string;
  setTimeFilter: (filter: string) => void;
}

const ControlBar = ({ viewMode, setViewMode, activeTimeFilter, setTimeFilter }: ControlBarProps) => {
  const timeFilters = ['Today', 'This Week', 'This Month'];

  return (
    <div className="sticky top-[70px] z-20 bg-white/95 backdrop-blur-md py-4 mb-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4 transition-all duration-300">
      
      {/* Time Filters */}
      <div className="flex gap-6 text-sm font-bold text-gray-400">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setTimeFilter(filter)}
            className={`transition-all pb-1 ${
              activeTimeFilter === filter 
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

        {/* Sort Dropdown */}
        <button className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
          Newest <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default ControlBar;