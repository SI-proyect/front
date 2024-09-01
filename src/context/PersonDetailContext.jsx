import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const PersonDetailContext = createContext();

export const usePersonDetail = () => {
  const context = useContext(PersonDetailContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no persons provider");
  return context;
};

export const PersonDetailProvider = ({ children }) => {
  const [dataPerson, setDataPerson] = useState(null);
  const [cc, setCC] = useState(null);
  const [loadingPerson, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cc) {
      // Función para hacer la llamada a la API
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://api-5iz8.onrender.com/clients/".concat(cc)
          );
          setDataPerson(response.data); // Guardar los datos de la respuesta
          setLoading(false); // Terminar el indicador de carga
        } catch (err) {
          setError(err); // Capturar el error en caso de que ocurra
          setLoading(false); // Asegurarse de que se detenga la carga
        }
      };

      fetchData(); // Llamar a la función
    } // else {
    //   console.log("No hay cc");
    // }
  }, [cc]);

  return (
    <PersonDetailContext.Provider
      value={{ dataPerson, loadingPerson, error, setCC }}
    >
      {children}
    </PersonDetailContext.Provider>
  );
};

PersonDetailProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
