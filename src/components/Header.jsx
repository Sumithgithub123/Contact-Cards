import { BsWindowFullscreen } from "react-icons/bs";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-rose-100 flex items-center p-3 justify-center sm:justify-between">
      <h3
        onClick={() => navigate("/")}
        className="font-bold hover:cursor-pointer uppercase"
      >
        coding skill test - react data fetch
      </h3>
      <div className="hidden sm:flex gap-6 text-2xl">
        <FaRegWindowMinimize />
        <BsWindowFullscreen />
        <IoMdClose />
      </div>
    </header>
  );
}

export default Header;
