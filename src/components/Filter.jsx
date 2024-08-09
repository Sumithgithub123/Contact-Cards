import PropTypes from "prop-types";

Filter.propTypes = {
  setsearch: PropTypes.func,
  search: PropTypes.string,
};

import ArrowButtons from "./ArrowButtons";
import Search from "./Search";
import SideIcons from "./SideIcons";

function Filter({ search, setsearch }) {
  return (
    <div className="p-3 mx-3 gap-6 flex items-center justify-between">
      <ArrowButtons />
      <Search search={search} setsearch={setsearch} />
      <SideIcons />
    </div>
  );
}

export default Filter;
