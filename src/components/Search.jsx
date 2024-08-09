import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

Search.propTypes = {
  setsearch: PropTypes.func,
  search: PropTypes.string,
};

function Search({ search, setsearch }) {
  const navigate = useNavigate();
  return (
    <div className="w-full relative">
      <IoIosSearch
        className={`fixed ${search && "hidden"} ml-32 text-2xl mt-1`}
      />
      <input
        className="bg-slate-200 h-8 w-full outline-none rounded-full p-2 ring-2 ring-black"
        type="text"
        placeholder="Search Users..."
        onChange={(e) => {
          setsearch(e.target.value);
          navigate("/");
        }}
      />
    </div>
  );
}

export default Search;
