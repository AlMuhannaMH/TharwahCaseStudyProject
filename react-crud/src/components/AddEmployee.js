import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../actions/employees";

const AddEmployee = () => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    jobTitle: "",
    departmentId: null,
    managerId: null,
  };
  const [employee, setEmployee] = useState(initialEmployeeState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = () => {
    const { firstName, lastName, jobTitle, departmentId, managerId} = employee;

    dispatch(createEmployee(firstName, lastName, jobTitle, departmentId, managerId))
      .then(data => {
        setEmployee({
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          jobTitle: data.job_title,
          departmentId: data.department_id,
          managerId: data.manager_id,
        });
        setSubmitted(true);

        console.log(data);
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
        <button className="btn btn-success" onClick={newEmployee}>
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
          <label htmlFor="departmentId">Department ID</label>
          <input
            type="text"
            className="form-control"
            id="departmentId"
            required
            value={employee.departmentId}
            onChange={handleInputChange}
            name="departmentId"
          />
        </div>

        <div className="form-group">
          <label htmlFor="managerId">Manager ID</label>
          <input
            type="text"
            className="form-control"
            id="managerId"
            required
            value={employee.managerId}
            onChange={handleInputChange}
            name="managerId"
          />
        </div>

        <button onClick={saveEmployee} className="btn btn-success">
          Submit
        </button>
      </div>
    )}
  </div>
  );
};

export default AddEmployee;
