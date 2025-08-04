import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const BlogPagination = ({ currentPage, totalPages, onPageChange }: BlogPaginationProps): JSX.Element => {
  if (totalPages <= 1) return <></>;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <motion.div 
      className="flex items-center justify-center gap-[0.5vw] mt-[3vw]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Previous Button */}
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-[2.5vw] h-[2.5vw] rounded-lg border transition-colors ${
          currentPage === 1
            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
            : 'border-[#003cff] text-[#003cff] hover:bg-[#003cff] hover:text-white'
        }`}
        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
      >
        <ChevronLeft className="w-[1.2vw] h-[1.2vw]" />
      </motion.button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <motion.span 
              className="flex items-center justify-center w-[2.5vw] h-[2.5vw] text-gray-500 text-[1vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              ...
            </motion.span>
          ) : (
            <motion.button
              onClick={() => onPageChange(page as number)}
              className={`flex items-center justify-center w-[2.5vw] h-[2.5vw] rounded-lg border text-[1vw] font-medium transition-colors ${
                currentPage === page
                  ? 'bg-[#003cff] text-white border-[#003cff]'
                  : 'border-gray-300 text-gray-700 hover:border-[#003cff] hover:text-[#003cff]'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {page}
            </motion.button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-[2.5vw] h-[2.5vw] rounded-lg border transition-colors ${
          currentPage === totalPages
            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
            : 'border-[#003cff] text-[#003cff] hover:bg-[#003cff] hover:text-white'
        }`}
        whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
      >
        <ChevronRight className="w-[1.2vw] h-[1.2vw]" />
      </motion.button>
    </motion.div>
  );
};