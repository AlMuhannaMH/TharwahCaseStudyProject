import React, { useState } from "react";
import EmployeeDataService from "../services/EmployeeService";

const AddEmployee = () => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    jobTitle: "",
    managerID: null,
    departmentID: null,
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    var data = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      jobTitle: employee.jobTitle,
      managerID: employee.managerID,
      departmentID: employee.departmentID,
    };

    EmployeeDataService.create(data)
      .then(response => {
        setEmployee({
          id: response.data.id,
          firstName: response.data.first_name,
          last_name: response.data.last_name,
          jobTitle: response.data.job_title,
          managerID: response.data.manager,
          departmentID: response.data.department
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button onClick={newEmployee}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={employee.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={employee.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              required
              value={employee.jobTitle}
              onChange={handleInputChange}
              name="jobTitle"
            />
          </div>
          <div className="form-group">
            <label htmlFor="managerID">Manager ID</label>
            <input
              type="text"
              className="form-control"
              id="managerID"
              required
              value={employee.managerID}
              onChange={handleInputChange}
              name="managerID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departmentID">Department ID</label>
            <input
              type="text"
              className="form-control"
              id="departmentID"
              required
              value={employee.departmentID}
              onChange={handleInputChange}
              name="departmentID"
            />
          </div>
          <button onClick={saveEmployee}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddEmployee;