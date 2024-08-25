import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { usePersonDetail } from "../../context/PersonDetailContext";
import { useParams } from "react-router-dom";
import { NavBar } from "./index";
import perfil from "../../assets/perfil/perfil_p.avif";

const DetailPerson = () => {
  // const authContext = useAuth()
  const { logout } = useAuth();

  const { dataPerson, loadingPerson, error, setCC } = usePersonDetail();

  const { cc } = useParams();

  // Mover la llamada a setCC dentro de useEffect
  useEffect(() => {
    if (cc) {
      setCC(cc);
    }
  }, [cc, setCC]); // Dependencia de cc y setCC

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

    // navigate('/login')
  };

  if (loadingPerson) return <div>Buscando datos del usuario</div>;
  if (error) return <div>Hubo algún error al traer la información</div>;

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-screen m-auto mt-5 px-4 text-black flex justify-between">
        {/* <MenuLeft user={user} /> */}

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
                <div className="text-3xl text-center">{dataPerson.name}</div>
                {/* <button className="">
                  {" "}
                  <button className="" onClick={() => handleSeeInfo}></button>
                  Ver Información personal
                </button> */}
              </div>

              <div className="flex flex-col justify-evenly hidden md:block">
                <div className="flex ml-5 text-base items-center">
                  <div className="text-sm text-gray-800">
                    <strong className="text-lime-700">C.C.</strong>{" "}
                    {dataPerson.cc}
                  </div>
                  <div className="text-sm text-gray-800 ml-3 flex items-center">
                    <strong className="text-lime-700">Tel: </strong>{" "}
                    {dataPerson.telephone}
                  </div>

                  <div className="ml-3">
                    <strong className="text-lime-700 ">Dirección: </strong>{" "}
                    {dataPerson.address}
                  </div>
                </div>

                <div className="flex ml-5 text-base">
                  <div className="">
                    <strong className="text-lime-700">Email: </strong>{" "}
                    {dataPerson.mail}
                  </div>
                  <div className="ml-3">
                    <strong className="text-lime-700">NIT: </strong>{" "}
                    {dataPerson.nit}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-all m-auto hover:text-lime-700">
              <button>Actualizar Información Personal</button>
            </div>
          </div>

          {/* <div className="flex">
            <RutNaturalPerson person={dataPerson} />
            <div>Datos Declaración de Renta</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;
