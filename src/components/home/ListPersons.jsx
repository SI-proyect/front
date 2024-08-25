import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import icoAddUser from "../../assets/ico/ico_add_user.png";

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
    <div className="bg-white w-0.95 md:w-5/12 rounded py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl ml-3">Personas Naturales</h1>
        {/* <button className="bg-lime-600 text-white px-2 py-1">
          Agregar Nueva
        </button> */}

        {/* <input
          className="bg-lime-600 text-white px-2 py-1"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileUpload}
        /> */}

        <Link to="/addPerson">
          <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 flex flex-row justify-around gap-3 items-center rounded-md">
            <img src={icoAddUser} alt="Ico add user" className="w-6" />
            Agregar
          </button>
        </Link>
      </div>
      <ul className="divide-y mt-2 divide-gray-100 w-all">
        {naturalPeople.map((pers, index) => (
          <Link key={index} to={"/person/" + pers.cc}>
            <li className="transition ease-in-out delay-100 flex justify-between gap-x-6 py-3 px-2 w-all hover:bg-gray-100 rounded-md">
              <div className="flex items-center min-w-0 gap-x-4">
                <div className="w-9 h-9 bg-slate-200 rounded-full flex justify-center items-center text-black">
                  {pers.name.charAt(0)}
                </div>

                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-medium leading-6 text-gray-900">
                    {pers.name}
                  </p>
                  <p className="truncate text-sm leading-5 text-gray-500">
                    {pers.mail}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  C.C. {pers.cc}
                </p>
                <p className=" text-sm leading-5 text-gray-500">
                  Telefono: {pers.telephone}
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
      id: PropTypes.number.isRequired,
      cc: PropTypes.number.isRequired,
      nit: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      telephone: PropTypes.number.isRequired,
      mail: PropTypes.string.isRequired,
      user: PropTypes.number.isRequired,
      notes: PropTypes.string.isRequired,
      fiscal_responsibilities: PropTypes.bool.isRequired,
      //fiscal_responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
      // Agrega más PropTypes según sea necesario
    })
  ).isRequired,
};

export default ListPersons;
