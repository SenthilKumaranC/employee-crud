import { useCallback, useContext } from "react";
import { deleteEmployee } from "../../features/employees/deleteEmployee.service";
import { EmployeesContext } from "../../features/employees/employees.context";
import DeleteEmployee from "./DeleteEmployee"

export interface IDeleteEmployeeContainerProps{
    id:string
}

const DeleteEmployeeContainer = (props:IDeleteEmployeeContainerProps) => {

    const {id} = props;

    const {dispatch} = useContext(EmployeesContext);

    const deleteEmployeeHandler = useCallback(async ()=>{
        await deleteEmployee(id);
        dispatch({type:"DELETE_EMPLOYEE",id})
    },[dispatch, id])

    return <>
       <DeleteEmployee onClick={deleteEmployeeHandler}></DeleteEmployee>
    </>
}

export default DeleteEmployeeContainer;