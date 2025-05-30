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
import { NaturalPersonProvider } from "./context/NaturalPersonContext";
import { CalendarProvider } from "./context/CalendarContext";

const App = () => {
  return (
    <>
      <div className="pb-3 bg-slate-200 h-full text-black flex flex-col items-center">
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <NaturalPeopleProvider>
                  <CalendarProvider>
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  </CalendarProvider>
                </NaturalPeopleProvider>
              }
            />

            <Route
              path="/person/:cc"
              element={
                <PersonDetailProvider>
                  <NaturalPersonProvider>
                    <ProtectedRoute>
                      <DetailPerson />
                    </ProtectedRoute>
                  </NaturalPersonProvider>
                </PersonDetailProvider>
              }
            />

            <Route
              path="/addPerson"
              element={
                <NaturalPersonProvider>
                  <ProtectedRoute>
                    <FormNewPerson />
                  </ProtectedRoute>
                </NaturalPersonProvider>
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
