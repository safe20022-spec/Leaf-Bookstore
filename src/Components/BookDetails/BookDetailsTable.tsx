import React from 'react';

interface BookDetailsTableProps {
  book: { title: string; author: string; isbn?: string; editionLanguage?: string; bookFormat?: string; year?: string | number; publisher?: string; categories?: string[]; };
}

const BookDetailsTable: React.FC<BookDetailsTableProps> = ({ book }) => {
  const tableData = [
    { label: 'Book Title', value: book.title },
    { label: 'Author', value: book.author },
    { label: 'ISBN', value: book.isbn || '978-3-16-148410-0' },
    { label: 'Edition Language', value: book.editionLanguage || 'English' },
    { label: 'Book Format', value: book.bookFormat || 'Paperback, 432 Pages' },
    { label: 'Date Published', value: book.year || '2026' },
    { label: 'Publisher', value: book.publisher || 'Lumina Press' },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      <div className="border border-gray-100 rounded-2xl overflow-hidden mb-8">
        <table className="w-full text-left border-collapse">
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={`border-b border-gray-100 last:border-none hover:bg-gray-50/50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                <td className="w-1/3 py-4 px-6 font-bold text-gray-400 text-md">{row.label}</td>
                <td className="w-2/3 py-4 px-6 font-bold text-gray-900 text-md">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {book.categories && (
        <div className="flex flex-wrap gap-2">
          {book.categories.map((cat, idx) => (
            <span key={idx} className="bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-700 font-bold text-xs px-4 py-2 rounded-xl border border-gray-200/60 transition-all">{cat}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookDetailsTable;