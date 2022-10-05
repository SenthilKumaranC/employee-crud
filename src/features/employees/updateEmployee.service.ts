export const updateEmployee = async ({id,changes}:any) => {
  const rawResult  = await fetch(`http://localhost:4444/employees`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id,changes}),
  });
  return await rawResult.json();
};
