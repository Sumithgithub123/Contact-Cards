import { useEffect, useState } from "react";

export function useGetPosts(id) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(0);

  useEffect(() => {
    async function fetchusers() {
      setloading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        const data = await res.json();
        setposts(data);
      } catch (e) {
        seterror(e.message);
      } finally {
        setloading(false);
      }
    }
    fetchusers();
  }, [id]);

  return { loading, error, posts, page, setpage };
}
