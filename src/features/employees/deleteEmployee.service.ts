export const deleteEmployee = async (id:string) => {
    return await fetch(`http://localhost:4444/employees/${id}`,{method:"DELETE"});
}

