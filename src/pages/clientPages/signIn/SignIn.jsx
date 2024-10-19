import { Box, Button, Typography } from "@mui/material"
import logo from "../../../../public/Frame 6.png"
import logo2 from "../../../../public/Frame 5.png"
import { Link } from "react-router-dom"
const SignIn = () => {
  return (
    <>
    <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )",maxWidth:"1920px",m:"auto",height:"900px"}}>
     <Box>
<img style={{width:"326px",height:"64px",marginTop:"40px",marginLeft:"150px"}}  src={logo} alt="" />


     </Box > 
     <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"1200px",margin:"auto"}}>
<Box>
  <Box sx={{width:"450px",borderRadius:"40px",backgroundColor:"#FFFFFF40",marginTop:"50px",p:"50px"}}>
    <Typography className="sarpanch-regular" sx={{fontFamily:"'Roboto Serif'",textAlign:"center",fontSize:"50px",color:"#456789",mb:"30px"}}>Sign In</Typography>
    <input type="text" placeholder="Username, email or phone number:" style={{width:"425px",padding:"0px 15px",backgroundColor:"#FFFFFF33",height:"70px",borderRadius:"15px",fontSize:"26px",border:"2px solid black"}} />
    <input type="text" placeholder="Password" style={{width:"425px",padding:"0px 15px",backgroundColor:"#FFFFFF33",height:"70px",borderRadius:"15px",fontSize:"26px",marginTop:"19px",border:"2px solid black"}} />


    <Button sx={{color:"white",backgroundColor:"#5555FF",borderRadius:"20px",width:"450px",marginTop:"30px",fontSize:"25px",paddingY:"16px"}}>Sign In</Button>
   <Typography><Link style={{textDecoration:"none",display:"block",textAlign:"center",fontSize:"24px",color:"#0073FF",marginTop:"29px",fontFamily:""}}>Forgot password?</Link></Typography> 
    <hr style={{borderBottom:"1px solid black",marginTop:"32px"}} />
    <Typography sx={{textAlign:"center",fontSize:"26px",color:"rgba(69, 103, 137, 1)",marginTop:"45px"}}>Hasn’t any account?  <Link to="/signup" style={{textDecoration:"none",color:"#0073FF"}}>Sign Up</Link></Typography>
  </Box>
</Box>
<Box>
  <Typography sx={{fontSize:"72px",fontFamily:"'Sarpanch'",fontWeight:"500",color:"rgba(0, 0, 0, 1)",}}> Welcome to <span style={{display:"block",color:"rgba(139, 0, 255, 1)"}}>QuestioNet</span></Typography>
  <img src={logo2} style={{marginTop:"40px"}} alt="" />
</Box>
      </Box> 
    </Box>
    </>
  )
}

export default SignIn