import "./styles.css";
import { useInfiniteScroll } from "./Hooks/useInfiniteScroll.ts";

export function App() {
  const { posts, lastPostsElementRef, loading } = useInfiniteScroll();

  return (
    <div>
      <h1>Mi feed con scroll infinito</h1>
      <ul>
        {posts.map((post, index) => (
          <li
            key={post.id}
            ref={posts.length === index + 1 ? lastPostsElementRef : null}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;

