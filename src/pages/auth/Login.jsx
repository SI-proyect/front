import { useState } from "react"
import { useAuth } from '../../context/authContext'
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: {name, value}}) => {
       
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {

            await login(user.email, user.password)
            navigate('/')

        } catch(error) {

            console.log(error.code);

            if (error.code === "auth/invalid-credential") {
                setError("El correo o la contraseña son invalidad")
            } else if (error.code === "auth/user-not-found") {
                setError("El usuario no existe o no ha sido registrado")
            } else if (error.code === "auth/wrong-password") {
                setError("La contraseña no es correcta")
            }


        }
    }

   return (
    <>

        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Ingresa tu email" 
                onChange={handleChange}
            />

            <label htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Ingresa una contraseña"
                onChange={handleChange}
            />

            <button>Login</button>
        </form>
    </>
   ) 
}

export default Login