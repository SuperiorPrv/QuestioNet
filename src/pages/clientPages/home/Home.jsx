import { Avatar, Box, Button, Typography } from "@mui/material"
import imgQuestionAns from "./img/image.png"
import { useEffect, useState } from "react"
import axios from "axios"

const QuestionAPI = "https://questionet-data-server.glitch.me/api/asks"
const UsersAPI = "https://questionet-data-server.glitch.me/api/users"

const Home = () => {
  const [users, setUsers] = useState([]);
  const [question, setQuestion] = useState([]);

  async function Get(){
    try {
      const {data} = await axios.get(QuestionAPI);
      const {data:Data} = await axios.get(UsersAPI);
      setQuestion(data);
      setUsers(Data);

    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(()=>{Get()},[]);

  return (
  <Box sx={{background:"linear-gradient(to right , #A2D2FF , #CDB4DB )" ,padding:"20px 30px" }}>
        <Box sx={{ display: "flex", flexWrap:"wrap",  justifyContent:"space-around", alignItems:"center", margin:"auto", gap:"20px",  padding:"20px 20px", width:"95%", borderRadius:'20px', backgroundColor:"#000EFF1A"}} >
      <Box >
      <Typography sx={{color:"#4A2E7B", fontSize:"40px"}} >
      Discover new perspectives
      </Typography>
      <Typography sx={{color:"#112C4A", fontSize:"20px"}}>Here, every question is an opportunity to explore, learn, and  <br />
grow. Engage in discussions that push boundaries and <br />
deepen your understanding of the world around you.</Typography> <br />
      <Button sx={{backgroundColor:"#9478E9", color:"white", borderRadius:"10px", padding:"15px", fontSize:'17px' }}>Get started</Button>
        </Box>
        <Box sx={{display:{xs:"none",sm:"block"}}}>

        <img style={{width:"560px"}} src={imgQuestionAns} alt="" />
        </Box>
      </Box> <br />
      
        <Box sx={{ display: "flex", flexWrap:"wrap",  justifyContent:"space-around", alignItems:"center", margin:"auto", gap:"20px",  padding:"20px 20px", width:"95%", borderRadius:'20px', backgroundColor:"#11AA7740"}} >
      <Box >
      <Typography sx={{color:"#4A2E7B", fontSize:"40px"}} >
      What we offer
      </Typography>
      <Typography sx={{color:"#112C4A", fontSize:"20px"}}>Our platform provides dialogues where questions lead to discovery. Connect  <br />
      with others, explore ideas, and grow through meaningful discussions.</Typography> <br />
        </Box>
      <Button sx={{backgroundColor:"#11AA7799", color:"white", borderRadius:"10px", padding:"15px", fontSize:'17px' }}>Read more</Button>
    </Box>
    <Box>
      <Typography>Current questions</Typography>
      <Box>
        {question.toSorted((a,b)=>a.date-b.date).map((e,i)=>{
            if(i<3) {return <Box key={e.id}>
            <Box>
              <Box>
                <Avatar src={e.owner.avatar} alt="" />
                <Typography>{e.owner.username}</Typography>
                <Typography>{new Date(e.date).toLocaleString()}</Typography>
              </Box>
              <Box>
                <Typography>{e.votes}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>{e.title}</Typography>
              <Typography>{e.answers.length}</Typography>
            </Box>
          </Box>
          }})}
      </Box>
    </Box>
    <Box>
      <Typography></Typography>
      <Typography></Typography>
      {users.toSorted((a,b)=>a.rating-b.rating).map((e,i)=>{
        if(i<5) {return <Box key={e.id}>
          <Typography>{i+1}</Typography>
          <Avatar src={e.avatar}></Avatar>
          <Typography>{e.username} ({e.rating} votes)</Typography>
        </Box>}
      })}
    </Box>
  </Box>
  )
}

export default Home