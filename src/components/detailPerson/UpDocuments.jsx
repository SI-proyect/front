import { useState } from "react";
import icoUpload from "../../assets/ico/ico_upload_black.png";
import PopUpError from "../../components/common/PopUpError";
import PopUpSuccess from "../../components/common/PopUpSuccess";

const UpDocuments = ({
  upDeclaracion,
  setUpDataDec,
  upDataDecError,
  setUpDataDecError,
  upRut,
  setUpDataRut,
  upDataRutError,
  setUpDataRutError,
}) => {
  const refreshPage = () => {
    window.location.reload(); // Recarga la página actual
  };

  const handleCerrar = () => {
    setUpDataDecError(null);
    refreshPage();
  };

  return (
    <div className="mt-3 bg-white overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg lg:col-span-3 md:col-span-2">
      {upDataDecError === false ? (
        <PopUpSuccess
          title="Exito"
          desc="Se subieron los datos de la declaración de renta correctamente"
          handleCerrar={handleCerrar}
        />
      ) : (
        <></>
      )}

      {upDataDecError === true ? (
        <PopUpError
          title="Error"
          desc="Hubo algún problema... Por favor, intenta de nuevo."
          handleCerrar={handleCerrar}
        />
      ) : (
        <></>
      )}
      <div className="px-7 py-5 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="text-xl flex items-center gap-2">
          {/* <img src={icoUpload} alt="Ico Upload" className="w-5" /> */}
          Subir Documentos
        </div>
      </div>
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="declaracion-renta"
              className="text-sm font-medium text-slate-700"
            >
              Declaración de Renta (PDF)
            </label>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="cc" className="text-sm font-medium">
                Beneficio de aditoria anual
              </label>
              <input
                id="cc"
                type="text"
                onChange={(e) =>
                  setUpDataDec((prevState) => ({
                    ...prevState,
                    anual_auditory_benefits: e.target.value,
                  }))
                }
                placeholder="Ingrese el CC"
                className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="cc" className="text-sm font-medium">
                Beneficio de aditoria semestral
              </label>
              <input
                id="cc"
                type="text"
                onChange={(e) =>
                  setUpDataDec((prevState) => ({
                    ...prevState,
                    semestrals_auditory_benefits: e.target.value,
                  }))
                }
                placeholder="Ingrese el CC"
                className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="cc" className="text-sm font-medium">
                UVT
              </label>
              <input
                id="cc"
                type="number"
                onChange={(e) =>
                  setUpDataDec((prevState) => ({
                    ...prevState,
                    uvt: e.target.value,
                  }))
                }
                placeholder="Ingrese el CC"
                className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="declaracion-renta"
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.type === "application/pdf") {
                    setUpDataDec((prevState) => ({
                      ...prevState,
                      file: file,
                    }));
                  } else {
                    // Manejar el caso en que el archivo no sea un PDF
                    console.error("Por favor, selecciona un archivo PDF.");
                  }
                }}
                className="flex-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
              />
              <div>
                <div>
                  <button
                    size="icon"
                    className="py-2 px-2 hover:bg-green-50 border-solid border-2 rounded-lg"
                    onClick={upDeclaracion}
                  >
                    <img src={icoUpload} alt="Ico Upload" className="w-5" />
                    {/* <span className="sr-only">Subir Declaración de Renta</span> */}
                  </button>
                </div>
                {/* <div>
                  <p>Subir Declaración de Renta</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="rut" className="text-sm font-medium text-slate-700">
              RUT (PDF)
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="rut"
                type="file"
                accept=".pdf"
                className="flex-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
              />
              <div>
                <div>
                  <button
                    size="icon"
                    className="py-2 px-2 hover:bg-green-50 border-solid border-2 rounded-lg"
                  >
                    <img src={icoUpload} alt="Ico Upload" className="w-5" />
                    {/* <span className="sr-only">Subir RUT</span> */}
                  </button>
                </div>
                {/* <div>
                  <p>Subir RUT</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpDocuments;
