import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteEmployeeContainer from "../DeleteEmployee/DeleteEmployee.container";
import UpdateEmployeeFormContainer from "../UpdateEmployeeForm/UpdateEmployeeForm.container";



const EmployeeTable = (props: any) => {
  const { headers, rows , dispatch} = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header: string) => {
              return <TableCell key={header} align="center">{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.doj}</TableCell>
              <TableCell align="center">{row.designation}</TableCell>
              <TableCell align="center">{row.experience}</TableCell>
              <TableCell align="center">
                <DeleteEmployeeContainer id={row.id}></DeleteEmployeeContainer>
                <hr></hr>
                <UpdateEmployeeFormContainer id={row.id}></UpdateEmployeeFormContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
