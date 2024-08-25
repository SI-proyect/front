import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { usePersonDetail } from "../../context/PersonDetailContext";
import { useParams } from "react-router-dom";
import { NavBar, PersonalInformation } from "./index";
import "../../styles/loader.css";

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

  if (loadingPerson) return <div className="loader"></div>;
  if (error)
    return (
      <h1 className="text-2xl font-semibold m-auto text-center">
        Hubo algún error al traer la información
      </h1>
    );

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-3/5 m-auto mt-5  text-black flex flex-col justify-between bg-white rounded-md overflow-hidden drop-shadow-md">
        {/* <MenuLeft user={user} /> */}

        <div className="w-full bg-gradient-to-r from-green-600 to-green-400 px-4 py-5 sm:px-6 flex items-center">
          <div className="w-11 h-11 bg-slate-200 rounded-full flex justify-center items-center text-black text-xl font-bold">
            {dataPerson.name.charAt(0)}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-2xl leading-6 font-bold text-white">
              {dataPerson.name}
            </h3>
            <p className="mt-1 text-green-100 text-sm">{dataPerson.cc}</p>
          </div>
        </div>

        <PersonalInformation dataPerson={dataPerson} />
      </div>
    </div>
  );
};

export default DetailPerson;
