import { useReducer } from "react";
import { useDebugValue } from "react";

export interface IEmployee {
  id?: string;
  name: string;
  email: string;
  doj: string;
  designation: string;
  experience: number;
}

export interface IEmployees {
  employees: IEmployee[];
  companyName: string;
}

export const initialData: IEmployees = {
  employees: [],
  companyName: "CTS",
};

const cloneEmployees = (state: IEmployees) => {
  return { ...state, employees: [...state.employees] };
};

const reducers = (state: IEmployees, action: any) => {
  const newState = cloneEmployees(state);
  let employeeIndex;
  switch (action.type) {
    case "SET_EMPLOYEES":
      newState.employees = action.employees;
      return newState;
    case "ADD_EMPLOYEE":
      newState.employees.push(action.newEmployee);
      return newState;
    case "DELETE_EMPLOYEE":
      employeeIndex = newState.employees.findIndex(
        (employee) => employee.id === action.id
      );
      newState.employees.splice(employeeIndex, 1);
      return newState;
    case "UPDATE_EMPLOYEE":
      employeeIndex = newState.employees.findIndex(
        (employee) => employee.id === action.employee.id
      );
      newState.employees[employeeIndex] = action.employee;
      return newState;
  }
  return state;
};

//Create custom hook
const useEmployees = () => {
  return useReducer(reducers, initialData);
};

export default useEmployees;
