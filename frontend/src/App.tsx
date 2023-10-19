import { Route, Routes } from "react-router-dom";
import Navbar from "./features/common/Navbar";
import AuthenticationPage from "./features/auth";
import StudentsPage from "./features/students";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<AuthenticationPage />} path="/auth" />
        <Route element={<StudentsPage />} path="/students" />
      </Routes>
    </>
  );
}
