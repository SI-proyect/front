// import { Link } from "react-router-dom";
import icoCampana from "../../assets/ico/ico_campana.png";

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
      <ul className="divide-y mt-2 divide-gray-100 w-all">
        {alerts.map((alert, index) => (
          //   <Link key={index} to={"/person/" + pers.cc}>
          <li key={index} className=""></li>
          //   </Link>
        ))}
      </ul>
    </div>
  );
};

export default AlertsAllPeople;
