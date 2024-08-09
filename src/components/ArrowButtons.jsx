import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ArrowButtons() {
  const navigate = useNavigate();
  return (
    <div className="hidden lg:flex gap-5 text-3xl">
      <button onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <button onClick={() => navigate(+1)}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default ArrowButtons;
