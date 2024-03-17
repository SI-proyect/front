import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const NaturalPeopleContext = createContext();

export const useNaturalPeople = () => {
  const context = useContext(NaturalPeopleContext);

  //Si no existe el contexto se mostrará este error
  if (!context) throw new Error("There is no persons provider");
  return context;
};

export const NaturalPeopleProvider = ({ children }) => {
  const [dataPerson, setDataPersons] = useState(null);

  const setPerson = (data) => {
    setDataPersons(data);
  };

  const naturalPeople = [
    {
      nombre: "Ricardo Salas",
      cc: "111111",
      nit: "222222",
      digi_very: "3",
      direccion: "Calle 46c",
      email: "hola@gmail.com",
      telefono: "321 321321",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
    {
      nombre: "Ramiro Barragan",
      cc: "123453",
      nit: "22634523",
      digi_very: "4",
      direccion: "Carrera 11",
      email: "holaRamiro@gmail.com",
      telefono: "321 321321",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
    {
      nombre: "Ernesto Perez",
      cc: "876543",
      nit: "1234678",
      digi_very: "3",
      direccion: "Nevado del Cocouy",
      email: "freilejon@gmail.com",
      telefono: "123",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
    {
      nombre: "Juanito Perez",
      cc: "284739",
      nit: "949384",
      digi_very: "3",
      direccion: "Calle 46c",
      email: "juaaaaaaaaaaaan@gmail.com",
      telefono: "111 11111",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
    {
      nombre: "Laura Sánchez",
      cc: "932748",
      nit: "222222",
      digi_very: "3",
      direccion: "Calle 46c",
      email: "lau@gmail.com",
      telefono: "321 321321",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
    {
      nombre: "Marta Whasington",
      cc: "000000",
      nit: "222222",
      digi_very: "3",
      direccion: "Calle 46c",
      email: "holusaa@gmail.com",
      telefono: "321 321321",
      act_econo: ["1234", "4567"],
      respo_fis: ["11", "22", "33"],
    },
  ];

  return (
    <NaturalPeopleContext.Provider
      value={{ dataPerson, setPerson, naturalPeople }}
    >
      {children}
    </NaturalPeopleContext.Provider>
  );
};

NaturalPeopleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
