import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/invalid-credential") {
        setError("El correo o la contraseña son invalidados");
      } else if (error.code === "auth/user-not-found") {
        setError("El usuario no existe o no ha sido registrado");
      } else if (error.code === "auth/wrong-password") {
        setError("La contraseña no es correcta");
      } else if (error.code === "invalid-email") {
        setError("Email invalido");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Ingresa un correo");

    try {
      await resetPassword(user.email);
      setError("Se ha enviado un enlace para recuperar la contraseña");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-fold mb-2"
            htmlFor="email"
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
            className="block text-gray-700 text-sm font-fold mb-2"
            htmlFor="password"
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

        <div className="flex items-center justify-between">
          <button className="bg-lime-500 hover:bg-lime-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>

          <a
            className="inline-block align-baseline font-bold text-sm text-lime-500 hover:text-lime-800"
            href="#!"
            onClick={handleResetPassword}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
      </p>

      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleSignIn}
      >
        Google Login
      </button>
    </div>
  );
};

export default Login;
