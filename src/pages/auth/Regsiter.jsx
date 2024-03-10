import { useState } from "react"
import { useAuth } from '../../context/authContext'
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState()

    const { signup } = useAuth()
    const navigate = useNavigate()

    const handleChange = ({ target: {name, value}}) => {
       
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {

            await signup(user.email, user.password)
            navigate('/')

        } catch(error) {

            console.log(error.code);

            if (error.code === "auth/invalid-email") {
                setError("El correo propocionado es invalido")
            } else if ( error.code === "auth/weak-password") {
                setError("La contraseña debe contener más de 6 caracteres")
            } else if (error.code == "auth/email-already-in-use") {
                setError("El correo ya ha sido utilizado para crear una cuenta anteriormente")
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

            <button>Register</button>
        </form>
    </>
   ) 
}

export default Register