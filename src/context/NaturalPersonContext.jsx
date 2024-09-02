import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const NaturalPersonContext = createContext();

export const useNaturalPerson = () => {
  const context = useContext(NaturalPersonContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no persons provider");
  return context;
};

export const NaturalPersonProvider = ({ children }) => {
  const [client, setClient] = useState({
    cc: 0,
    nit: 0,
    name: "",
    address: "",
    telephone: 0,
    mail: "",
    user: 1,
    notes: "",
    fiscal_responsibilities: false,
  });

  const [statusCode, setStatusCode] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [ccDelete, setCCDelete] = useState(null);

  //useEffect(() => {
  //   console.log("Client:", client);
  // }, [client]);

  const createClient = async () => {
    setLoad(true);
    try {
      const response = await axios.post(
        "https://api-5iz8.onrender.com/clients/create",
        client
      );
      console.log("Response:", response.data);
      setStatusCode(response.status);
    } catch (error) {
      console.error("There was an error!", error);
      setError(error);
    }

    setLoad(false);
  };

  const deleteClient = async () => {
    setLoad(true);
    try {
      const response = await axios.delete(
        "https://api-5iz8.onrender.com/clients/delete/".concat(ccDelete)
      );
      console.log("Response:", response.data);
      setStatusCode(response.status);
    } catch (error) {
      console.error("There was an error!", error);
      setError(error);
    }

    setLoad(false);
  };

  const handleErrorChange = () => {
    setError(null);
    setStatusCode(null);
  };

  return (
    <NaturalPersonContext.Provider
      value={{
        createClient,
        setClient,
        error,
        load,
        statusCode,
        handleErrorChange,
        deleteClient,
        setCCDelete,
      }}
    >
      {children}
    </NaturalPersonContext.Provider>
  );
};

NaturalPersonProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
