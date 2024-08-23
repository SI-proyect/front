import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ logout }) => {
  return (
    <div className="w-screen bg-lime-500 flex justify-between py-2 px-3 text-white items-center">
      <Link to="/">NPCA</Link>

      <button
        className="bg-lime-600 hover:bg-lime-800 rounded py-2 px-4"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavBar;
