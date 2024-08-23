import { useNaturalPeople } from "../../context/NaturalPeopleContext";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";
import { MenuLeft, NavBar, RutNaturalPerson } from "./index";
import perfil from "../../assets/perfil/perfil_p.avif";
import { useState } from "react";

const DetailPerson = () => {
  const { id } = useParams();
  const { naturalPeople } = useNaturalPeople();
  const { seeInfo, setSeeInfo } = useState(false);

  const handleSeeInfo = () => {
    setSeeInfo(!seeInfo);
  };

  const { user, logout, loading } = useAuth();
  // console.log(naturalPeople);

  const handleLogout = () => logout();

  if (loading) return <div>Cargando...</div>;

  const person = naturalPeople[parseInt(id)];

  return (
    <div>
      <NavBar logout={handleLogout} />

      {seeInfo ? (
        <div className="w-5/6 bg-white fixed top-10">Holaaa</div>
      ) : (
        <></>
      )}

      <div className="w-screen m-auto mt-5 px-4 text-black flex justify-between">
        <MenuLeft user={user} />

        <div className="bg-white w-full py-16 px-10 lg:px-16 flex flex-col rounded">
          <div className="w-full mb-5 px-5 py-4 flex flex-col md:flex-row justify-around items-center border border-lime-600 rounded shadow-lg">
            <div className="w-20 h-20 overflow-hidden">
              <img
                className="rounded-full w-full h-full object-cover object-center"
                src={perfil}
                alt="Imagen de Persona Natural"
              />
            </div>

            <div className="w-2/3 h-all ml-6 md:border-r flex flex-col md:flex-row">
              <div className="md:pr-5 flex flex-col items-center justify-center text-center md:border-r-2 md:border-lime-600">
                <div className="text-3xl text-center">{person.nombre}</div>
                <button className="" onClick={() => handleSeeInfo}>
                  Ver Información personal
                </button>
              </div>

              <div className="flex flex-col justify-evenly hidden md:block">
                <div className="flex ml-5 text-base items-center">
                  <div className="text-sm text-gray-800">
                    <strong className="text-lime-700">C.C.</strong> {person.cc}
                  </div>
                  <div className="text-sm text-gray-800 ml-3 flex items-center">
                    <strong className="text-lime-700">Tel: </strong>{" "}
                    {person.telefono}
                  </div>

                  <div className="ml-3">
                    <strong className="text-lime-700 ">Dirección: </strong>{" "}
                    {person.direccion}
                  </div>
                </div>

                <div className="flex ml-5 text-base">
                  <div className="">
                    <strong className="text-lime-700">Email: </strong>{" "}
                    {person.email}
                  </div>
                  <div className="ml-3">
                    <strong className="text-lime-700">NIT: </strong>{" "}
                    {person.nit}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-all m-auto hover:text-lime-700">
              <button>Actualizar Información Personal</button>
            </div>
          </div>

          <div className="flex">
            <RutNaturalPerson person={person} />
            <div>Datos Declaración de Renta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;
