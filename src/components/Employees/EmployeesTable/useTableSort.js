import { useState } from "react";

const useTableSort = (employeesData) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderKey, setOrderKey] = useState("salary");

  const orderByDirection = (result) =>
    orderDirection === "asc" ? result * -1 : result;

  const sortSalary = (a, b) => b[orderKey] - a[orderKey];

  const sortRating = (a, b) => a[orderKey] - b[orderKey];

  const onColumnSort = (key) => (ev) => {
    const isAsc = orderKey === key && orderDirection === "asc";

    setOrderDirection(isAsc ? "desc" : "asc");
    setOrderKey(key);
  };

  const sortFunction = {
    salary: sortSalary,
    rating: sortRating,
  };

  const sortedEmployees = employeesData
    ? employeesData.sort((a, b) =>
        orderByDirection(sortFunction[orderKey](a, b))
      )
    : null;

  return [sortedEmployees, orderKey, orderDirection, onColumnSort];
};

export default useTableSort;
