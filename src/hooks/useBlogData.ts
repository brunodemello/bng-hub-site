import { useState, useEffect } from 'react';

// Interfaces mantidas do arquivo original
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  featured_image_url?: string;
  category_names?: string[];
  tag_names?: string[];
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WordPressTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

// URL base da API do WordPress
const API_BASE_URL = import.meta.env.VITE_WORDPRESS_API_BASE_URL;

// Cache para categorias e tags para evitar múltiplas requisições
let categoriesCache: WordPressCategory[] = [];
let tagsCache: WordPressTag[] = [];

// Função para buscar e cachear categorias
const fetchCategories = async (): Promise<WordPressCategory[]> => {
  if (categoriesCache.length > 0) {
    return categoriesCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/categories?per_page=100`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const categories = await response.json();
    categoriesCache = categories;
    return categories;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
};

// Função para buscar e cachear tags
const fetchTags = async (): Promise<WordPressTag[]> => {
  if (tagsCache.length > 0) {
    return tagsCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/tags?per_page=100`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const tags = await response.json();
    tagsCache = tags;
    return tags;
  } catch (error) {
    console.error('Erro ao buscar tags:', error);
    return [];
  }
};

// Função para mapear post da API para nosso formato
const mapWordPressPost = async (wpPost: any): Promise<WordPressPost> => {
  const categories = await fetchCategories();
  const tags = await fetchTags();

  const categoryNames = wpPost.categories
    .map((catId: number) => categories.find(cat => cat.id === catId)?.name)
    .filter(Boolean);

  const tagNames = wpPost.tags
    .map((tagId: number) => tags.find(tag => tag.id === tagId)?.name)
    .filter(Boolean);

  return {
    id: wpPost.id,
    date: wpPost.date,
    date_gmt: wpPost.date_gmt,
    guid: wpPost.guid,
    modified: wpPost.modified,
    modified_gmt: wpPost.modified_gmt,
    slug: wpPost.slug,
    status: wpPost.status,
    type: wpPost.type,
    link: wpPost.link,
    title: wpPost.title,
    content: wpPost.content,
    excerpt: wpPost.excerpt,
    author: wpPost.author,
    featured_media: wpPost.featured_media,
    comment_status: wpPost.comment_status,
    ping_status: wpPost.ping_status,
    sticky: wpPost.sticky,
    template: wpPost.template,
    format: wpPost.format,
    meta: wpPost.meta || [],
    categories: wpPost.categories,
    tags: wpPost.tags,
    featured_image_url: wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                       wpPost._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url ||
                       'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    category_names: categoryNames,
    tag_names: tagNames,
  };
};

// Hook para listar todos os posts (página principal do blog)
export const useBlogPosts = (page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${API_BASE_URL}/posts?_embed&page=${page}&per_page=${perPage}&status=publish`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const totalPostsHeader = response.headers.get('X-WP-Total');
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');

        const mappedPosts = await Promise.all(
          data.map((wpPost: any) => mapWordPressPost(wpPost))
        );

        setPosts(mappedPosts);
        setTotalPosts(totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0);
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
        setError('Erro ao carregar posts. Tente novamente mais tarde.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, perPage]);

  return { posts, loading, totalPages, totalPosts, currentPage: page, error };
};

// Hook para posts por categoria
export const useCategoryPosts = (categorySlug: string, page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [category, setCategory] = useState<WordPressCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Primeiro, buscar a categoria pelo slug
        const categoryResponse = await fetch(`${API_BASE_URL}/categories?slug=${categorySlug}`);
        if (!categoryResponse.ok) {
          throw new Error(`HTTP error! status: ${categoryResponse.status}`);
        }
        
        const categoryData = await categoryResponse.json();
        if (categoryData.length === 0) {
          setCategory(null);
          setPosts([]);
          return;
        }

        const foundCategory = categoryData[0];
        setCategory(foundCategory);

        // Buscar posts da categoria
        const postsResponse = await fetch(`${API_BASE_URL}/posts?_embed&categories=${foundCategory.id}&page=${page}&per_page=${perPage}&status=publish`);
        if (!postsResponse.ok) {
          throw new Error(`HTTP error! status: ${postsResponse.status}`);
        }

        const postsData = await postsResponse.json();
        const totalPostsHeader = postsResponse.headers.get('X-WP-Total');
        const totalPagesHeader = postsResponse.headers.get('X-WP-TotalPages');

        const mappedPosts = await Promise.all(
          postsData.map((wpPost: any) => mapWordPressPost(wpPost))
        );

        setPosts(mappedPosts);
        setTotalPosts(totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0);
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0);
      } catch (error) {
        console.error('Erro ao buscar posts da categoria:', error);
        setError('Erro ao carregar posts da categoria. Tente novamente mais tarde.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryPosts();
  }, [categorySlug, page, perPage]);

  return { posts, category, loading, totalPages, totalPosts, currentPage: page, error };
};

// Hook para post individual
export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${API_BASE_URL}/posts?_embed&slug=${slug}&status=publish`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.length === 0) {
          setPost(null);
          return;
        }

        const foundPost = await mapWordPressPost(data[0]);
        setPost(foundPost);

        // Buscar posts relacionados (mesma categoria, excluindo o post atual)
        if (foundPost.categories.length > 0) {
          const relatedResponse = await fetch(
            `${API_BASE_URL}/posts?_embed&categories=${foundPost.categories[0]}&exclude=${foundPost.id}&per_page=3&status=publish`
          );
          
          if (relatedResponse.ok) {
            const relatedData = await relatedResponse.json();
            const mappedRelated = await Promise.all(
              relatedData.map((wpPost: any) => mapWordPressPost(wpPost))
            );
            setRelatedPosts(mappedRelated);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar post:', error);
        setError('Erro ao carregar post. Tente novamente mais tarde.');
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, relatedPosts, loading, error };
};

