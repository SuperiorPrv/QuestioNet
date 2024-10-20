import { Avatar, Box, Button, Typography } from "@mui/material"
import imgQuestionAns from "./img/image.png"
import { useEffect, useState } from "react"
import axios from "axios"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const QuestionAPI = "https://questionet-data-server.glitch.me/api/questions"
const UsersAPI = "https://questionet-data-server.glitch.me/api/users"

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);



  const [users, setUsers] = useState([]);
  const [question, setQuestion] = useState([]);

  let navigate = useNavigate();

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
        <Box data-aos="fade-right" sx={{ display: "flex", flexWrap:"wrap",  justifyContent:"space-around", alignItems:"center", margin:"auto", gap:"20px",  padding:"20px 20px", width:"95%", borderRadius:'20px', backgroundColor:"#000EFF1A"}} >
      <Box >
      <Typography sx={{color:"#4A2E7B", fontSize:"40px", fontWeight:"700"}} >
      Discover new perspectives
      </Typography>
      <Typography sx={{color:"#112C4A", fontSize:"20px"}}>Here, every question is an opportunity to explore, learn, and  <br />
grow. Engage in discussions that push boundaries and <br />
deepen your understanding of the world around you.</Typography> <br />
      <Button onClick={()=>navigate("/dashboard/question")} sx={{backgroundColor:"#9478E9", color:"white", borderRadius:"10px", padding:"15px", fontSize:'17px' }}>Get started</Button>
        </Box>
        <Box sx={{display:{xs:"none",sm:"block"}}}>
        <img style={{width:"560px",borderRadius:"50px"}} src={imgQuestionAns} alt="" />
        </Box>
      </Box> <br />
      
        <Box data-aos="fade-left" sx={{ display: "flex", flexWrap:"wrap",  justifyContent:"space-around", alignItems:"center", margin:"auto", gap:"20px",  padding:"20px 20px", width:"95%", borderRadius:'20px', backgroundColor:"#11AA7740"}} >
      <Box >
      <Typography sx={{color:"#4A2E7B", fontSize:"40px", fontWeight:"700"}} >
      What we offer
      </Typography>
      <Typography sx={{color:"#112C4A", fontSize:"20px"}}>Our platform provides dialogues where questions lead to discovery. Connect  <br />
      with others, explore ideas, and grow through meaningful discussions.</Typography> <br />
        </Box>
      <Button onClick={()=>navigate("/dashboard/about")} sx={{backgroundColor:"#11AA7799", color:"white", borderRadius:"10px", padding:"15px", fontSize:'17px' }}>Read more</Button>
    </Box> <br /><br />
    <Box sx={{backgroundColor:"#7A278A33", padding:"30px", borderRadius:"20px", width:'94%',ml:"13px" }}>
      <Typography sx={{color:'#6A22CD', fontSize:'40px',  fontWeight:"700"}}>Current questions</Typography>
      <Box sx={{margin:"auto", justifyContent:"center", display:"block", padding:"20px" }}>
        {question.toSorted((a,b)=>b.date-a.date).map((e,i)=>{
            if(i<3) {return <><Box data-aos="fade-right" data-aos-duration={`${i+1}000`} sx={{width:"98%", backgroundColor:"white",  gap:"20px", borderRadius:"20px", padding:'20px', fontSize:"23px"}} key={e.id}>
            <Box sx={{display:"flex", flexWrap:'wrap', justifyContent:"space-between", alignItems:"center" }}>
              <Box sx={{ backgroundColor:"white", display:"flex" ,alignItems:"center", flexWrap:'wrap', gap:"20px"}} >
                <Typography sx={{color:"green", fontWeight:"700"}}>{new Date(e.date).toLocaleString()}</Typography>
              </Box>
              <Box>
                <Typography sx={{color:'red', fontWeight:"800"}}>{e.votes} votes</Typography>
              </Box>
            </Box> <br />            <Box sx={{display:"flex", flexWrap:'wrap', justifyContent:'space-between' }}>
              <Typography sx={{color:'grey', fontWeight:"800"}} >{e.title}</Typography>
              <Typography sx={{color:"green", fontWeight:"800"}}>{e.answers.length} answers</Typography>
              </Box> 
            </Box>              <br /></>
          }})}
      </Box>
    </Box> <br /><br /><br />
    <Box sx={{border:"2px solid black", width:"35%", margin:"auto", padding:"30px", borderRadius:'20px', boxShadow:"0px 0px 15px white"}}>
      <Typography sx={{color:"#0C145C" , textAlign:"center", fontSize:"40px"}}>Most ranked peoples</Typography>
      <Typography sx={{color:"#0C145C" , textAlign:"center", fontSize:"20px"}}>List of the best people who help solve problems</Typography> <br /><br />
      {users.toSorted((a,b)=>b.rating-a.rating).map((e,i)=>{
        if(i<5) {return <> <Box data-aos="zoom-in-right"   data-aos-duration={`1${i+1}00`}  sx={{display:"flex", gap:"20px", alignItems:"center",  fontSize:"19px"}} key={e.id}>
          <Typography sx={{fontSize:"19px"}}>{i+1}</Typography>
          <Avatar src={e.avatar}></Avatar>
          <Typography sx={{fontSize:"19px", fontWeight:"600"}}>{e.username} ({e.rating} points)</Typography>
        </Box> <br/> <br />
        </>}
      })}
    </Box>
  </Box>
  )
}

export default Home