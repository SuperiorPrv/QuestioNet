import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";

const Header = () => {
  const path=useLocation().pathname
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   <>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"80%",margin:"auto"}}>
  <Box><img src={Logo} alt="" /></Box>
  <Box sx={{display:{xs:"none",md:"flex"},gap:"10px"}}>
  <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
    <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Question</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Users</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>About</Link>


    </Typography>

  </Box>
  <Box sx={{display:{xs:"block",md:"none"}}}>
<Button

        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} sx={{display:{xs:"block",sm:"none"}}}>
<Box sx={{display:"flex",alignItems:"center",gap:"10px"}}>
    <Avatar/>
<Typography sx={{fontSize:"25px"}}>UserName</Typography>
</Box>
</MenuItem>
        <MenuItem onClick={handleClose}>
        
        <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Question</Link>

    </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Users</Link>

    </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>About</Link>


    </Typography>
        </MenuItem>

      </Menu>
</Box>
  <Box sx={{display:{xs:"none",sm:"flex"},alignItems:"center",gap:"10px"}}>
    <Avatar/>
<Typography sx={{fontSize:"25px"}}>UserName</Typography>
  </Box>

</Box>
   </>
  )
}

export default Header
