import PropTypes from "prop-types";

const RutNaturalPerson = ({ person }) => {
  return (
    <div className="w-1/2">
      {" "}
      <div>Datos del RUT:</div>
      <div>Digito de verificación: {person.digi_very}</div>
      <div>
        Actividades economicas:
        {person.act_econo.map((act, index) => (
          <div key={index}> {act} </div>
        ))}
      </div>
      <div>
        Responsabilidades Fiscales:
        {person.respo_fis.map((respo, index) => (
          <div key={index}> {respo} </div>
        ))}
      </div>
    </div>
  );
};

RutNaturalPerson.propTypes = {
  person: PropTypes.object.isRequired,
};

export default RutNaturalPerson;
