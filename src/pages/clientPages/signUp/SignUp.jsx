import { Box, Button, TextField, Typography } from "@mui/material"
import logo from "../../../../public/logo.svg"

const SignUp = () => {
  return <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )"}}>
    <Box>
        <img src={logo} alt="" />
        <Typography>QuestioNet</Typography>
    </Box>
    <Box>
        <Typography></Typography>
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <Button></Button>
    </Box>
  </Box>
}

export default SignUp