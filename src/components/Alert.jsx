import PropTypes from "prop-types";

const Alert = ({ message }) => {
  return (
    <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center">
      <spam className="sm:inline-block"> {message} </spam>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
