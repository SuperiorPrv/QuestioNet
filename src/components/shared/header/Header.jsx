import { Box, Typography } from "@mui/material"
import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"
import imgUser from "./img/image.png"

const Header = () => {
  const path=useLocation().pathname
  return (
   <>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"100%",margin:"auto", backgroundColor:"#FFFFFF33"}}>
  <Box><img src={Logo} alt="" /></Box>
  <Box sx={{display:"flex",gap:"40px"}}>
  <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
    <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none", color:"#FFFFFF33"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/"}>Question</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none", color:"#FFFFFF33"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Users</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none", color:"#FFFFFF33"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>About</Link>


    </Typography>

  </Box>
        <Box sx={{display:"flex", gap:"20px", alignItems:"center"}}>
<img style={{width:"60px"}} src={imgUser} alt="" />
<Typography sx={{fontSize:"25px"}}>UserName</Typography>
  </Box>

</Box>
   </>
  )
}

export default Header