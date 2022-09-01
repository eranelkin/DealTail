import { Routes, Route } from "react-router-dom";
import EmployeesContainer from "./components/Employees/EmployeesContainer/EmployeesContainer";
import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { EmployeesProvider } from "./components/Employees/EmployeesTable/EmployeesContext";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/employees"
        element={
          <EmployeesProvider>
            <EmployeesContainer />
          </EmployeesProvider>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
