import PropTypes from "prop-types";

const DeclaracionRenta = ({ dataDeclaration }) => {
  dataDeclaration = dataDeclaration[0];

  console.log(dataDeclaration);

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
              Actividad Ecnomómica Primaria
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.primary_economic_activity}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Anticipación del año anterior
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.previus_year_anticipation}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Anticipación del siguiente año
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.next_year_anticipation}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Patrimonio Liquido
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.liquid_heritage}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Ingresos Liquidos
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.liquid_income}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">
              Impuesto a la Renta
            </p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.net_income_tax}
            </p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <p className="text-xs font-medium text-slate-500 mb-1">UVT</p>
            <p className="text-lg font-semibold text-slate-900">
              {dataDeclaration.uvt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DeclaracionRenta.propTypes = {
  dataDeclaration: PropTypes.arrayOf(
    PropTypes.shape({
      primary_economic_activity: PropTypes.number.isRequired,
      previus_year_anticipation: PropTypes.number.isRequired,
      next_year_anticipation: PropTypes.number.isRequired,
      liquid_heritage: PropTypes.number.isRequired,
      liquid_income: PropTypes.number.isRequired,
      net_income_tax: PropTypes.number.isRequired,
      uvt: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DeclaracionRenta;
