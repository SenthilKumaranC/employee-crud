import { Button, Modal } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { addEmployee } from "../../features/employees/addEmployee.service";
import { IEmployee } from "../../features/employees/employee.reducer";
import { EmployeesContext } from "../../features/employees/employees.context";
import AddEmployeeForm from "./AddEmployee";
import "./AddEmployeeForm.css"

const AddEmployeeFormContainer = () => {

  const [open, setOpen] = useState<boolean>(false);

  const {dispatch} = useContext(EmployeesContext);

  const handleOpen = useCallback(()=>{
    setOpen(true);
  },[])
  const handleClose = useCallback(()=>{
    setOpen(false);
  },[])

  const addEmployeeHandler = useCallback(async (newEmployeeData:IEmployee)=>{
    handleClose();
    const newEmployeeFromServer = await addEmployee(newEmployeeData)
    dispatch({type:"ADD_EMPLOYEE",newEmployee:newEmployeeFromServer})
  },[dispatch, handleClose])
  return (
    <>
      <Button className="AddButton" variant="contained" color="warning" onClick={handleOpen}>Add Student</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="AddEmployeeFormContainer"
      >
        <AddEmployeeForm onSubmit={addEmployeeHandler}></AddEmployeeForm>
      </Modal>
    </>
  );
};

export default AddEmployeeFormContainer;
