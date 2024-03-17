import { useNaturalPeople } from "../../context/NaturalPeopleContext";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";
import { MenuLeft, NavBar } from "./index";

const DetailPerson = () => {
  const { id } = useParams();
  const { naturalPeople } = useNaturalPeople();

  const { user, logout, loading } = useAuth();
  // console.log(naturalPeople);

  const handleLogout = () => logout();

  if (loading) return <div>Cargando...</div>;

  const person = naturalPeople[parseInt(id)];

  return (
    <div>
      <NavBar logout={handleLogout} />

      <div className="w-screen m-auto mt-5 px-4 text-black flex justify-between">
        <MenuLeft user={user} />

        <div>Detail Person {person.nombre}</div>
      </div>
    </div>
  );
};

export default DetailPerson;
