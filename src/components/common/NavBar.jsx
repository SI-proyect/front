import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ logout }) => {
  return (
    <div className="w-screen bg-green-500 flex justify-between py-2 px-3 text-white items-center">
      <Link to="/">
        <h2 className="text-2xl font-bold">NPCA</h2>
      </Link>

      <button
        className="bg-white hover:bg-green-600 text-black hover:text-white rounded py-2 px-4"
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
