export const getAllEmployees = async () => {
    const rawResult = await fetch("http://localhost:4444/employees");
    const employees = await rawResult.json();
    return employees;
}

