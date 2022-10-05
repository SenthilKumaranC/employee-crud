import { Button, Modal } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { addEmployee } from "../../features/employees/addEmployee.service";
import { IEmployee } from "../../features/employees/employee.reducer";
import { EmployeesContext } from "../../features/employees/employees.context";
import { updateEmployee } from "../../features/employees/updateEmployee.service";
import UpdatemployeeForm from "./UpdateEmployee";
import "./UpdateEmployeeForm.css";

const UpdateEmployeeFormContainer = (props: any) => {
  const { id } = props;

  const [employee, setEmployee] = useState<IEmployee>();

  const [open, setOpen] = useState<boolean>(false);

  const { dispatch, state } = useContext(EmployeesContext);

  const handleOpen = useCallback(() => {
    const employee = state.employees.find((employee) => employee.id === id);
    setEmployee(employee);
    setOpen(true);
  }, [id, state.employees]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const addEmployeeHandler = useCallback(
    async (newEmployeeData: IEmployee) => {
      handleClose();
      const newEmployeeFromServer = await updateEmployee({
        changes: newEmployeeData,
        id,
      });
      dispatch({ type: "UPDATE_EMPLOYEE", employee: newEmployeeFromServer });
    },
    [dispatch, handleClose, id]
  );

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="UpdateEmployeeFormContainer"
      >
        <UpdatemployeeForm
          employee={employee}
          onSubmit={addEmployeeHandler}
        ></UpdatemployeeForm>
      </Modal>
    </>
  );
};

export default UpdateEmployeeFormContainer;
