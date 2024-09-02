import PropTypes from "prop-types";
import icoSuccess from "../../assets/ico/ico_success_green.png";

const PopUpSuccess = ({ title, desc, handleCerrar }) => {
  return (
    <div className="bg-white/80 absolute w-full h-full flex justify-center items-center ">
      <div className="py-3 px-4 w-1/4 bg-white flex flex-col gap-4 border shadow-md">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
            <img src={icoSuccess} alt="Ico success" className="w-5" />
            {title}
          </div>
          <div>{desc}</div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <button
            onClick={handleCerrar}
            className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

PopUpSuccess.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  handleCerrar: PropTypes.func.isRequired,
};

export default PopUpSuccess;
