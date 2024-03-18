import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import user from "../../assets/ico/ico_user.png";

const ListPersons = ({ naturalPeople }) => {
  // const onFileUpload = (file) => {
  //   // Aquí puedes implementar la lógica para guardar el archivo en el proyecto
  //   localStorage.setItem("rut", file);
  //   console.log("Archivo subido:", file);
  // };

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   onFileUpload(file);
  // };

  return (
    <div className="bg-white w-full rounded py-3 px-4">
      <div className="flex justify-between">
        <h1 className="text-xl mb-2 ml-3">Personas Naturales</h1>
        {/* <button className="bg-lime-600 text-white px-2 py-1">
          Agregar Nueva
        </button> */}

        {/* <input
          className="bg-lime-600 text-white px-2 py-1"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileUpload}
        /> */}
      </div>
      <ul className="divide-y divide-gray-100 w-all">
        {naturalPeople.map((pers, index) => (
          <Link key={index} to={"/person/" + index}>
            <li className="transition ease-in-out delay-150 flex justify-between gap-x-6 py-5 px-2 w-all hover:bg-lime-100 rounded">
              <div className="flex min-w-0 gap-x-4">
                <img
                  src={user}
                  alt="Ico Usuario"
                  className="h-12 w-12 flex-none rounded-full"
                />

                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {pers.nombre}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {pers.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  <strong>C.C.</strong> {pers.cc}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <strong>Telefono:</strong> {pers.telefono}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

ListPersons.propTypes = {
  naturalPeople: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      cc: PropTypes.string.isRequired,
      nit: PropTypes.string.isRequired,
      digi_very: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      act_econo: PropTypes.arrayOf(PropTypes.string).isRequired,
      respo_fis: PropTypes.arrayOf(PropTypes.string).isRequired,
      // Agrega más PropTypes según sea necesario
    })
  ).isRequired,
};

export default ListPersons;
