import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const CalendarContext = createContext();

export const useCalendar = () => {
  const context = useContext(CalendarContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no persons provider");
  return context;
};

export const CalendarProvider = ({ children }) => {
  const [dataCalendar, setDataCalendar] = useState(null);
  const [loadingCalendar, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-5iz8.onrender.com/calendar"
        );
        setDataCalendar(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CalendarContext.Provider value={{ dataCalendar, loadingCalendar, error }}>
      {children}
    </CalendarContext.Provider>
  );
};

CalendarProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
