import PropTypes from "prop-types";

Error.propTypes = {
  children: PropTypes.any,
};

function Error({ children }) {
  return (
    <div className="m-auto mt-28 w-96 text-center bg-red-200 rounded-md text-red-500 p-2">
      {children}
    </div>
  );
}

export default Error;
