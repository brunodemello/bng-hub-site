import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { HeaderSection } from '../BngHubLayoutSite/sections/HeaderSection';
import { ContactUsSection } from '../BngHubLayoutSite/sections/ContactUsSection';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { BlogPagination } from '../../components/blog/BlogPagination';
import { useCategoryPosts } from '../../hooks/useBlogData';

export const BlogCategoryPage = (): JSX.Element => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, category, loading, totalPages } = useCategoryPosts(categorySlug || '', currentPage, 6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="bg-white w-full min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <HeaderSection isQuemSomosPage={true} />
        </motion.div>
        <motion.div 
          className="container mx-auto max-w-[90%] py-[8vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-2 gap-[2vw]">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-gray-200 h-[12vw] rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="bg-white w-full min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <HeaderSection isQuemSomosPage={true} />
        </motion.div>
        <motion.div 
          className="container mx-auto max-w-[90%] py-[8vw] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className="text-[2vw] font-bold text-gray-900 mb-[2vw]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Categoria não encontrada
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            A categoria solicitada não existe.
          </motion.p>
        </motion.div>
      </div>
    );
  }

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

      {/* Main Content */}
      <motion.section 
        className="container mx-auto max-w-[90%] py-[8vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center gap-[0.5vw] mb-[3vw] text-[1vw]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ChevronRight className="w-[1.2vw] h-[1.2vw] text-[#003cff]" />
          <motion.span 
            className="text-[#003cff] font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {category.name}
          </motion.span>
        </motion.div>

        <motion.div 
          className="flex gap-[3vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Posts Grid */}
          <main className="flex-1">
            {posts.length === 0 ? (
              <motion.div 
                className="text-center py-[4vw]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.h2 
                  className="text-[1.5vw] font-semibold text-gray-900 mb-[1vw]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Nenhum post encontrado
                </motion.h2>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Não há posts publicados nesta categoria ainda.
                </motion.p>
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className="grid grid-cols-2 gap-[2vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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
                  transition={{ duration: 0.5, delay: 1.0 }}
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