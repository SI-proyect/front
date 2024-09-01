import PropTypes from "prop-types";
import icoTrabajo from "../../assets/ico/ico_work_black.png";
import icorut from "../../assets/ico/ico_rut_black.png";
import icoActivity from "../../assets/ico/ico_activity_green.png";

const DeclaracionRenta = ({ nit }) => {
  const dataRut = {
    trabajo: "Contador Público",
    ingresosBrutos: "$120.000.000",
    ingresosNetos: "$95.000.000",
    deducciones: "$25.000.000",
    impuestoPagar: "$18.500.000",
  };

  return (
    <div className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="py-6 pl-4 text-xl flex items-center gap-2">
          Registro único tributario
        </div>
      </div>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* {[
            { icon: Briefcase, label: "Trabajo", value: "Contador Público" },
            {
              icon: CreditCard,
              label: "NIT (Identificación RUT)",
              value: "901.234.567-8",
            },
          ] */}

          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <img src={icoTrabajo} alt="Ico trabajo" className="w-5" />

            <p>Trabajo:</p>

            <div>
              <p className="text-sm font-medium text-slate-900">
                {dataRut.trabajo}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200">
            <img src={icorut} alt="Ico trabajo" className="w-5" />

            <p>NIT:</p>

            <div>
              <p className="text-sm font-medium text-slate-900">{nit}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div>
          <h3 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
            <img src={icoActivity} alt="Ico activity" className="w-5" />
            Responsabilidades Fiscales
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Impuesto de renta y complementario régimen ordinario</li>
            <li>Impuesto sobre las ventas – IVA</li>
            <li>Retención en la fuente a título de renta</li>
            <li>Informante de exógena</li>
          </ul>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div>
          <h3 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
            Actividad Económica Principal
          </h3>
          <p className="text-sm text-slate-600">
            6920 - Actividades de contabilidad, teneduría de libros, auditoría
            financiera y asesoría tributaria
          </p>
        </div>
      </div>
    </div>
  );
};

DeclaracionRenta.propTypes = {
  nit: PropTypes.number.isRequired,
};

export default DeclaracionRenta;
