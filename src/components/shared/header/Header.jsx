import { Box } from "@mui/material"
import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"


const Header = () => {
  const path=useLocation().pathname
  return (
   <>
<Box>
  <Box><img src={Logo} alt="" /></Box>
  <Box>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>
    <Link></Link>
    <Link></Link>
    <Link></Link>

  </Box>
  <Box></Box>

</Box>
   </>
  )
}

export default Header