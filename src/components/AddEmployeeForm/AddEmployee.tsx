import { Button, TextField } from "@mui/material";
import { Field, Form } from "react-final-form";
import "./AddEmployeeForm.css";

const AddEmployeeForm = (props: any) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({handleSubmit}) => {
        return (
          <form className="AddEmployeeForm" onSubmit={handleSubmit}>
            <Field
              name="name"
              render={({ input, meta }) => {
                return (
                  <TextField
                    type="text"
                    placeholder="Enter Employee Name"
                    {...input}
                  ></TextField>
                );
              }}
            ></Field>
            <Field
              name="email"
              render={({ input, meta }) => {
                return (
                  <TextField
                    type="text"
                    placeholder="Enter Employee Email"
                    {...input}
                  ></TextField>
                );
              }}
            ></Field>
            <Field
              name="doj"
              render={({ input, meta }) => {
                return (
                  <TextField
                    type="date"
                    placeholder="Enter Employee DOJ"
                    {...input}
                  ></TextField>
                );
              }}
            ></Field>
            <Field
              name="designation"
              render={({ input, meta }) => {
                return (
                  <TextField
                    type="text"
                    placeholder="Enter Employee Designation"
                    {...input}
                  ></TextField>
                );
              }}
            ></Field>
            <Field
              name="experience"
              render={({ input, meta }) => {
                return (
                  <TextField
                    type="number"
                    placeholder="Enter Employee Experience"
                    {...input}
                  ></TextField>
                );
              }}
            ></Field>
            <Button type="submit">Add Empployee</Button>
          </form>
        );
      }}
    ></Form>
  );
};

export default AddEmployeeForm;
