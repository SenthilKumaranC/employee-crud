import React from "react";
import { initialData } from "./employee.reducer";

export const EmployeesContext = React.createContext({
    state:initialData,
    dispatch: (data:any) => {}
})

