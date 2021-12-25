import {
  CREATE_EMPLOYEE,
  RETRIEVE_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETE_ALL_EMPLOYEES,
} from "./types";

import EmployeeDataService from "../services/EmployeeService";

export const createEmployee = (first_name, last_name, job_title, department_id, manager_id) => async (dispatch) => {
  try {
    const res = await EmployeeDataService.create({ first_name, last_name, job_title, department_id, manager_id });

    dispatch({
      type: CREATE_EMPLOYEE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveEmployees = () => async (dispatch) => {
  try {
    const res = await EmployeeDataService.getAll();

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateEmployee = (id, data) => async (dispatch) => {
  try {
    const res = await EmployeeDataService.update(id, data);

    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await EmployeeDataService.remove(id);

    dispatch({
      type: DELETE_EMPLOYEE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllEmployees = () => async (dispatch) => {
  try {
    const res = await EmployeeDataService.removeAll();

    dispatch({
      type: DELETE_ALL_EMPLOYEES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findEmployeesByFirstName = (first_name) => async (dispatch) => {
  try {
    const res = await EmployeeDataService.findByFirstName(first_name);

    dispatch({
      type: RETRIEVE_EMPLOYEES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
