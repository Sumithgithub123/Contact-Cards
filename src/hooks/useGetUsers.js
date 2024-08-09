import { useEffect, useState } from "react";

export default function useGetUsers(search) {
  const [users, setusers] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(0);

  const filtered = search
    ? users.filter((user) => {
        return JSON.stringify(user).includes(search);
      })
    : users;

  const div = filtered?.slice(page, page + 8);

  const prevdisable = filtered?.[0]?.id === div?.[0]?.id;
  const nextdisable =
    filtered?.[filtered.length - 1]?.id === div?.[div.length - 1]?.id;

  useEffect(() => {
    async function fetchusers() {
      setloading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setusers(data);
      } catch (e) {
        seterror(e.message);
      } finally {
        setloading(false);
      }
    }
    fetchusers();
  }, []);
  return { div, error, loading, page, setpage, prevdisable, nextdisable };
}
