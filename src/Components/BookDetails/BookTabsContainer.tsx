import React from 'react';

interface BookTabsContainerProps {
  activeTab: 'details' | 'reviews';
  setActiveTab: (tab: 'details' | 'reviews') => void;
  children: React.ReactNode;
}

const BookTabsContainer: React.FC<BookTabsContainerProps> = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
      <div className="flex gap-8 border-b border-gray-100 pb-4 mb-6">
        <button
          onClick={() => setActiveTab('details')}
          className={`font-black text-lg pb-4 relative transition-all cursor-pointer ${
            activeTab === 'details' ? 'text-gray-900 text-xl after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Details Product
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`font-black text-lg pb-4 relative transition-all cursor-pointer ${
            activeTab === 'reviews' ? 'text-gray-900 text-xl after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Customer Reviews
        </button>
      </div>

      {children}
    </div>
  );
};

export default BookTabsContainer;