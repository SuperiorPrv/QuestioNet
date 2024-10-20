import { Box, Typography } from "@mui/material"
import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"
import imgTG from "./img/image.png"
import imgMAIl from "./img/image copy.png"
import imgFACEBOOK from "./img/image copy 2.png"



const Footer = () => {
  const path=useLocation().pathname
  

  return (
    <Box sx={{background:"#123456CC", padding:"20px 20px"}}>
      <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", alignItems:"center", gap:"50px"}}>
        <img src={Logo} alt="" />
        <Box sx={{display:"flex",gap:"40px"}}>
  <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none" , color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
    <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/question"}>Question</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none",  color:"white"}} to={"/dashboard/users"}>Users</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/about"?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/about"}>About</Link>


    </Typography>

        </Box>
        <Box sx={{color:"white"}}>
          <Typography>Contact us</Typography>
          <Typography>superior.prv@gmail.com</Typography>
        </Box>
      </Box> <br /> <br />
      <hr style={{ width: "80%", backgroundColor: 'white', height: "1px", margin:"auto" }} /> 
      <br />
      <Box sx={{display:"flex", flexWrap:"wrap", gap:"30px",  alignItems:"center",  justifyContent:"space-between"}}>
        <Typography sx={{ color: "white" }}>QuestioNet@2024. All rights reserved</Typography>
        <Box sx={{display:"flex", flexWrap:"wrap", gap:"50px", alignItems:"center"}}>
          <a href="https://web.telegram.org/k/"><img style={{width:"50px"}} src={imgTG} alt="" /></a>
         <a href="https://www.google.com/intl/ru/gmail/about/"><img style={{width:"50px"}} src={imgMAIl} alt="" /></a>
         <a href=" https://www.facebook.com/?locale=ru_RU"><img style={{width:"50px"}} src={imgFACEBOOK} alt="" /></a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer