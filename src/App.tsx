import { Routes, Route } from "react-router-dom";
import EmployeesTable from "./components/Employees/EmployeesTable/EmployeesTable";
import HomePage from "./components/HomePage/HomePage";
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
            <EmployeesTable />
          </EmployeesProvider>
        }
      />
    </Routes>
  );
}
