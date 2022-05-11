import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  return (
    <>
      <div>
        {employees.map((employee) => {
          return <p key={`employee--${employee.id}`}>{employee.name}</p>;
        })}
      </div>
      <div>
        <button onChange={() => history.push("/employees/create")}>
          Join The Company
        </button>
      </div>
    </>
  );
};
