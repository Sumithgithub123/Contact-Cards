import useGetUsers from "../hooks/useGetUsers";
import Buttons from "./Buttons";
import UserCard from "./UserCard";
import Error from "./Error";
import Loading from "./Loading";
import PropTypes from "prop-types";

Main.propTypes = {
  search: PropTypes.any,
};

function Main({ search }) {
  const { div, error, loading, page, setpage, prevdisable, nextdisable } =
    useGetUsers(search);

  if (error) return <Error>Something wrong happened!</Error>;

  if (loading) return <Loading />;

  if (search && div.length < 1) return <Error>No Users Found!</Error>;

  return (
    <div>
      <div className="xl:py-4 min-h-[470px]">
        <h3 className="font-bold mt-2 xl:mt-0 text-lg">User Card Lists</h3>
        <div className="mt-1 p-2 flex gap-1">
          <div className="grid-cols-1 lg:grid-cols-2 grid xl:gap-y-3 sm:gap-y-2 md:gap-y-0 gap-y-3 gap-x-32 ">
            {div?.map((div) => {
              return <UserCard user={div} key={div.id} />;
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

export default Main;
