import React, { useState, useEffect } from "react";
import EmployeeDataService from "../services/EmployeeService";

const Employee = props => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    jobTitle: "",
    managerID: null,
    departmentID: null,
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [message, setMessage] = useState("");

  const getEmployee = id => {
    EmployeeDataService.get(id)
      .then(response => {
        setCurrentEmployee(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentEmployee.id,
      published: status,
      firstName: currentEmployee.firstName,
      lastName: currentEmployee.lastName,
      jobTitle: currentEmployee.jobTitle,
      managerID: currentEmployee.managerID,
      departmentID: currentEmployee.departmentID,
    };

    EmployeeDataService.update(currentEmployee.id, data)
      .then(response => {
        setCurrentEmployee({ ...currentEmployee, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateEmployee = () => {
    EmployeeDataService.update(currentEmployee.id, currentEmployee)
      .then(response => {
        console.log(response.data);
        setMessage("The employee was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteEmployee = () => {
    EmployeeDataService.remove(currentEmployee.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/employees");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentEmployee ? (
        <div className="edit-form">
          <h4>Employee</h4>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={currentEmployee.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={currentEmployee.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={currentEmployee.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                value={currentEmployee.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="managerID">Manager ID</label>
              <input
                type="text"
                className="form-control"
                id="managerID"
                name="managerID"
                value={currentEmployee.managerID}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="departmentID">Department ID</label>
              <input
                type="text"
                className="form-control"
                id="departmentID"
                name="departmentID"
                value={currentEmployee.departmentID}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentEmployee.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentEmployee.published ? (
            <button
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button  onClick={deleteEmployee}>
            Delete
          </button>

          <button
            type="submit"
            onClick={updateEmployee}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Employee...</p>
        </div>
      )}
    </div>
  );
};

export default Employee;