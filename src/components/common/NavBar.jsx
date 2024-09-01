import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const NavBar = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

    // navigate('/login')
  };

  return (
    <div className="w-screen bg-green-500 flex justify-between py-4 px-3 text-white items-center">
      <Link to="/">
        <h2 className="text-2xl font-bold">NPCA</h2>
      </Link>

      <button
        className="bg-white hover:bg-green-600 text-black hover:text-white rounded py-2 px-4"
        onClick={handleLogout}
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
