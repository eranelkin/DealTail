import React from "react";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import Button from "@mui/material/Button";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useEmployees } from "../EmployeesTable/EmployeesContext";
import "./employeesContainer.scss";

const EmployeesContainer = () => {
  const [storedValue, setValue, clearStorage] = useLocalStorage("dealtail");
  const { employees } = useEmployees();

  const handlerOnClick = (action) => (ev) => {
    if (action === "save" && employees.length > 0) {
      setValue(employees);
    }
    if (action === "clear") {
      clearStorage();
    }
  };

  return (
    <div className="employees-container">
      <EmployeesTable />
      <div className="action-buttons">
        <Button
          variant="contained"
          onClick={handlerOnClick("save")}
          style={{ marginRight: 20 }}
        >
          Save
        </Button>
        <Button variant="contained" onClick={handlerOnClick("clear")}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default EmployeesContainer;
