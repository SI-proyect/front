import icoEdit from "../../assets/ico/ico_edit.png";
import PropTypes from "prop-types";

const PersonalInformation = ({ dataPerson }) => {
  return (
    <div className="border-b border-gray-200 px-4 py-5 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg leading-6 font-medium text-gray-900">
          Información Personal
        </h4>
        <button
          // onClick={() => setIsEditing(!isEditing)}
          className="flex gap-2 items-center text-green-600 hover:text-green-700 hover:border-green-600 transition-colors duration-200"
        >
          <img src={icoEdit} alt="Ico editar" />
          Editar
        </button>
      </div>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        {[
          { label: "Nombre", value: dataPerson.name },
          { label: "Correo", value: dataPerson.mail },
          {
            label: "Dirección",
            value: dataPerson.address,
          },
          { label: "NIT", value: dataPerson.nit },
          { label: "DNI", value: dataPerson.cc },
          { label: "Teléfono", value: dataPerson.telephone },
        ].map((item, index) => (
          <div key={index} className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500 flex items-center">
              {/* <img src={item.icon} alt="ICONO" className="mr-2 h-5 w-5" /> */}
              {item.label}
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {/* {isEditing ? (
                <Input
                  defaultValue={item.value}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              ) : ( */}
              {item.value}
              {/* )} */}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

PersonalInformation.propTypes = {
  dataPerson: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    nit: PropTypes.number.isRequired,
    cc: PropTypes.number.isRequired,
    telephone: PropTypes.number.isRequired,
  }).isRequired,
};

export default PersonalInformation;
