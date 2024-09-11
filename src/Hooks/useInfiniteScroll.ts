import {useCallback,useEffect,useRef,useState} from "react";
import { fetchPosts } from "../servicios.js";

export function useInfiniteScroll() {
    const [posts, setPosts] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);  // Cambiado a useState
    const observer = useRef<IntersectionObserver | null>(null);
  
    const loadMorePosts = useCallback(async () => {
      setLoading(true);
      const newPosts = await fetchPosts(page, 9);
  
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }
  
      setLoading(false);
    }, [page]);
  
    useEffect(() => {
      if (hasMore) {
        loadMorePosts();
      }
    }, [hasMore, loadMorePosts]);
  
    const lastPostsElementRef = useCallback(
        (node) => {
          if (loading || !node || !hasMore) return;
      
          if (observer.current) observer.current.disconnect();
      
          observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
              setPage((prevPage) => prevPage + 1);
            }
          });
      
          observer.current.observe(node);
      
          // No necesitamos retornar nada
        },
        [loading, hasMore]
      );      
  
    return { posts, lastPostsElementRef, loading };
  }
  
