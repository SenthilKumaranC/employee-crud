import { IEmployee } from "./employee.reducer";

export const addEmployee = async (newEmployee: IEmployee) => {
  const rawResult  = await fetch(`http://localhost:4444/employees`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee),
  });
  return await rawResult.json();
};
