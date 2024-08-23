// import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useNaturalPeople } from "../../context/NaturalPeopleContext";

import { NavBar, ListPersons, MenuLeft } from "./index";

const Home = () => {
  // const authContext = useAuth()
  const { user, logout, loading } = useAuth();

  const { dataPeople, loadingPeople, error } = useNaturalPeople();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

    // navigate('/login')
  };

  if (loading) return <h1>Loading</h1>;

  if (loadingPeople) return <h1>Cargando clientes</h1>;

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-screen m-auto mt-5 px-10 text-black flex justify-between">
        <MenuLeft user={user} />

        {error ? (
          <h1>Hubo un error al traer los clientes</h1>
        ) : loadingPeople ? (
          <h1>Cargando clientes</h1>
        ) : (
          <ListPersons naturalPeople={dataPeople} />
        )}
      </div>
    </div>
  );
};

export default Home;
