import { useCallback, useEffect, useState } from "react";
import useEmployees, {
  IEmployee,
} from "../../features/employees/employee.reducer";
import { EmployeesContext } from "../../features/employees/employees.context";
import { getAllEmployees } from "../../features/employees/getAllEmployees.service";
import AddEmployeeFormContainer from "../AddEmployeeForm/AddEmployeeForm.container";
import EmployeeTable from "./EmployeeTable";

const EmployeeTableContainer = () => {
  const [state, dispatch] = useEmployees();

  const { employees, companyName } = state;

  const headers = [
    "Name",
    "Email",
    "DOJ",
    "Designation",
    "Experience",
    "Actions",
  ];

  const getAllEmployeesHandler = useCallback(async () => {
    //Calling the API throught getAllEmployees Service
    const employees = await getAllEmployees();
    //to save the data in useReducer
    dispatch({ type: "SET_EMPLOYEES", employees });
  }, [dispatch]);

  useEffect(() => {
    getAllEmployeesHandler();
  }, [getAllEmployeesHandler]);

  return (
    <>
      <EmployeesContext.Provider value={{ state, dispatch }}>
        <EmployeeTable headers={headers} rows={employees}></EmployeeTable>
      </EmployeesContext.Provider>
    </>
  );
};

export default EmployeeTableContainer;
