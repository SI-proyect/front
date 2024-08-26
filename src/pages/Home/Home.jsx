// import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useNaturalPeople } from "../../context/NaturalPeopleContext";
import { NavBar, ListPersons, AlertsAllPeople } from "./index";
import "../../styles/loader.css";

const Home = () => {
  // const authContext = useAuth()
  const { logout, loading } = useAuth();
  // console.log(user);

  const { dataPeople, loadingPeople, error } = useNaturalPeople();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

    // navigate('/login')
  };

  if (loading || loadingPeople) return <div className="loader"></div>;

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-screen m-auto mt-10 px-10 text-black flex justify-between">
        {/* <MenuLeft user={user} /> */}

        {error ? (
          <h1 className="text-2xl font-semibold m-auto text-center">
            Hubo un error al traer los clientes..
          </h1>
        ) : (
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-evenly">
            <ListPersons naturalPeople={dataPeople} />
            <AlertsAllPeople />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
