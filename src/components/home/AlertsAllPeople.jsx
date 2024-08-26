// import { Link } from "react-router-dom";
import icoCampana from "../../assets/ico/ico_campana.png";
import icoWarning from "../../assets/ico/ico_warning_orange.png";
import icoInfo from "../../assets/ico/ico_info_blue.png";
import icoDanger from "../../assets/ico/ico_danger_red.png";
const AlertsAllPeople = () => {
  const alerts = [
    {
      alert: "Actualización del sistema programada para el 15/07/2023",
      type: "warning",
    },
    {
      alert:
        "Nuevo módulo de reportes disponible. Haga clic para más información.",
      type: "info",
    },
    {
      alert:
        "Recordatorio: Actualice sus datos de contacto antes del 30/07/2023",
      type: "danger",
    },
  ];

  return (
    <div className="bg-white w-0.95 h-fit md:w-5/12 rounded py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ml-3">Alertas</h1>
        <img src={icoCampana} alt="Ico de campana" className="w-5" />
      </div>
      <ul className="divide-y mt-4 flex flex-col gap-2 divide-gray-100 w-all">
        {alerts.map((alert, index) => (
          //   <Link key={index} to={"/person/" + pers.cc}>
          <li key={index} className="flex flex-col gap-3">
            {alert.type == "warning" ? (
              <div className="flex items-center space-x-4 bg-yellow-100 p-3 rounded-md">
                <img src={icoWarning} alt="Ico warning" className="w-5" />
                <p className="text-sm text-yellow-600">{alert.alert}</p>{" "}
              </div>
            ) : (
              <></>
            )}

            {alert.type == "info" ? (
              <div className="flex items-center space-x-4 bg-blue-100 p-3 rounded-md">
                <img src={icoInfo} alt="Ico info" className="w-5" />
                <p className="text-sm text-blue-600">{alert.alert}</p>{" "}
              </div>
            ) : (
              <></>
            )}

            {alert.type == "danger" ? (
              <div className="flex items-center space-x-4 bg-red-100 p-3 rounded-md">
                <img src={icoDanger} alt="Ico danger" className="w-5" />
                <p className="text-sm text-red-600">{alert.alert}</p>{" "}
              </div>
            ) : (
              <></>
            )}
          </li>
          //   </Link>
        ))}
      </ul>
    </div>
  );
};

export default AlertsAllPeople;
