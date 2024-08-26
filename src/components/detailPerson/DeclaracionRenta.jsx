import PropTypes from "prop-types";

const DeclaracionRenta = ({ dataDeclaracion }) => {
  return (
    <div className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="py-6 pl-4 text-xl flex items-center gap-2">
          Declaración de Renta
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Ingresos Brutos
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaracion.ingresosBrutos}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Ingersos Netos
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaracion.ingresosNetos}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Deducciones
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaracion.deducciones}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Impuesto a Pagar
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaracion.impuestoPagar}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DeclaracionRenta.propTypes = {
  dataDeclaracion: PropTypes.shape({
    ingresosBrutos: PropTypes.number.isRequired,
    ingresosNetos: PropTypes.number.isRequired,
    deducciones: PropTypes.number.isRequired,
    impuestoPagar: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeclaracionRenta;
