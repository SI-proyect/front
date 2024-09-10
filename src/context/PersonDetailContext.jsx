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
  const [dataDeclaration, setDataDeclaration] = useState(null);
  const [dataRut, setDataRut] = useState(null);
  const [cc, setCC] = useState(null);
  const [loadingPerson, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [loadingDocDecl, setLoadingDocsDecl] = useState(true);
  const [errorDocDecl, setErrorDocDecl] = useState(null);

  const [loadingDocRut, setLoadingDocsRut] = useState(true);
  const [errorDocRut, setErrorDocRut] = useState(null);

  const [upDataDec, setUpDataDec] = useState(null);
  const [upDataDecError, setUpDataDecError] = useState(null);
  const [loadingUpDataDec, setLoadingUpDataDec] = useState(false);

  const [upDataRut, setUpDataRut] = useState(null);
  const [upDataRutError, setUpDataRutError] = useState(null);
  const [loadingUpDataRut, setLoadingUpDataRut] = useState(false);

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

  useEffect(() => {
    if (cc) {
      const fetchData = async () => {
        try {
          const responseDeclaration = await axios.get(
            `https://api-5iz8.onrender.com/clients/${cc}/declaration`
          );

          // Verifica la estructura de la respuesta
          console.log("Response Declaracion:", responseDeclaration.data);

          setDataDeclaration(responseDeclaration.data);
          setLoadingDocsDecl(false);
        } catch (err) {
          console.log("Error al consultar la declaracion", err);
          setErrorDocDecl(err);
          setLoadingDocsDecl(false);
        }
      };

      fetchData();
    }
  }, [cc]);

  useEffect(() => {
    if (cc) {
      const fetchData = async () => {
        try {
          const responseRut = await axios.get(
            `https://api-5iz8.onrender.com/clients/${cc}/rut`
          );

          console.log("Response RUT:", responseRut.data);

          setDataRut(responseRut.data);
          setLoadingDocsRut(false);
        } catch (err) {
          console.log("Error al consultar Rut", err);
          setErrorDocRut(err);
          setLoadingDocsRut(false);
        }
      };

      fetchData();
    }
  }, [cc]);

  const upDeclaracion = async () => {
    try {
      setLoadingUpDataDec(true);
      const dataUp = new FormData();
      for (const key in upDataDec) {
        if (key !== "file") {
          dataUp.append(key, upDataDec[key]);
        }
      }

      if (upDataDec.file) {
        dataUp.append("file", upDataDec.file); // Asegúrate de que 'file' sea el nombre correcto en el backend
      }

      console.log(Array.from(dataUp.entries())); // Verifica qué estás enviando

      const responseUpDecl = await axios.post(
        `https://api-5iz8.onrender.com/clients/${cc}/declaration/set`,
        dataUp
      );

      console.log("Response UpDeclaration:", responseUpDecl.data);
      setLoadingUpDataDec(false);
      setUpDataDecError(false);
    } catch (err) {
      console.log("Error al subir la declaracion", err);

      setLoadingUpDataDec(false);
      setUpDataDecError(true);
    }
  };

  const upRut = async () => {
    try {
      setLoadingUpDataRut(true);
      const dataUp = new FormData();

      if (upDataRut.file) {
        dataUp.append("file", upDataRut.file); // Asegúrate de que 'file' sea el nombre correcto en el backend
      }

      console.log(Array.from(dataUp.entries())); // Verifica qué estás enviando

      const responseUpDecl = await axios.post(
        `https://api-5iz8.onrender.com/clients/${cc}/rut/set`,
        dataUp
      );

      console.log("Response UpDeclaration:", responseUpDecl.data);
      setLoadingUpDataRut(false);
      setUpDataRutError(false);
    } catch (err) {
      console.log("Error al subir la declaracion", err);

      setLoadingUpDataRut(false);
      setUpDataRutError(true);
    }
  };

  return (
    <PersonDetailContext.Provider
      value={{
        dataPerson,
        dataDeclaration,
        dataRut,
        loadingPerson,
        error,
        setCC,
        loadingDocDecl,
        errorDocDecl,
        loadingDocRut,
        errorDocRut,
        upDeclaracion,
        setUpDataDec,
        loadingUpDataDec,
        upDataDecError,
        setUpDataDecError,
        upRut,
        setUpDataRut,
        loadingUpDataRut,
        upDataRutError,
        setUpDataRutError,
      }}
    >
      {children}
    </PersonDetailContext.Provider>
  );
};

PersonDetailProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
