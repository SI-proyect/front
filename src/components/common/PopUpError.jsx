import PropTypes from "prop-types";
import icoDanger from "../../assets/ico/ico_danger_red.png";

const PopUpError = ({ title, desc, handleCerrar, button }) => {
  return (
    <div className="bg-white/80 fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
      <div className="py-3 px-4 w-1/4 bg-white flex flex-col gap-4 border shadow-md">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-red-600 text-lg font-semibold">
            <img src={icoDanger} alt="Ico success" className="w-5" />
            {title}
          </div>
          <div>{desc}</div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <button
            onClick={handleCerrar}
            className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            {button || "Cerrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpError.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  handleCerrar: PropTypes.func.isRequired,
  button: PropTypes.string,
};

export default PopUpError;
