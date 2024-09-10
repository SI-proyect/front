import PropTypes from "prop-types";
import icoCampana from "../../assets/ico/ico_campana.png";
import icoWarning from "../../assets/ico/ico_warning_orange.png";
import icoInfo from "../../assets/ico/ico_info_blue.png";
import icoDanger from "../../assets/ico/ico_danger_red.png";

const AlertsPerson = ({ dataAlertPerson, dataAlertPersonError }) => {
  return (
    <div className="bg-white w-full h-fit  rounded py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ml-3">Alertas</h1>
        <img src={icoCampana} alt="Ico de campana" className="w-5" />
      </div>
      <ul className="divide-y mt-4 flex flex-col gap-2 divide-gray-100 w-all">
        {dataAlertPersonError ? (
          <p>No hay alertas</p>
        ) : (
          dataAlertPerson.map((alert, index) => {
            return (
              <li key={index} className="flex flex-col gap-3">
                {alert.type === "warning" ? (
                  <div className="flex items-center space-x-4 bg-yellow-100 p-3 rounded-md">
                    <img src={icoWarning} alt="Ico warning" className="w-5" />
                    <p className="text-sm text-yellow-600">
                      {/* Para el digito {alert.digits} hay plazo hasta el{" "}
                      {alert.date}. Tienes al cliente {alert.name} con
                      identificación {alert.cc} */}

                      {alert.message}
                    </p>
                  </div>
                ) : null}

                {alert.type === "info" ? (
                  <div className="flex items-center space-x-4 bg-blue-100 p-3 rounded-md">
                    <img src={icoInfo} alt="Ico info" className="w-5" />
                    <p className="text-sm text-blue-600">
                      {/* Para el digito {alert.digits} hay plazo hasta el{" "}
                      {alert.date}. Tienes al cliente {alert.name} con
                      identificación {alert.cc} */}
                      {alert.message}
                    </p>
                  </div>
                ) : null}

                {alert.type === "danger" ? (
                  <div className="flex items-center space-x-4 bg-red-100 p-3 rounded-md">
                    <img src={icoDanger} alt="Ico danger" className="w-5" />
                    <p className="text-sm text-red-600">
                      {/* Para el digito {alert.digits} hay plazo hasta el{" "}
                      {alert.date}. Tienes al cliente {alert.name} con
                      identificación {alert.cc} */}
                      {alert.message}
                    </p>{" "}
                  </div>
                ) : (
                  <></>
                )}
              </li>
            );
          })
        )}

        {}
      </ul>
    </div>
  );
};

AlertsPerson.propTypes = {
  dataAlertPerson: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  dataAlertPersonError: PropTypes.oneOfType([PropTypes.string, PropTypes.null]),
};

export default AlertsPerson;
