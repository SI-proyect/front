// import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useNaturalPeople } from "../../context/NaturalPeopleContext";
import { NavBar, ListPersons, AlertsAllPeople } from "./index";
import "../../styles/loader.css";

const Home = () => {
  // const authContext = useAuth()
  const { loading } = useAuth();
  // console.log(user);

  const { dataPeople, loadingPeople, error } = useNaturalPeople();

  if (loading || loadingPeople) return <div className="loader"></div>;

  return (
    <div className="w-full pb-3">
      <NavBar />

      <div className="w-full mt-10 text-black flex justify-between">
        {/* <MenuLeft user={user} /> */}

        {error ? (
          <h1 className="text-2xl font-semibold text-center">
            Hubo un error al traer los clientes..
          </h1>
        ) : (
          <div className="w-full flex flex-col md:flex-row md:gap-0 justify-center md:justify-evenly">
            <ListPersons naturalPeople={dataPeople} />
            <AlertsAllPeople />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
