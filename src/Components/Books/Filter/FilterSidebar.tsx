import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Building2 } from 'lucide-react';
import { useViewStore } from '../../../Store/useViewStore';

const CATEGORIES = [
  "Action", "Fantasy", "Advanture", "History", "Animation", 
  "Horror", "Biography", "Mystery", "Comedy", "Romance", 
  "Crime", "Sci-Fi", "Documentary", "Sport"
];

const RECENT_YEARS = ["2026", "2025", "2024", "2023", "2022", "2021"];

const PUBLISHERS = ["O'Reilly", "Penguin", "HarperCollins", "Jarir", "Oxford", "Pearson"];

const FilterSidebar = () => {
  const { filters, updateFilter, resetFilters } = useViewStore();
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isPublisherOpen, setIsPublisherOpen] = useState(false);
  const [customYear, setCustomYear] = useState('');

  const handleCategoryToggle = (category: string) => {
    const currentCats = filters.categories;
    const nextCats = currentCats.includes(category)
      ? currentCats.filter((c) => c !== category)
      : [...currentCats, category];
    
    updateFilter('categories', nextCats);
  };

  const handleCustomYearSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customYear.length === 4) {
      updateFilter('year', customYear);
      setIsYearOpen(false);
      setCustomYear('');
    }
  };

  return (
    <aside className="w-64 p-4 rounded-lg  hidden lg:block bg-white sticky top-[143px] overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Filter Option</h2>

      {/* 1. Choose Publisher */}
      <div className="mb-6 border-b border-gray-50 pb-4 relative">
        <button 
          onClick={() => {
            setIsPublisherOpen(!isPublisherOpen);
            setIsYearOpen(false);
          }}
          className="flex items-center justify-between w-full text-lg font-bold text-gray-700 mb-2 cursor-pointer"
        >
          <span>Publisher: <span className="text-green-600 ml-1 text-md font-medium">{filters.publisher || "All"}</span></span>
          <ChevronDown size={20} className={`text-gray-400 transition-transform ${isPublisherOpen ? 'rotate-180' : ''}`} />
        </button>

        {isPublisherOpen && (
          <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-xl z-30 overflow-hidden">
            <div className="max-h-48 overflow-y-auto scrollbar-hide">
              <button
                onClick={() => { updateFilter('publisher', ''); setIsPublisherOpen(false); }}
                className="w-full text-left px-4 py-2 text-md hover:bg-gray-50 text-gray-400 font-medium border-b border-gray-50"
              >
                All Publishers
              </button>
              {PUBLISHERS.map((pub) => (
                <button
                  key={pub}
                  onClick={() => {
                    updateFilter('publisher', pub);
                    setIsPublisherOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-md hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                    filters.publisher === pub ? 'text-green-600 bg-green-50/50 font-bold' : 'text-gray-600'
                  }`}
                >
                  <Building2 size={14} className={filters.publisher === pub ? 'text-green-500' : 'text-gray-300'} />
                  {pub}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. Select Year */}
      <div className="mb-6 border-b border-gray-50 pb-4 relative">
        <button 
          onClick={() => {
            setIsYearOpen(!isYearOpen);
            setIsPublisherOpen(false);
          }}
          className="flex items-center justify-between w-full text-lg font-bold text-gray-700 mb-2 cursor-pointer"
        >
          <span className='text-md'>Year: <span className="text-green-600 ml-1 text-md font-medium">{filters.year || "All"}</span></span>
          <ChevronDown size={20} className={`text-gray-400 transition-transform ${isYearOpen ? 'rotate-180' : ''}`} />
        </button>

        {isYearOpen && (
          <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-100 rounded-lg shadow-xl z-30 overflow-hidden">
            <div className="max-h-48 overflow-y-auto scrollbar-hide">
              <button
                onClick={() => { updateFilter('year', ''); setIsYearOpen(false); }}
                className="w-full text-left px-4 py-2 text-md hover:bg-gray-50 text-gray-400 font-medium border-b border-gray-50"
              >
                Clear Selection
              </button>
              {RECENT_YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => {
                    updateFilter('year', y);
                    setIsYearOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-md hover:bg-gray-50 transition-colors ${
                    filters.year === y ? 'text-green-600 bg-green-50/50 font-bold' : 'text-gray-600'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
            
            <form onSubmit={handleCustomYearSubmit} className="p-2 bg-gray-50 border-t border-gray-100">
              <div className="relative">
                <input 
                  type="number"
                  placeholder="Other (e.g. 1980)"
                  value={customYear}
                  onChange={(e) => setCustomYear(e.target.value)}
                  className="w-full pl-8 pr-2 py-2 text-md border border-gray-200 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none"
                  max="2026"
                  min="1900"
                />
                <Calendar size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
              </div>
              <button 
                type="submit"
                className="w-full mt-2 bg-white text-gray-600 text-md cursor-pointer font-bold py-1.5 border border-gray-200 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
              >
                Apply Year
              </button>
            </form>
          </div>
        )}
      </div>

      {/* 3. Shop by Category */}
      <div className="mb-8">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCategoryToggle(cat)}
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 transition-all"
                />
                <svg className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 top-0.5 left-0.5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className={`text-sm font-bold transition-colors ${
                filters.categories.includes(cat) ? 'text-green-600 font-semibold' : 'text-gray-500 group-hover:text-gray-700'
              }`}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Price Range */}
      <div className="mb-8">
        <button className="flex items-center justify-between w-full text-lg font-bold text-gray-800 mb-6 cursor-default">
          Price Range <ChevronUp size={16} className="text-gray-400" />
        </button>
        
        <div className="px-2">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [0, parseInt(e.target.value)])}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex justify-between mt-4">
            <div className="bg-gray-50 px-3 py-1 rounded text-[14px] font-bold text-gray-400 border border-gray-100">
              $0
            </div>
            <div className="bg-gray-50 px-3 py-1 rounded text-[14px] font-bold text-green-600 border border-gray-100">
              ${filters.priceRange[1]}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button 
          className="w-full bg-[#3BB77E] text-white py-3 rounded-lg text-md font-bold hover:bg-[#2eaa70] transition-colors shadow-sm active:scale-[0.98]"
        >
          Refine Search
        </button>
        <button 
          onClick={() => {
            resetFilters();
            setCustomYear('');
          }}
          className="w-full text-gray-400 text-md font-bold hover:text-red-500 transition-colors uppercase tracking-wider"
        >
          Reset Filter
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;