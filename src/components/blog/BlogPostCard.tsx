import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate, type WordPressPost } from '../../data/mockBlogData';

interface BlogPostCardProps {
  post: WordPressPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps): JSX.Element => {
  return (
    <motion.article 
      className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Featured Image */}
      <motion.div 
        className="relative w-full h-[12vw] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={post.featured_image_url}
          alt={post.title.rendered}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Content */}
      <div className="p-[1.5vw]">
        {/* Date */}
        <motion.div 
          className="text-gray-500 text-[0.8vw] mb-[0.5vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {formatDate(post.date)}
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="text-[1.3vw] font-semibold text-gray-900 mb-[1vw] leading-tight hover:text-[#003cff] transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to={`/hub-news/post/${post.slug}`}>
            {post.title.rendered}
          </Link>
        </motion.h2>

        {/* Excerpt */}
        <motion.p 
          className="text-gray-600 text-[0.9vw] leading-relaxed mb-[1.2vw] line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
        </motion.p>

        {/* Read More Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            to={`/hub-news/post/${post.slug}`}
            className="text-[#003cff] text-[0.9vw] font-medium hover:text-[#0052ff] transition-colors"
          >
            Leia mais...
          </Link>
        </motion.div>

        {/* Tags */}
        {post.tag_names && post.tag_names.length > 0 && (
          <motion.div 
            className="flex flex-wrap gap-[0.5vw] mt-[1vw] pt-[1vw] border-t border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {post.tag_names.slice(0, 2).map((tagName, index) => (
              <motion.span
                key={index}
                className="inline-block bg-[#f0f8ff] text-[#003cff] px-[0.8vw] py-[0.3vw] rounded-full text-[0.7vw] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {tagName}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};