import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeaderSection } from '../BngHubLayoutSite/sections/HeaderSection';
import { ContactUsSection } from '../BngHubLayoutSite/sections/ContactUsSection';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { BlogPagination } from '../../components/blog/BlogPagination';
import { useBlogPosts } from '../../hooks/useBlogData';

export const BlogHomePage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, loading, totalPages } = useBlogPosts(currentPage, 6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderSection isQuemSomosPage={true} />
      </motion.div>

      {/* Hero Banner */}
      <motion.section 
        className="relative w-full h-fit bg-gradient-to-r from-[#003cff] to-[#0052ff] rounded-bl-[60px] rounded-br-[60px] flex items-center justify-center mt-0 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img className='w-full' src="/blogHomeCover.png" alt="" />
        
        
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="container mx-auto max-w-[90%] py-[4vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="flex gap-[3vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Posts Grid */}
          <main className="flex-1">
            {loading ? (
              <motion.div 
                className="grid grid-cols-2 gap-[2vw]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {[...Array(6)].map((_, index) => (
                  <motion.div 
                    key={index} 
                    className="animate-pulse"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="bg-gray-200 h-[12vw] rounded-lg mb-[1vw]"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-6 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className="grid grid-cols-2 gap-[2vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <BlogPostCard post={post} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pagination */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </motion.div>
              </>
            )}
          </main>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <BlogSidebar />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};