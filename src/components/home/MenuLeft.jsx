import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import menuIco from "../../assets/ico/menu.png";

const MenuLeft = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    {
      text: "Personas Naturales",
      to: "/",
    },
    {
      text: "Personas Naturales",
      to: "/",
    },
    {
      text: "Personas Naturales",
      to: "/",
    },
    {
      text: "Personas Naturales",
      to: "/",
    },
    {
      text: "Personas Naturales",
      to: "/",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <button
        className="transition ease-in-out delay-150 w-all fixed top-20 -left-8 hover:translate-x-3 z-50 py-2 px-3 bg-white rounded-full border border-lime-700 duration-300"
        onClick={toggleMenu}
      >
        <img className="w-6" src={menuIco} alt="Menu" />
      </button>
    );
  }

  return (
    <div className="bg-white max-w-80 h-screen p-4 fixed top-0 left-0 border border-gray-500">
      <button
        className="relative top-0 right-0 z-50 block py-1 px-2 bg-red-600 text-white text-xs rounded-md"
        onClick={toggleMenu}
      >
        X
      </button>
      <div className="w-full border-b border-solid border-b-lime-600 pb-2 flex">
        <div className="mr-1">Bienvenido </div>
        <div className="text-lime-600"> {user.displayName || user.email}</div>
      </div>

      <div className="block mt-4 text-gray-700">
        {menu.map((item, index) => (
          <div className="mt-3" key={index}>
            <div className="hover:text-lime-700">
              <Link to={item.to}> {item.text} </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MenuLeft.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MenuLeft;
