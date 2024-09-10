import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { usePersonDetail } from "../../context/PersonDetailContext";
import { useNaturalPerson } from "../../context/NaturalPersonContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  NavBar,
  PersonalInformation,
  PersonComment,
  DeclaracionRenta,
  Rut,
  UpDocuments,
  PopUpError,
} from "./index";
import "../../styles/loader.css";

const DetailPerson = () => {
  // const authContext = useAuth()
  const { user } = useAuth();

  const {
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
  } = usePersonDetail();

  const { cc } = useParams();

  const [answerDelete, setAnswerDelete] = useState(false);

  const { setCCDelete, deleteClient } = useNaturalPerson();

  const [loadView, setLoadView] = useState(false);

  // Mover la llamada a setCC dentro de useEffect
  useEffect(() => {
    if (cc) {
      setCC(cc);
    }
  }, [cc, setCC]); // Dependencia de cc y setCC

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (cc) {
      setCCDelete(cc);
    }
  }, [cc, setCCDelete]);

  const handleDelete = async () => {
    setLoadView(true);
    await deleteClient();
    setAnswerDelete(false);
    setLoadView(false);
    redirectToHome();
  };

  if (
    loadingPerson ||
    loadView ||
    loadingDocDecl ||
    loadingDocRut ||
    loadingUpDataDec ||
    loadingUpDataRut
  )
    return <div className="loader"></div>;

  if (error)
    return (
      <h1 className="text-2xl font-semibold m-auto text-center">
        Hubo algún error al traer la información
      </h1>
    );

  return (
    <div>
      {answerDelete ? (
        <PopUpError
          title="Eliminar"
          desc="¿Estás seguro de eliminar este cliente?"
          handleCerrar={handleDelete}
          button="Eliminar"
        />
      ) : null}
      <NavBar />

      <div className="mt-6 flex flex-wrap justify-around items-start gap-6">
        <div className="w-5/12 h-auto  text-black flex flex-col justify-between bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-lg">
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

          <PersonalInformation
            dataPerson={dataPerson}
            setAnswerDelete={setAnswerDelete}
          />
        </div>

        <div className="w-5/12 h-fit">Alertas de usuario</div>

        <div className="w-5/12 h-fit">
          <PersonComment comment={dataPerson.notes} user={user} />
          <UpDocuments
            upDeclaracion={upDeclaracion}
            setUpDataDec={setUpDataDec}
            upDataDecError={upDataDecError}
            setUpDataDecError={setUpDataDecError}
            upRut={upRut}
            setUpDataRut={setUpDataRut}
            upDataRutError={upDataRutError}
            setUpDataRutError={setUpDataRutError}
          />
        </div>

        <div className="w-5/12 h-auto">
          <DeclaracionRenta
            dataDeclaration={dataDeclaration}
            errorDocDecl={errorDocDecl}
          />
        </div>

        <div className="w-5/12 h-auto">
          <Rut dataRut={dataRut} errorDocRut={errorDocRut} />
        </div>
      </div>
    </div>
  );
};

export default DetailPerson;
