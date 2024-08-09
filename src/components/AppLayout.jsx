import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./Header";
import Filters from "./Filter";
import Heading from "./Heading";

AppLayout.propTypes = {
  setsearch: PropTypes.func,
  search: PropTypes.string,
};

function AppLayout({ search, setsearch }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="bg-gradient-to-r from-purple-400 to-pink-400">
        <Filters search={search} setsearch={setsearch} />
        <div className="h-[600px] overflow-scroll lg:overflow-hidden bg-white ring-black mx-5 px-5 sm:px-20 py-4 ring-2">
          <div className="sm:max-w-[1350px]">
            <div className="sm:max-w-[1100px] mx-auto ">
              <Heading />
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
