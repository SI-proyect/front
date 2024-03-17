import { Routes, Route } from "react-router-dom";
import { Home, Login, Register, DetailPerson, ProtectedRoute } from "./index";
import { AuthProvider } from "./context/authContext";
import { NaturalPeopleProvider } from "./context/NaturalPeopleContext";

const App = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen text-black flex flex-col items-center">
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <NaturalPeopleProvider>
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                </NaturalPeopleProvider>
              }
            />

            <Route
              path="/person/:id"
              element={
                <NaturalPeopleProvider>
                  <ProtectedRoute>
                    <DetailPerson />
                  </ProtectedRoute>
                </NaturalPeopleProvider>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
