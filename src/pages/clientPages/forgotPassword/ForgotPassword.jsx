import { Box, Typography } from "@mui/material"
import LogoQuestioNet from "./img/image.png"

const ForgotPassword = () => {
  return (
    <Box>
 <img src={LogoQuestioNet} alt="" />
      <Typography>Forgot password</Typography>
      <Typography>Write to our mail and provide your email 
or phone number:  <br /> <br />

        <Typography>superior.prv@gmail.com</Typography></Typography>
        <hr style={{ width: "106%", height: "0.5px", backgroundColor: "#222222", color: "black" }}></hr> <br />
      <Typography sx={{}}>Back to Sign up</Typography>
 </Box>
   )
}

export default ForgotPassword