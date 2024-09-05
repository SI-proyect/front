// import { Link } from "react-router-dom";
import icoCampana from "../../assets/ico/ico_campana.png";
import icoWarning from "../../assets/ico/ico_warning_orange.png";
import icoInfo from "../../assets/ico/ico_info_blue.png";
import icoDanger from "../../assets/ico/ico_danger_red.png";
import { useCalendar } from "../../context/CalendarContext";

const AlertsAllPeople = () => {
  const { dataCalendar, loadingCalendar, error } = useCalendar();

  // console.log(dataCalendar);

  const today = new Date();

  const getDaysDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  if (loadingCalendar) return <p>Cargando...</p>;
  if (error) return <p>Ha ocurrido un error: {error.message}</p>;

  return (
    <div className="bg-white w-0.95 h-fit md:w-5/12 rounded py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ml-3">Alertas</h1>
        <img src={icoCampana} alt="Ico de campana" className="w-5" />
      </div>
      <ul className="divide-y mt-4 flex flex-col gap-2 divide-gray-100 w-all">
        {dataCalendar.map((alert, index) => {
          const alertDate = new Date(alert.date);
          // const isToday = alertDate.toDateString() === today.toDateString();
          const daysDifference = getDaysDifference(today, alertDate);
          // console.log(daysDifference);

          if (alertDate < today && daysDifference > 3) {
            return null;
          }
          return (
            <li key={index} className="flex flex-col gap-3">
              {daysDifference >= 30 && daysDifference <= 60 ? (
                <div className="flex items-center space-x-4 bg-yellow-100 p-3 rounded-md">
                  <img src={icoWarning} alt="Ico warning" className="w-5" />
                  <p className="text-sm text-yellow-600">
                    Para el digito {alert.digits} hay plazo hasta el{" "}
                    {alert.date}
                  </p>
                </div>
              ) : null}

              {daysDifference > 60 ? (
                <div className="flex items-center space-x-4 bg-blue-100 p-3 rounded-md">
                  <img src={icoInfo} alt="Ico info" className="w-5" />
                  <p className="text-sm text-blue-600">
                    Para el digito {alert.digits} hay plazo hasta el{" "}
                    {alert.date}
                  </p>
                </div>
              ) : null}

              {daysDifference < 30 ? (
                <div className="flex items-center space-x-4 bg-red-100 p-3 rounded-md">
                  <img src={icoDanger} alt="Ico danger" className="w-5" />
                  <p className="text-sm text-red-600">
                    Para el digito {alert.digits} hay plazo hasta el{" "}
                    {alert.date}
                  </p>{" "}
                </div>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AlertsAllPeople;
