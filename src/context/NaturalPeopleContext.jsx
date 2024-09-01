import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const NaturalPeopleContext = createContext();

export const useNaturalPeople = () => {
  const context = useContext(NaturalPeopleContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no persons provider");
  return context;
};

export const NaturalPeopleProvider = ({ children }) => {
  const [dataPeople, setDataPeople] = useState(null);
  const [loadingPeople, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [errorDelete, setErrorDelete] = useState(null);

  useEffect(() => {
    // Función para hacer la llamada a la API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-5iz8.onrender.com/clients"
        );
        setDataPeople(response.data); // Guardar los datos de la respuesta
        setLoading(false); // Terminar el indicador de carga
      } catch (err) {
        setError(err); // Capturar el error en caso de que ocurra
        setLoading(false); // Asegurarse de que se detenga la carga
      }
    };

    fetchData(); // Llamar a la función
  }, []); // El arreglo vacío asegura que se ejecute solo una vez cuando el componente se monta

  // const fetchDeletePerson = async () => {
  //   try {
  //     const response = await axios.get("https://api-5iz8.onrender.com/clients");
  //     setDataPeople(response.data); // Guardar los datos de la respuesta
  //     setLoading(false); // Terminar el indicador de carga
  //   } catch (err) {
  //     setError(err); // Capturar el error en caso de que ocurra
  //     setLoading(false); // Asegurarse de que se detenga la carga
  //   }
  // };

  return (
    <NaturalPeopleContext.Provider value={{ dataPeople, loadingPeople, error }}>
      {children}
    </NaturalPeopleContext.Provider>
  );
};

NaturalPeopleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
