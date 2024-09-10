import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/Alert";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { signup, setIsLogged } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(user.email, user.password);
      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/invalid-email") {
        setError("El correo propocionado es invalido");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener más de 6 caracteres");
      } else if (error.code == "auth/email-already-in-use") {
        setError(
          "El correo ya ha sido utilizado para crear una cuenta anteriormente"
        );
      }
    }
  };

  return (
    <div className="w-full mt-20 max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-fold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-fold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingresa una contraseña"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="bg-lime-500 hover:bg-lime-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
      </p>
    </div>
  );
};

export default Register;
