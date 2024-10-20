import { Box, Typography } from "@mui/material"
import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"

const Footer = () => {
  const path=useLocation().pathname

  return (
    <Box sx={{background:"#123456CC"}}>
      <Box>
        <img src={Logo} alt="" />
        <Box sx={{display:"flex",gap:"40px"}}>
  <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none" , color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
    <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/"}>Question</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none",  color:"white"}} to={"/dashboard/home"}>Users</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none", color:"white"}:{fontWeight:"500",textDecoration:"none" ,  color:"white"}} to={"/dashboard/home"}>About</Link>


    </Typography>

  </Box>
      </Box>
    </Box>
  )
}

export default Footer