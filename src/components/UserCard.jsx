import { GrFormNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

UserCard.propTypes = {
  user: PropTypes.object,
};

function UserCard({ user }) {
  const navigate = useNavigate();
  const { id, name, username, email, phone, website, company } = user;

  const [first, second] = name.split(" ");

  return (
    <div className="flex lg:gap-28 gap-36 md:gap-56">
      <div className="flex gap-3 max-w-36 xl:max-w-48 items-center justify-between">
        <img
          onClick={() => navigate(`/user/${id}/posts`)}
          className="h-[43px] mb-6 hover:cursor-pointer"
          src={`https://placehold.co/600x400/blue/white?text=${first.at(
            0
          )}+${second.at(0)}`}
          alt="card-image"
        />
        <div className="flex flex-col justify-between gap-2">
          <div>
            <p className="font-bold text-xs">
              {name} <span className="font-normal ">(@{username})</span>
            </p>
            <p className="text-blue-500 text-xs">{email}</p>
          </div>
          <p className="text-xs">Company: {company.name}</p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs">Phone: {phone}</p>
        <p className=" text-xs">
          Website:{" "}
          <Link
            className="underline text-blue-500"
            to={`http://www.${website}`}
          >
            {website}
          </Link>
        </p>
        <button
          onClick={() => navigate(`/user/${id}`)}
          className="w-[70px] px-3 py-[2px] flex items-center rounded-full text-xs border-2 border-stone-300 "
        >
          details{" "}
          <p className="text-end">
            <GrFormNext />
          </p>
        </button>
      </div>
    </div>
  );
}

export default UserCard;
