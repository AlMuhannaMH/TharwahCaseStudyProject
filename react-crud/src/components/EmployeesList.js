import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [searchFirstName, setSearchFirstName] = useState("");

  useEffect(() => {
    retrieveEmployees();
  }, []);

  const onChangeSearchFirstName = e => {
    const searchFirstName = e.target.value;
    setSearchFirstName(searchFirstName);
  };

  const retrieveEmployees = () => {
    EmployeeDataService.getAll()
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEmployees();
    setCurrentEmployee(null);
  };

  const removeAllEmployees = () => {
    EmployeeDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByFirstName = () => {
    EmployeeDataService.findByFirstName(searchFirstName)
      .then(response => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div >
      <div >
        <div >
          <input
            type="text"
            className="form-control"
            placeholder="Search by first name"
            value={searchFirstName}
            onChange={onChangeSearchFirstName}
          />
          <div >
            <button

              type="button"
              onClick={findByFirstName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div >
        <h4>Employees List</h4>

        <ul >
          {employees &&
            employees.map((employee, index) => (
              <li
                key={index}
              >
                {employee.firstName}
              </li>
            ))}
        </ul>

        <button
          onClick={removeAllEmployees}
        >
          Remove All
        </button>
      </div>
      <div >
        {currentEmployee ? (
          <div>
            <h4>Employee</h4>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentEmployee.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentEmployee.LastName}
            </div>
            <Link
              to={"/employees/" + currentEmployee.id}
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Employee...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesList;