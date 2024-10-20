import { Box, Button, Typography } from "@mui/material"

const Home = () => {
  return (``
  <Box sx={{background:"linear-gradient(to right , #A2D2FF , #CDB4DB )" ,padding:"20px 30px"}}>
        <Box sx={{ display: "flex", flexWrap:"wrap",  justifyContent:"space-around", margin:"auto", gap:"20px",  padding:"10px 20px", width:"95%", borderRadius:'20px', backgroundColor:"#000EFF1A"}} >
      <Box >
      <Typography sx={{color:"#4A2E7B", fontSize:"30px"}} >
      Ask whatever you want
      </Typography>
      <Typography sx={{color:"#112C4A"}}>Ask questions on any topic and get answers</Typography>
     </Box>
      <Button sx={{backgroundColor:"#9478E9", color:"white"}}>Ask question</Button>
    </Box>
  </Box>
  )
}

export default Home