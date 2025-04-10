import React, { Fragment } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const showAround = 2;
    pageNumbers.push(1);
    let startMiddle = Math.max(2, currentPage - showAround);
    let endMiddle = Math.min(totalPages - 1, currentPage + showAround);
    if (currentPage - showAround <= 2) {
      endMiddle = Math.min(totalPages - 1, 5);
    }
    if (currentPage + showAround >= totalPages - 1) {
      startMiddle = Math.max(2, totalPages - 4);
    }
    if (startMiddle > 2) {
      pageNumbers.push('...');
    }
    for (let i = startMiddle; i <= endMiddle; i++) {
      pageNumbers.push(i);
    }
    if (endMiddle < totalPages - 1) {
      pageNumbers.push('...');
    }
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };
  return <div className="flex flex-wrap justify-center items-center gap-2 mt-8 mb-4 px-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors" aria-label="Previous page">
        <ChevronLeftIcon size={24} />
      </button>

      <div className="flex flex-wrap justify-center items-center gap-1">
        {getPageNumbers().map((pageNum, index) => <Fragment key={index}>
            {pageNum === '...' ? <span className="px-2 py-1 text-gray-500">...</span> : <button onClick={() => onPageChange(Number(pageNum))} className={`min-w-[40px] px-3 py-2 rounded-full transition-colors ${currentPage === pageNum ? 'bg-red-600 text-white' : 'hover:bg-gray-700'}`} aria-label={`Page ${pageNum}`} aria-current={currentPage === pageNum ? 'page' : undefined}>
                {pageNum}
              </button>}
          </Fragment>)}
      </div>

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors" aria-label="Next page">
        <ChevronRightIcon size={24} />
      </button>
    </div>;
}