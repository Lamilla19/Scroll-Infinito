import "./styles.css";
import { useInfiniteScroll } from "./Hooks/useInfiniteScroll.ts";

export default function App() {

  const {posts , lastPostsElementRef , loading} = useInfiniteScroll();
  return (
    <div>
      <h1>Mi feed con scroll Infinito</h1>
      <ul>
        {posts.map((post,index)=>{
          return (
            <li key={post.id} ref={posts.length === index + 1 ? lastPostsElementRef : null}>
              <h2>{posts.title}</h2>
              <p>{posts.body}</p>
            </li>
          );
        })}
      </ul>
      {loading && <p>loading...</p>}
    </div>
  );
}

