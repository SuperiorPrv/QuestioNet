import { Box, Button, Typography } from "@mui/material"
import logo from "../../../../public/Frame 6.png"
import logo2 from "../../../../public/Frame 5.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const API = "https://questionet-data-server.glitch.me/api/users";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function Login(){
    try {
      const { data } = await axios.get(API);
      data.forEach(e => {
        console.log(e.username);
        if((e.username == login || e.email == login || e.phonenumber == login) && e.password == password){
          localStorage.setItem("userID",e.id);
          navigate("/dashboard/home");
        }
      });
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <>
    <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )",m:"auto",height:{xs:"1600px",lg:"900px"}}}>
     <Box sx={{maxWidth:"1440px",m:"auto"}}>
<img style={{width:"326px",height:"64px",marginTop:"40px",marginLeft:"150px"}}  src={logo} alt="" />


     </Box > 
     <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"80%",margin:"auto",flexDirection:{xs:"column",lg:"row"}}}>
<Box>
  <Box sx={{width:"450px",borderRadius:"40px",backgroundColor:"#FFFFFF40",marginTop:"50px",p:"50px"}}>
    <Typography className="sarpanch-regular" sx={{fontFamily:"'Roboto Serif'",textAlign:"center",fontSize:"50px",color:"#456789",mb:"30px"}}>Sign in</Typography>
    <input value={login} onChange={(e)=>setLogin(e.target.value)} type="text" placeholder="Username, email or phone number:" style={{width:"425px",padding:"0px 15px",backgroundColor:"#FFFFFF33",height:"70px",borderRadius:"15px",fontSize:"26px",border:"2px solid black"}} />
    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" style={{width:"425px",padding:"0px 15px",backgroundColor:"#FFFFFF33",height:"70px",borderRadius:"15px",fontSize:"26px",marginTop:"19px",border:"2px solid black"}} />

    <Button onClick={()=>Login()} sx={{color:"white",backgroundColor:"#5555FF",borderRadius:"20px",width:"450px",marginTop:"30px",fontSize:"25px",paddingY:"16px"}}>Sign In</Button>

   <Typography><Link to="/forgotpassword" style={{textDecoration:"none",display:"block",textAlign:"center",fontSize:"24px",color:"#0073FF",marginTop:"29px",fontFamily:""}}>Forgot password?</Link></Typography> 
    <hr style={{borderBottom:"1px solid black",marginTop:"32px"}} />
    <Typography sx={{textAlign:"center",fontSize:"26px",color:"rgba(69, 103, 137, 1)",marginTop:"45px"}}>Hasn’t any account?  <Link to="/signup" style={{textDecoration:"none",color:"#0073FF"}}>Sign Up</Link></Typography>
  </Box>
</Box>
<Box>
  <Typography className="animate__animated animate__bounce" sx={{fontSize:"72px",fontFamily:"'Sarpanch'",fontWeight:"500",color:"rgba(0, 0, 0, 1)",}}> Welcome to <span style={{display:"block",color:"rgba(139, 0, 255, 1)"}}>QuestioNet</span></Typography>
  <img src={logo2} style={{marginTop:"40px"}} alt="" />
</Box>
      </Box> 
    </Box>
    </>
  )
}

export default SignIn