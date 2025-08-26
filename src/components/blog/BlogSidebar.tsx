import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useBlogSidebar } from '../../hooks/useBlogData';
import { cn } from '../../lib/utils';
import { div } from 'framer-motion/client';

export const BlogSidebar = (): JSX.Element => {
  const { categories, tags, loading } = useBlogSidebar();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/hub-news/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  if (loading) {
    return (
      <div>
        <motion.aside
          className="w-full md:w-[20vw] bg-[#f5f5f5] p-[1.5vw] rounded-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-[#f5f5f5] rounded"></div> 
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </motion.aside>

        <motion.div>
          <img src="/blog_sidebarBanner.png" alt="" />
        </motion.div>
      </div>


    );
  }

  return (
    <div>
      <motion.aside
        className="w-full md:w-[20vw] bg-[#f5f5f5] p-[1.5vw] rounded-lg space-y-[2vw]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Search Box */}
        <motion.div
          className="relative mb-[4.20vw] md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Digite sua busca"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-[1vw] py-[0.5vw] border border-gray-300 h-[12.8vw] md:h-auto rounded-l-lg text-[4.20vw] md:text-[0.9vw] focus:outline-none outline-none focus:ring-0 focus:ring-offset-0"
            />
            <motion.button
              type="submit"
              className="bg-[#003cff] text-white px-[1vw] py-[0.5vw] rounded-r-lg hover:bg-[#0052ff] transition-colors w-[12.8vw] md:w-auto md:block flex items-center justify-center"
              
            >
              <Search className="w-[6.933vw] h-[6.933vw] md:w-[1.2vw] md:h-[1.2vw]" />
            </motion.button>
          </form>
        </motion.div>

        {/* Fixed Sections */}
        <motion.div
          className="space-y-[1vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/hub-news"
              className="block text-[#00009B] font-semibold text-[3.733vw] md:text-[1vw] hover:text-[#0052ff] transition-colors border-b border-[#00009B] pb-[0.5vw]"
            >
              ARTIGOS
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/hub-news"
              className="block text-[#00009B] font-semibold text-[3.733vw] md:text-[1vw] hover:text-[#0052ff] transition-colors border-b border-[#00009B] pb-[0.5vw]"
            >
              NEWS LETTER
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/hub-news"
              className="block text-[#00009B] font-semibold text-[3.733vw] md:text-[1vw] hover:text-[#0052ff] transition-colors border-b border-[#00009B] pb-[0.5vw]"
            >
              TODAS AS NOTÍCIAS
            </Link>
          </motion.div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h3
            className={cn("text-[#003cff] font-bold text-[3.733vw] md:text-[1.1vw] mt-[8vw] md:mt-0  mb-[1vw] border-b border-gray-300 pb-[0.5vw]")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            CATEGORIAS
          </motion.h3>
          <ul className="space-y-[0.3vw]">
            {categories.map((category, index) => (
              <motion.li
                key={category.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  to={`/hub-news/categoria/${category.slug}`}
                  className="text-[#000000] text-[3.42vw] md:text-[0.9vw] hover:text-[#003cff] transition-colors flex items-center"
                >
                  <span className="w-[0.3vw] h-[0.3vw] bg-[#000000] rounded-full mr-[0.5vw]"></span>
                  {category.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.h3
            className={cn("text-[#003cff] font-bold text-[3.733vw] md:text-[1.1vw] mb-[1vw] border-b border-gray-300 pb-[0.5vw]")}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            TAGS
          </motion.h3>
          <div className="flex flex-wrap gap-[0.5vw]">
            {tags.map((tag, index) => (
              <motion.div
                key={tag.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/hub-news/tag/${tag.slug}`}
                  className="inline-block bg-transparent border border-[#003cff] text-[#003cff] px-[0.8vw] py-[0.3vw] rounded-[4px] text-[3.2vw] md:text-[0.8vw] hover:bg-[#003cff] hover:text-white transition-colors"
                >
                  {tag.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </motion.aside>

      {/* CTA Banner - Placeholder */}
        <motion.div
          className="bg-gradient-to-br from-[#003cff] to-[#0052ff] rounded-[16px] p-0 text-white mt-[6vw] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <img className='w-full h-auto' src="/blog_sidebarBanner.png" alt="" />
        </motion.div>
    </div>





  );
};