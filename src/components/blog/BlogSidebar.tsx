import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useBlogSidebar } from '../../hooks/useBlogData';
import { cn } from '../../lib/utils';

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
      <motion.aside 
        className="w-[20vw] bg-gray-50 p-[1.5vw] rounded-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </motion.aside>
    );
  }

  return (
    <motion.aside 
      className="w-[20vw] bg-gray-50 p-[1.5vw] rounded-lg space-y-[2vw]"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search Box */}
      <motion.div 
        className="relative"
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
            className="flex-1 px-[1vw] py-[0.5vw] border border-gray-300 rounded-l-lg text-[0.9vw] focus:outline-none focus:ring-2 focus:ring-[#003cff] focus:border-transparent"
          />
          <motion.button
            type="submit"
            className="bg-[#003cff] text-white px-[1vw] py-[0.5vw] rounded-r-lg hover:bg-[#0052ff] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-[1.2vw] h-[1.2vw]" />
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
            className="block text-[#003cff] font-semibold text-[1vw] hover:text-[#0052ff] transition-colors border-b border-gray-300 pb-[0.5vw]"
          >
            ARTIGOS
          </Link>
        </motion.div>
        
        <motion.div 
          className={cn("text-[#003cff] font-semibold text-[1vw] border-b border-gray-300 pb-[0.5vw]")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          NEWS LETTER
        </motion.div>
        
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link 
            to="/hub-news" 
            className="block text-[#003cff] font-semibold text-[1vw] hover:text-[#0052ff] transition-colors border-b border-gray-300 pb-[0.5vw]"
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
          className={cn("text-[#003cff] font-bold text-[1.1vw] mb-[1vw] border-b border-gray-300 pb-[0.5vw]")}
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
                className="text-gray-700 text-[0.9vw] hover:text-[#003cff] transition-colors flex items-center"
              >
                <span className="w-[0.3vw] h-[0.3vw] bg-[#003cff] rounded-full mr-[0.5vw]"></span>
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
          className={cn("text-[#003cff] font-bold text-[1.1vw] mb-[1vw] border-b border-gray-300 pb-[0.5vw]")}
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
                className="inline-block bg-white border border-[#003cff] text-[#003cff] px-[0.8vw] py-[0.3vw] rounded-full text-[0.8vw] hover:bg-[#003cff] hover:text-white transition-colors"
              >
                {tag.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Banner - Placeholder */}
      <motion.div 
        className="bg-gradient-to-br from-[#003cff] to-[#0052ff] rounded-lg p-[1.5vw] text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.02, y: -2 }}
      >
        <motion.div 
          className="w-[3vw] h-[3vw] bg-white rounded-full mx-auto mb-[1vw] flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="w-[2vw] h-[2vw] bg-[#003cff] rounded-full"></div>
        </motion.div>
        <motion.h4 
          className="font-bold text-[1.1vw] mb-[0.5vw]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          Lorem Ipsum dolor sit, sed do.
        </motion.h4>
        <motion.p 
          className="text-[0.8vw] opacity-90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          Lorem Ipsum dolor sit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
      </motion.div>
    </motion.aside>
  );
};