// import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext";
import { useNaturalPeople } from "../../context/NaturalPeopleContext";

import { NavBar, ListPersons, MenuLeft } from "./index";

const Home = () => {
  // const authContext = useAuth()
  const { user, logout, loading } = useAuth();

  const { naturalPeople } = useNaturalPeople();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }

    // navigate('/login')
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-screen m-auto mt-5 px-10 text-black flex justify-between">
        <MenuLeft user={user} />

        <ListPersons naturalPeople={naturalPeople} />
      </div>
    </div>
  );
};

export default Home;
