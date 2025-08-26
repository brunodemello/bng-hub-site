import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { HeaderSection } from '../BngHubLayoutSite/sections/HeaderSection';
import { ContactUsSection } from '../BngHubLayoutSite/sections/ContactUsSection';
import { BlogSidebar } from '../../components/blog/BlogSidebar';
import { BlogPostCard } from '../../components/blog/BlogPostCard';
import { BlogPagination } from '../../components/blog/BlogPagination';
import { useTagPosts } from '../../hooks/useBlogData';

export const BlogTagPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { tagSlug } = useParams<{ tagSlug: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, tag, loading, totalPages, totalPosts } = useTagPosts(tagSlug || '', currentPage, 6);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="bg-white w-full min-h-screen">
        <HeaderSection isQuemSomosPage={true} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="container mx-auto max-w-[90%] py-[8vw]">
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
        </div>
      </div>
    );
  }

  if (!tag) {
    return (
      <div className="bg-white w-full min-h-screen">
        <HeaderSection isQuemSomosPage={true} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <div className="container mx-auto max-w-[90%] py-[8vw] text-center">
          <h1 className="text-[2vw] font-bold text-gray-900 mb-[2vw]">
            Tag não encontrada
          </h1>
          <p className="text-gray-600">A tag solicitada não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <HeaderSection isQuemSomosPage={true} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Main Content */}
      <section className="container mx-auto max-w-[90%] py-[8vw]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[0.5vw] mb-[3vw] text-[1vw]">
          <ChevronRight className="w-[1.2vw] h-[1.2vw] text-[#003cff]" />
          <span className="text-[#003cff] font-semibold">#{tag.name}</span>
        </div>

        <div className="flex gap-[3vw]">
          {/* Posts Grid */}
          <main className="flex-1">
            {posts.length === 0 ? (
              <div className="text-center py-[4vw]">
                <h2 className="text-[1.5vw] font-semibold text-gray-900 mb-[1vw]">
                  Nenhum post encontrado
                </h2>
                <p className="text-gray-600">
                  Não há posts com esta tag ainda.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-[2vw]">
                  {posts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </main>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </section>

      {/* Footer */}
      <ContactUsSection />
    </div>
  );
};