import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
  
const Home = () => {

    // const authContext = useAuth()
    const {user, logout, loading} = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        // navigate('/login')
    }

    if (loading) return <h1>Loading</h1>

    return (
        <>
            <h1>Bienvenido {user.email}</h1>

            <button onClick={handleLogout}>Logout</button>
        </>
    )

}

export default Home;