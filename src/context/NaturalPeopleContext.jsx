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
