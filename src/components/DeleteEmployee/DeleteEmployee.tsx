import { Button } from "@mui/material"

const DeleteEmployee = (props:any) => {
    const {onClick,disabled} = props;
    return <>
        <Button color="error" variant="contained" onClick={onClick} disabled={disabled}>Delete</Button>
    </>
}

export default DeleteEmployee;