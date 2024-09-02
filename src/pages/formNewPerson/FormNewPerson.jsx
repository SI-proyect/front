import { NavBar, PopUpSuccess, PopUpError } from "./index";
import { useNaturalPerson } from "../../context/NaturalPersonContext";
import { useNavigate } from "react-router-dom";

const FormNewPerson = () => {
  const {
    createClient,
    setClient,
    error,
    load,
    statusCode,
    handleErrorChange,
  } = useNaturalPerson();

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToCreate = () => {
    handleErrorChange();
    navigate("/addPerson");
  };

  if (load) return <div className="loader"></div>;
  return (
    <div className="w-full">
      {statusCode === 201 ? (
        <PopUpSuccess
          title="Exito"
          desc="El cliente se ha guardado correctamente"
          handleCerrar={redirectToHome}
        />
      ) : null}

      {statusCode === 400 || error ? (
        <PopUpError
          title="Ups"
          desc="Hubo algún error al guardar el cliente. Por favor ingrese los datos de nuevo"
          handleCerrar={redirectToCreate}
        />
      ) : null}

      <NavBar />

      <div className="w-1/3 bg-white max-w-4xl mx-auto mt-7 shadow-lg">
        <div className="px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <h2 className="text-2xl">Formulario de Registro</h2>
          <p className="text-green-100">
            Por favor, complete todos los campos requeridos
          </p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* <div className="space-y-2 flex flex-col">
                <label htmlFor="id" className="text-sm font-medium">
                  ID
                </label>
                <input
                  id="id"
                  type="number"
                  placeholder="Ingrese el ID"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div> */}
              <div className="space-y-2 flex flex-col">
                <label htmlFor="cc" className="text-sm font-medium">
                  CC
                </label>
                <input
                  id="cc"
                  type="number"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      cc: e.target.value,
                    }))
                  }
                  placeholder="Ingrese el CC"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="nit" className="text-sm font-medium">
                  NIT
                </label>
                <input
                  id="nit"
                  type="number"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      nit: e.target.value,
                    }))
                  }
                  placeholder="Ingrese el NIT"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="name"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Ingrese el nombre completo"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label htmlFor="address" className="text-sm font-medium">
                  Dirección
                </label>
                <input
                  id="address"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      address: e.target.value,
                    }))
                  }
                  placeholder="Ingrese la dirección"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="telephone" className="text-sm font-medium">
                  Teléfono
                </label>
                <input
                  id="telephone"
                  type="tel"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      telephone: e.target.value,
                    }))
                  }
                  placeholder="Ingrese el número de teléfono"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="space-y-2  flex flex-col">
                <label htmlFor="mail" className="text-sm font-medium">
                  Correo Electrónico
                </label>
                <input
                  id="mail"
                  type="email"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      mail: e.target.value,
                    }))
                  }
                  placeholder="Ingrese el correo electrónico"
                  className="px-2 py-2 border border-gray-200 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="hidden space-y-2">
                <label htmlFor="user" className="text-sm font-medium">
                  Usuario
                </label>
                <input
                  id="user"
                  type="number"
                  value="1"
                  readOnly
                  className="bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="space-y-2  flex flex-col">
                <label htmlFor="notes" className="text-sm font-medium">
                  Notas
                </label>
                <textarea
                  id="notes"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      notes: e.target.value,
                    }))
                  }
                  placeholder="Ingrese notas adicionales"
                  className="px-2 py-2 border border-gray-200 rounded-lg min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-md">
                <input
                  id="fiscal_responsibilities"
                  className="text-green-500 focus:ring-green-500"
                  type="checkbox"
                  onChange={(e) =>
                    setClient((prevState) => ({
                      ...prevState,
                      fiscal_responsibilities: e.target.checked,
                    }))
                  }
                  name="fiscal_responsibilities"
                  value="false"
                />
                <label
                  htmlFor="fiscal_responsibilities"
                  className="text-sm font-medium"
                >
                  Responsabilidades Fiscales
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-4 flex justify-center bg-gray-50">
          <button
            onClick={createClient}
            className="w-1/2 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200"
          >
            Enviar Formulario
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormNewPerson;
