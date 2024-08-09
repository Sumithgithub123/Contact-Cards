import PropTypes from "prop-types";

PostCard.propTypes = {
  post: PropTypes.object,
};

function PostCard({ post }) {
  return (
    <div className="md:h-44 h-40 w-full md:text-base lg:w-[260px] xl:w-[340px] p-2 rounded bg-stone-300">
      <h1 className="font-semibold text-center">{post.title}</h1>
      <p className="mt-2 text-xs xl:text-sm">{post.body}</p>
    </div>
  );
}

export default PostCard;
