import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  DetailPerson,
  FormNewPerson,
  ProtectedRoute,
} from "./index";
import { AuthProvider } from "./context/authContext";
import { NaturalPeopleProvider } from "./context/NaturalPeopleContext";
import { PersonDetailProvider } from "./context/PersonDetailContext";

const App = () => {
  return (
    <>
      <div className="pb-3 bg-slate-200 h-screen text-black flex flex-col items-center">
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
              path="/person/:cc"
              element={
                <PersonDetailProvider>
                  <ProtectedRoute>
                    <DetailPerson />
                  </ProtectedRoute>
                </PersonDetailProvider>
              }
            />

            <Route
              path="/addPerson"
              element={
                <NaturalPeopleProvider>
                  <ProtectedRoute>
                    <FormNewPerson />
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
