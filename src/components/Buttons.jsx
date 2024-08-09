import PropTypes from "prop-types";
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
} from "react-icons/tb";

Buttons.propTypes = {
  setpage: PropTypes.func,
  prevdisable: PropTypes.any,
  nextdisable: PropTypes.any,
};

function Buttons({ setpage, prevdisable, nextdisable }) {
  return (
    <div className="flex text-3xl items-center justify-between p-2">
      <button
        className="disabled:text-stone-400 disabled:cursor-not-allowed"
        disabled={prevdisable}
        onClick={() => setpage((page) => page - 8)}
      >
        <TbSquareRoundedChevronLeftFilled />
      </button>
      <button
        className="disabled:text-stone-400 disabled:cursor-not-allowed"
        disabled={nextdisable}
        onClick={() => setpage((page) => page + 8)}
      >
        <TbSquareRoundedChevronRightFilled />
      </button>
    </div>
  );
}

export default Buttons;
