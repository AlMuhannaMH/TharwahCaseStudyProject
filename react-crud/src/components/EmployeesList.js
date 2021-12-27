import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
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
    setCurrentIndex(-1);
  };

  const setActiveEmployee = (employee, index) => {
    setCurrentEmployee(employee);
    setCurrentIndex(index);
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
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by first name"
            value={searchFirstName}
            onChange={onChangeSearchFirstName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByFirstName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Employees List</h4>

        <ul className="list-group">
          {employees &&
            employees.map((employee, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEmployee(employee, index)}
                key={index}
              >
                {employee.firstName}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEmployees}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
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
              className="badge badge-warning"
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