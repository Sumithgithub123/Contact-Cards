import { CiStar } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";

function SideIcons() {
  return (
    <div className="hidden lg:flex items-center justify-between gap-4 text-3xl">
      <IoReload />
      <HiOutlineBars3 />
      <CiStar />
    </div>
  );
}

export default SideIcons;
