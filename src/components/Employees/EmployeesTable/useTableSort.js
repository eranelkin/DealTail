import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useTableSort = (employeesData, initKey, initDirection) => {
  const [orderDirection, setOrderDirection] = useState(initDirection);
  const [orderKey, setOrderKey] = useState(initKey);
  const [search, setSearch] = useSearchParams();

  const orderByDirection = (result) =>
    orderDirection === "asc" ? result * -1 : result;

  const sortSalary = (a, b) => b[orderKey] - a[orderKey];

  const sortRating = (a, b) => a[orderKey] - b[orderKey];

  const onColumnSort = (key) => (ev) => {
    const isAsc = orderKey === key && orderDirection === "asc";
    const order = isAsc ? "desc" : "asc";
    setSearch({
      sort_by: key,
      sort_order: order,
    });
    setOrderDirection(order);
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
