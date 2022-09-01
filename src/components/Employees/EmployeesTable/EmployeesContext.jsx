import { createContext, useContext, useState, useEffect } from "react";

const MAX = 100000;
const MIN = 5000;
const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const ratingEmployeeById = (employeeId, ratingValue) => {
    let employee = employees.filter((emp) => emp.id === employeeId)[0];
    if (employee) {
      employee.rating = ratingValue;
    }
    const restEmployees = employees.filter((emp) => emp.id !== employeeId);

    setEmployees([employee, ...restEmployees]);
  };
  const enrichEmployees = (employees) => {
    return employees.map((employee) => {
      const randomSalary = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
      return {
        ...employee,
        salary: randomSalary,
        avatarSrc: `https://avatars.dicebear.com/api/avataaars/${employee.id}.svg`,
        rating: 0,
      };
    });
  };

  const fetchEmployees = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();
      const updatedEmployees = enrichEmployees(response);

      setEmployees(updatedEmployees);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      console.log("#ERR: ", err.message);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        isError,
        isLoading,
        ratingEmployeeById,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeesContext);
};
