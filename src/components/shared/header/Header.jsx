import Logo from "../../../../public/Frame 6.png"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import axios from "axios";

const UsersAPI = "https://questionet-data-server.glitch.me/api/users";

const Header = () => {
  const path=useLocation().pathname
  const [anchorEl, setAnchorEl] = useState(null);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const open = Boolean(anchorEl);

  async function GetUser() {
    try {
      const {data} = await axios.get(UsersAPI);
      data.forEach(e=>{
        if(e.id==localStorage.getItem("userID")){
          setUsername(e.username);
          setAvatar(e.avatar);
        }
      })
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(()=>{GetUser()},[]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   <>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",width:"100%",margin:"auto",background:"linear-gradient(to right , #A2D2FF , #CDB4DB )"}}>
  <Box><img src={Logo} alt="" /></Box>
  <Box sx={{display:{xs:"none",md:"flex"},gap:"10px"}}>
  <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
    <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/question"}>Question</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/users"}>Users</Link>

    </Typography>
    <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/about"}>About</Link>


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
    <Avatar src={avatar}/>
<Typography sx={{fontSize:"25px"}}>{username}</Typography>
</Box>
</MenuItem>
        <MenuItem onClick={handleClose}>
        
        <Typography>
    <Link style={path=="/dashboard/home"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/home"}>Home</Link>

  </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/question"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/question"} >Question</Link>

    </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/users"?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/users"}>Users</Link>

    </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Typography>
    <Link style={path=="/dashboard/about  "?{fontWeight:"900",textDecoration:"none"}:{fontWeight:"500",textDecoration:"none"}} to={"/dashboard/about"}>About</Link>


    </Typography>
        </MenuItem>

      </Menu>
</Box>
  <Box sx={{display:{xs:"none",sm:"flex"},alignItems:"center",gap:"10px"}}>
    <Avatar src={avatar}/>
<Typography sx={{fontSize:"25px"}}>{username}</Typography>
  </Box>

</Box>
   </>
  )
}

export default Header
