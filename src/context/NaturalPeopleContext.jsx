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

  useEffect(() => {
    // Función para hacer la llamada a la API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-si-project.onrender.com/clients"
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

  // const naturalPeople = [
  //   {
  //     nombre: "Ricardo Salas",
  //     cc: "111111",
  //     nit: "222222",
  //     digi_very: "3",
  //     direccion: "Calle 46c",
  //     email: "hola@gmail.com",
  //     telefono: "321 321321",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  //   {
  //     nombre: "Ramiro Barragan",
  //     cc: "123453",
  //     nit: "22634523",
  //     digi_very: "4",
  //     direccion: "Carrera 11",
  //     email: "holaRamiro@gmail.com",
  //     telefono: "321 321321",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  //   {
  //     nombre: "Ernesto Perez",
  //     cc: "876543",
  //     nit: "1234678",
  //     digi_very: "3",
  //     direccion: "Nevado del Cocouy",
  //     email: "freilejon@gmail.com",
  //     telefono: "123",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  //   {
  //     nombre: "Juanito Perez",
  //     cc: "284739",
  //     nit: "949384",
  //     digi_very: "3",
  //     direccion: "Calle 46c",
  //     email: "juaaaaaaaaaaaan@gmail.com",
  //     telefono: "111 11111",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  //   {
  //     nombre: "Laura Sánchez",
  //     cc: "932748",
  //     nit: "222222",
  //     digi_very: "3",
  //     direccion: "Calle 46c",
  //     email: "lau@gmail.com",
  //     telefono: "321 321321",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  //   {
  //     nombre: "Marta Whasington",
  //     cc: "000000",
  //     nit: "222222",
  //     digi_very: "3",
  //     direccion: "Calle 46c",
  //     email: "holusaa@gmail.com",
  //     telefono: "321 321321",
  //     act_econo: ["1234", "4567"],
  //     respo_fis: ["11", "22", "33"],
  //   },
  // ];

  return (
    <NaturalPeopleContext.Provider value={{ dataPeople, loadingPeople, error }}>
      {children}
    </NaturalPeopleContext.Provider>
  );
};

NaturalPeopleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
