import { Box, Typography } from "@mui/material"
import LogoQuestioNet from "./img/image.png"
import LogoQuestioNet1 from "../../../../public/Frame 6.png"

const ForgotPassword = () => {
  return (
    <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )" ,height:"100vh", maxWidth:"1920px" ,margin:"auto", padding:"20px"}}>
    
 <img style={{width:"255px", textAlign:"center",  }} src={LogoQuestioNet1} alt="" />
      <Box sx={{backgroundColor:"#FFFFFF40", width:"60%", margin:"auto"}}> 
      <Typography>Forgot password</Typography>
      <Typography>Write to our mail and provide your email 
or phone number:  <br /> <br />

        <Typography>superior.prv@gmail.com</Typography></Typography>
        <hr style={{ width: "106%", height: "0.5px", backgroundColor: "#222222", color: "black" }}></hr> <br />
      <Typography sx={{}}>Back to Sign up</Typography>
    </Box>
 </Box>
   )
}

export default ForgotPassword