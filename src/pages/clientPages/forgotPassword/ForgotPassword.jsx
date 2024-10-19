import { Box, Typography } from "@mui/material"
import LogoQuestioNet from "./img/image.png"
import LogoQuestioNet1 from "../../../../public/Frame 6.png"
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  return (
    <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )" ,width:"full", height:"900px",margin:"auto", padding:"20px"}}>
  <Box sx={{display:"flex", margin:"auto", alignItems:"center", gap:"25px",justifyContent:"center" }}>  
        <img style={{ width: "255px", textAlign: "center", marginTop: "50px" }} src={LogoQuestioNet1} alt="" />
      </Box> <br />
      <Box sx={{padding:{sm:"30px 70px", xs:"30px 20px"},}}>
      <Box sx={{backgroundColor:"#FFFFFF40", width:"65%", margin:"auto", textAlign:"center", padding:"20px", fontSize:"50px", borderRadius:"20px"}}> 
        <Typography sx={{ color: "#456789", fontSize:"35px", mb:"30px", fontFamily:"initial" }}>Forgot password</Typography> 
      <Typography sx={{fontSize:"22PX"}}>Write to our mail and provide your email 
or phone number:  <br /> <br />

        <Typography sx={{color:"#0073FF", mb:"20px", fontSize:"17px"}}>superior.prv@gmail.com</Typography></Typography>
        <hr style={{ width: "80%", height: "0.5px", backgroundColor: "#222222", color: "black", margin:"auto", mb:"40px" }}></hr> 
        <Link to={"/signup"} style={{
          color: "#0073FF", textDecoration: "none", '&:hover': {
            background: "#f00",
          }, fontSize:"22px"
        }}>Back to Sign up</Link>
    </Box> 
      </Box>
 </Box>
   )
}

export default ForgotPassword