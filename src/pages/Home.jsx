import { useAuth } from "../context/authContext"
  
const Home = () => {

    // const authContext = useAuth()
    const {user} = useAuth()

    console.log(user);

    return (
        <>
            <h1>Home</h1>
        </>
    )

}

export default Home;