// Hook para busca
export const useSearchPosts = (query: string, page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setPosts([]);
      setTotalPages(0);
      setTotalPosts(0);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${API_BASE_URL}/posts?_embed&search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&status=publish`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const totalPostsHeader = response.headers.get('X-WP-Total');
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');

        const mappedPosts = await Promise.all(
          data.map((wpPost: any) => mapWordPressPost(wpPost))
        );

        setPosts(mappedPosts);
        setTotalPosts(totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0);
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
        setError('Erro ao realizar busca. Tente novamente mais tarde.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, page, perPage]);

  return { posts, loading, totalPages, totalPosts, currentPage: page, error };
};

// Hook para sidebar (categorias e tags)
export const useBlogSidebar = () => {
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [tags, setTags] = useState<WordPressTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSidebarData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Buscar categorias e tags em paralelo
        const [categoriesResponse, tagsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/categories?per_page=100&hide_empty=true`),
          fetch(`${API_BASE_URL}/tags?per_page=100&hide_empty=true`)
        ]);

        if (!categoriesResponse.ok || !tagsResponse.ok) {
          throw new Error('Erro ao buscar dados da sidebar');
        }

        const [categoriesData, tagsData] = await Promise.all([
          categoriesResponse.json(),
          tagsResponse.json()
        ]);

        setCategories(categoriesData);
        setTags(tagsData);
      } catch (error) {
        console.error('Erro ao buscar dados da sidebar:', error);
        setError('Erro ao carregar categorias e tags.');
        setCategories([]);
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, []);

  return { categories, tags, loading, error };
};

// Hook para posts por tag
export const useTagPosts = (tagSlug: string, page: number = 1, perPage: number = 6) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [tag, setTag] = useState<WordPressTag | null>(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTagPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Primeiro, buscar a tag pelo slug
        const tagResponse = await fetch(`${API_BASE_URL}/tags?slug=${tagSlug}`);
        if (!tagResponse.ok) {
          throw new Error(`HTTP error! status: ${tagResponse.status}`);
        }
        
        const tagData = await tagResponse.json();
        if (tagData.length === 0) {
          setTag(null);
          setPosts([]);
          return;
        }

        const foundTag = tagData[0];
        setTag(foundTag);

        // Buscar posts da tag
        const postsResponse = await fetch(`${API_BASE_URL}/posts?_embed&tags=${foundTag.id}&page=${page}&per_page=${perPage}&status=publish`);
        if (!postsResponse.ok) {
          throw new Error(`HTTP error! status: ${postsResponse.status}`);
        }

        const postsData = await postsResponse.json();
        const totalPostsHeader = postsResponse.headers.get('X-WP-Total');
        const totalPagesHeader = postsResponse.headers.get('X-WP-TotalPages');

        const mappedPosts = await Promise.all(
          postsData.map((wpPost: any) => mapWordPressPost(wpPost))
        );

        setPosts(mappedPosts);
        setTotalPosts(totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0);
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0);
      } catch (error) {
        console.error('Erro ao buscar posts da tag:', error);
        setError('Erro ao carregar posts da tag. Tente novamente mais tarde.');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTagPosts();
  }, [tagSlug, page, perPage]);

  return { posts, tag, loading, totalPages, totalPosts, currentPage: page, error };
};

// Funções auxiliares mantidas para compatibilidade
export const getPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_embed&slug=${slug}&status=publish`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.length === 0) {
      return null;
    }

    return await mapWordPressPost(data[0]);
  } catch (error) {
    console.error('Erro ao buscar post por slug:', error);
    return null;
  }
};

export const getCategoryBySlug = async (slug: string): Promise<WordPressCategory | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Erro ao buscar categoria por slug:', error);
    return null;
  }
};

// Função para formatar data (mantida)
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  
  return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
};