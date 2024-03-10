import {Routes, Route} from "react-router-dom"
import { Home, Login, Register } from "./index"

const App = () => {

  return (
  
    <>

      <div className="bg-slate-300 h-screen text-white flex">

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>

      </div>

      
    </>
  
  )
}

export default App
