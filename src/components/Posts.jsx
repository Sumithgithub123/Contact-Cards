import { useParams } from "react-router-dom";
import { useGetPosts } from "../hooks/useGetPosts";

import Buttons from "./Buttons";
import Error from "./Error";
import Loading from "./Loading";
import PropTypes from "prop-types";
import PostCard from "./PostCard";

Posts.propTypes = {
  search: PropTypes.any,
};

function Posts({ search }) {
  const { id } = useParams();
  const { error, loading, posts, page, setpage } = useGetPosts(id);

  const filtered = search
    ? posts.filter((user) => {
        return JSON.stringify(user).includes(search);
      })
    : posts;

  const div = filtered?.slice(page, page + 6);

  const prevdisable = filtered?.[0]?.id === div?.[0]?.id;
  const nextdisable =
    filtered?.[filtered.length - 1]?.id === div?.[div.length - 1]?.id;

  if (error) return <Error>Something wrong happened!</Error>;

  if (loading) return <Loading />;

  if (search && div.length < 1) return <Error>No Users Found!</Error>;

  return (
    <div>
      <div className="xl:py-4 min-h-[470px]">
        <h3 className="font-bold mt-2 xl:mt-0 text-lg">User Post Lists</h3>
        <div className="mt-1 p-2 flex gap-1">
          <div className="grid-cols-1 lg:grid-cols-3 grid md:gap-y-9 gap-y-5 gap-x-7 ">
            {div?.map((div) => {
              return <PostCard post={div} key={div.id} />;
            })}
          </div>
        </div>
      </div>
      <Buttons
        page={page}
        prevdisable={prevdisable}
        nextdisable={nextdisable}
        setpage={setpage}
      />
    </div>
  );
}

export default Posts;
