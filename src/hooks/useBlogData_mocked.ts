import { useState, useEffect } from 'react';
import { 
  mockPosts, 
  mockCategories, 
  mockTags,
  getPostsByCategory,
  getPostBySlug,
  getRelatedPosts,
  searchPosts,
  getCategoryBySlug,
  type WordPressPost,
  type WordPressCategory,
  type WordPressTag
} from '../data/mockBlogData';

// Hook para listar todos os posts (página principal do blog)
export const useBlogPosts = (page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    setLoading(true);
    
    // Simula delay da API
    setTimeout(() => {
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedPosts = mockPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
      setTotalPosts(mockPosts.length);
      setTotalPages(Math.ceil(mockPosts.length / perPage));
      setLoading(false);
    }, 500);
  }, [page, perPage]);

  return { posts, loading, totalPages, totalPosts, currentPage: page };
};

// Hook para posts por categoria
export const useCategoryPosts = (categorySlug: string, page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [category, setCategory] = useState<WordPressCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      const foundCategory = getCategoryBySlug(categorySlug);
      if (foundCategory) {
        const result = getPostsByCategory(foundCategory.id, page, perPage);
        setPosts(result.posts);
        setCategory(foundCategory);
        setTotalPages(result.totalPages);
        setTotalPosts(result.totalPosts);
      }
      setLoading(false);
    }, 500);
  }, [categorySlug, page, perPage]);

  return { posts, category, loading, totalPages, totalPosts, currentPage: page };
};

// Hook para post individual
export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        const related = getRelatedPosts(foundPost.id, foundPost.categories, 3);
        setRelatedPosts(related);
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  return { post, relatedPosts, loading };
};

// Hook para busca
export const useSearchPosts = (query: string, page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    if (!query.trim()) {
      setPosts([]);
      setTotalPages(0);
      setTotalPosts(0);
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const result = searchPosts(query, page, perPage);
      setPosts(result.posts);
      setTotalPages(result.totalPages);
      setTotalPosts(result.totalPosts);
      setLoading(false);
    }, 500);
  }, [query, page, perPage]);

  return { posts, loading, totalPages, totalPosts, currentPage: page };
};

// Hook para sidebar (categorias e tags)
export const useBlogSidebar = () => {
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [tags, setTags] = useState<WordPressTag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setCategories(mockCategories);
      setTags(mockTags);
      setLoading(false);
    }, 300);
  }, []);

  return { categories, tags, loading };
};