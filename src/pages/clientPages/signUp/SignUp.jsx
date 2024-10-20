import { Box, Button, Typography } from "@mui/material"
import LogoQuestioNet from "./img/image.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const SignUp = () => {
  let Api="https://questionet-data-server.glitch.me/api/users"


  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [phone,setPhone]=useState("")
  let [password,setPassword]=useState("")
  async function dob() {
    let obj={
      id:Date.now(),
      username:name,
      email:email,
      phone:phone,
      password:password,
      ratings:0,
asks:0,
answers:0,
avatatar:"",
}
try {
  let r=await axios.post(Api,obj)

} catch (error) {
  console.error(error);
  
}
}

  return <Box sx={{ background:"linear-gradient(to right , #A2D2FF , #CDB4DB )" ,height:"800px", width:"full" ,margin:"auto", padding:"20px"}}>
    <Box sx={{display:"flex", margin:"auto", alignItems:"center", gap:"25px",justifyContent:"center" }}>
        <img style={{width:"255px" }} src={LogoQuestioNet} alt="" />
    </Box> <br /> 
    <Box sx={{margin:"auto", display:"flex", justifyContent:"center" }}>
      <Box sx={{backgroundColor:"#FFFFFF40", padding:{sm:"30px 70px", xs:"30px 40px"},  borderRadius:"20px",  textAlign:"center" }}>
        <Box sx={{mr:"10px"}}>
        <Typography sx={{color:"#456789", fontSize:'40px',textAlign:"center", fontFamily:"initial"}}>Sign up</Typography> <br />
      <input onChange={(ev)=>{setName(ev.target.value)}}   style={{padding:"9px 10px", width:"99% ", fontSize:"20px", border:"2px solid #123456",backgroundColor:"#FFFFFF33", borderRadius:"7px", color:"#222222"}} placeholder="Username:" /> <br /> <br />
        <input onChange={(ev)=>{setEmail(ev.target.value)}}  style={{padding:"9px 10px ", width:"99% ", fontSize:"20px", border:"2px solid #123456",backgroundColor:"#FFFFFF33", borderRadius:"7px", color:"#222222" }} placeholder="Email:" /><br /> <br />
        <input onChange={(ev)=>{setPhone(ev.target.value)}} style={{padding:"9px 10px ", width:"99% ", fontSize:"20px",border:"2px solid #123456", backgroundColor:"#FFFFFF33",borderRadius:"7px", color:"#222222"}} placeholder="Phone number:" /> <br /> <br />
        <input onChange={(ev)=>{setPassword(ev.target.value)}} style={{padding:"9px 10px ", width:"99% ", fontSize:"20px", border:"2px solid #123456",backgroundColor:"#FFFFFF33", borderRadius:"7px", color:"#222222"}} placeholder="Password:" /> <br /> <br />
        <Button onClick={dob} sx={{backgroundColor:"#5555FF", color:"white", padding:"9px 10px", width:"106% ", borderRadius:"15px",  fontSize:"22px",}}>Sign up</Button> <br /> <br />
        <hr style={{ width: "106%", height: "0.5px", backgroundColor: "#222222", color: "black" }}></hr>
        z
        <br />
        <Typography sx={{ color: "#456789" }}>Already has an account? <Link to={"/"} style={{color:"#0073FF", textDecoration:"none", '&:hover': {
      background: "#f00",
    } }}> Sign In </Link></Typography>
     </Box>
       </Box>
    </Box>
    <Box>
  
    </Box>
  </Box>
  }

  

export default SignUp