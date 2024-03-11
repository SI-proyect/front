// import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
  
const Home = () => {

    // const authContext = useAuth()
    const {user, logout, loading} = useAuth()
    // const navigate = useNavigate()

    const handleLogout = async () => {

        try{
            await logout()
        } catch(error) {
            console.error(error.message)
        }
        
        // navigate('/login')
    }

    if (loading) return <h1>Loading</h1>

    return (
        <div>
            <h1>Bienvenido {user.displayName || user.email}</h1>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Home;