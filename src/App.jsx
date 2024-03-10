import {Routes, Route} from "react-router-dom"
import { Home, Login, Register } from "./index"
import { AuthProvider } from './context/authContext'

const App = () => {

  return (
  
    <>

      <div className="bg-slate-300 h-screen text-black flex">

        <AuthProvider>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
          
        </AuthProvider>

      </div>

      
    </>
  
  )
}

export default App
