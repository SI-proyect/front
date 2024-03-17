import PropTypes from "prop-types";

const NavBar = ({ logout }) => {
  return (
    <div className="w-screen bg-lime-500 flex justify-between py-2 px-3 text-white items-center">
      NPCA
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
