import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { HeaderSection } from '../BngHubLayoutSite/sections/HeaderSection';
import { ContactUsSection } from '../BngHubLayoutSite/sections/ContactUsSection';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { useBlogPost } from '../../hooks/useBlogData';
import { formatDate } from '../../data/mockBlogData';

export const BlogPostPage = (): JSX.Element => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const { post, relatedPosts, loading } = useBlogPost(postSlug || '');

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
            <div className="h-[20vw] bg-gray-200 rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!post) {
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
            Post não encontrado
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            O post solicitado não existe.
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
        <motion.div 
          className="flex gap-[3vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Post Content */}
          <main className="flex-1 max-w-[60vw]">
            {/* Featured Image */}
            <motion.div 
              className="relative w-full h-[25vw] overflow-hidden rounded-lg mb-[2vw]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={post.featured_image_url}
                alt={post.title.rendered}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Post Meta */}
            <motion.div 
              className="flex items-center gap-[1vw] mb-[1.5vw]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.span 
                className="text-gray-500 text-[0.9vw]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                {formatDate(post.date)}
              </motion.span>
              {post.tag_names && post.tag_names.length > 0 && (
                <motion.div 
                  className="flex gap-[0.5vw]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  {post.tag_names.slice(0, 2).map((tagName, index) => (
                    <motion.span
                      key={index}
                      className="inline-block bg-[#f0f8ff] text-[#003cff] px-[0.8vw] py-[0.3vw] rounded-full text-[0.7vw] font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tagName}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Post Title */}
            <motion.h1 
              className="text-[2.2vw] font-bold text-gray-900 mb-[2vw] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {post.title.rendered}
            </motion.h1>

            {/* Post Content */}
            <motion.div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              style={{
                fontSize: '1.1vw',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div 
                className="mt-[4vw] pt-[2vw] border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.h3 
                  className="text-[1.5vw] font-bold text-gray-900 mb-[2vw]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Conteúdo relacionado
                </motion.h3>
                
                <motion.div 
                  className="grid grid-cols-1 gap-[2vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.article 
                      key={relatedPost.id} 
                      className="flex gap-[1.5vw] bg-gray-50 rounded-lg p-[1.5vw] hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                    >
                      <div className="w-[12vw] h-[8vw] flex-shrink-0">
                        <img
                          src={relatedPost.featured_image_url}
                          alt={relatedPost.title.rendered}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-gray-500 text-[0.8vw] mb-[0.5vw]">
                          {formatDate(relatedPost.date)}
                        </div>
                        
                        <h4 className="text-[1.2vw] font-semibold text-gray-900 mb-[0.8vw] leading-tight hover:text-[#003cff] transition-colors">
                          <Link to={`/hub-news/post/${relatedPost.slug}`}>
                            {relatedPost.title.rendered}
                          </Link>
                        </h4>
                        
                        <p className="text-gray-600 text-[0.9vw] leading-relaxed line-clamp-2">
                          {relatedPost.excerpt.rendered.replace(/<[^>]*>/g, '')}
                        </p>
                        
                        <Link
                          to={`/hub-news/post/${relatedPost.slug}`}
                          className="text-[#003cff] text-[0.8vw] font-medium hover:text-[#0052ff] transition-colors inline-block mt-[0.5vw]"
                        >
                          Leia mais...
                        </Link>
                        
                        {relatedPost.tag_names && relatedPost.tag_names.length > 0 && (
                          <div className="flex gap-[0.3vw] mt-[0.8vw]">
                            {relatedPost.tag_names.slice(0, 2).map((tagName, index) => (
                              <span
                                key={index}
                                className="inline-block bg-white text-[#003cff] px-[0.6vw] py-[0.2vw] rounded-full text-[0.6vw] font-medium border border-[#003cff]"
                              >
                                {tagName}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </main>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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