import { Box, Typography, Button, Avatar } from "@mui/material";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgAbout from "../../../../public/Frame 5.png"; 
import { Link, useNavigate } from "react-router-dom";

const About = () => {

  let navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      once: false,  
    });
  }, []);

  return (
    <Box sx={{ background: "linear-gradient(to right, #A2D2FF, #CDB4DB)", padding: "60px" }}>
      <Box data-aos="fade-up" sx={{ textAlign: "center", marginBottom: "60px" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "54px", fontWeight: "800" }}>
          About Our Platform
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "24px", marginTop: "15px", lineHeight: "1.6" }}>
          Discover how we are reshaping knowledge sharing through open discussions, meaningful connections, and endless learning opportunities.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "40px", marginBottom: "80px" }}>
        <Box data-aos="fade-right" sx={{ flex: "1", minWidth: "300px" }}>
          <Typography sx={{ color: "#4A2E7B", fontSize: "42px", fontWeight: "700", marginBottom: "20px" }}>
            Our Vision
          </Typography>
          <Typography sx={{ color: "#112C4A", fontSize: "20px", lineHeight: "1.6" }}>
            To create a space where curiosity thrives, and questions lead to a deeper understanding of the world and its endless possibilities.
          </Typography>
        </Box>
        <Box data-aos="fade-left" sx={{ flex: "1", textAlign: "center" }}>
          <img style={{ width: "300px", borderRadius: "30px", transition: "transform 0.5s", '&:hover': { transform: "scale(1.05)" } }} src={imgAbout} alt="About Us" />
        </Box>
      </Box>

      <Box data-aos="fade-up" sx={{ backgroundColor: "#11AA7740", borderRadius: "20px", padding: "40px", marginBottom: "80px", textAlign: "center" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700" }}>
          Our Mission
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginTop: "15px", marginBottom: "25px", lineHeight: "1.7" }}>
          We believe in the power of questions to unlock new perspectives and drive intellectual growth. Our platform is designed to create an open space for inquiry, where individuals from diverse backgrounds come together to explore ideas, share knowledge, and challenge assumptions.
        </Typography>
        <Button sx={{ backgroundColor: "#9478E9", color: "white", borderRadius: "10px", padding: "18px 36px", fontSize: "18px", '&:hover': { backgroundColor: "#6A5ACD" } }}>
          <Link style={{color:"white",textDecoration:"none"}} to={"/dashboard/about/#getInvolved"}>Get involved</Link>
        </Button>
      </Box>

      <Box data-aos="fade-up" sx={{ backgroundColor: "#7A278A33", borderRadius: "20px", padding: "50px", textAlign: "center", marginBottom: "80px" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700", marginBottom: "30px" }}>
          How It Works
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginBottom: "40px", lineHeight: "1.6" }}>
          We make asking and answering questions easy. Simply join the community, ask a question on any topic, and engage with others who are eager to explore ideas and share their expertise. Our platform supports open conversations that push the boundaries of what we know.
        </Typography>
      </Box>

      <Box data-aos="fade-up" sx={{ backgroundColor: "#11AA7740", borderRadius: "20px", padding: "40px", marginBottom: "80px", textAlign: "center" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700" }}>
          A Community of Learners
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginTop: "15px", marginBottom: "25px", lineHeight: "1.7" }}>
          Our platform is built for those who are passionate about learning. Here, every member is both a student and a teacher, contributing to an ever-growing pool of knowledge. Through active participation, we create a space where questions are valued, and curiosity is rewarded.
        </Typography>
      </Box>

      <Box data-aos="fade-up" sx={{ backgroundColor: "#7A278A33", borderRadius: "20px", padding: "40px", marginBottom: "80px", textAlign: "center" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700" }}>
          Join the Conversation
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginTop: "15px", marginBottom: "25px", lineHeight: "1.7" }}>
          Whether youre here to ask questions or offer answers, your voice matters. Join a community of thoughtful individuals ready to dive into deep conversations and help each other grow. Together, we can explore the unknown and find answers to the questions that shape our world.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", gap: "40px", flexWrap: "wrap", marginBottom: "80px" }}>
        <Box data-aos="fade-right" sx={{ flex: "1", backgroundColor: "#FFB6C140", borderRadius: "20px", padding: "40px", minWidth: "300px" }}>
          <Typography sx={{ color: "#4A2E7B", fontSize: "36px", fontWeight: "700", marginBottom: "15px" }}>
            Transparency
          </Typography>
          <Typography sx={{ color: "#112C4A", fontSize: "20px", lineHeight: "1.7" }}>
            Our platform is built on transparency, ensuring open communication and fostering trust within our community.
          </Typography>
        </Box>
        <Box data-aos="fade-up" sx={{ flex: "1", backgroundColor: "#A2D2FF40", borderRadius: "20px", padding: "40px", minWidth: "300px" }}>
          <Typography sx={{ color: "#4A2E7B", fontSize: "36px", fontWeight: "700", marginBottom: "15px" }}>
            Collaboration
          </Typography>
          <Typography sx={{ color: "#112C4A", fontSize: "20px", lineHeight: "1.7" }}>
            We believe that when individuals work together, they unlock boundless opportunities for growth and shared success.
          </Typography>
        </Box>
        <Box data-aos="fade-left" sx={{ flex: "1", backgroundColor: "#CDB4DB40", borderRadius: "20px", padding: "40px", minWidth: "300px" }}>
          <Typography sx={{ color: "#4A2E7B", fontSize: "36px", fontWeight: "700", marginBottom: "15px" }}>
            Innovation
          </Typography>
          <Typography sx={{ color: "#112C4A", fontSize: "20px", lineHeight: "1.7" }}>
            Innovation is at the heart of what we do. We continuously evolve, adapting to the needs of our users.
          </Typography>
        </Box>
      </Box>

      <Box data-aos="zoom-in" sx={{ backgroundColor: "#7A278A33", borderRadius: "20px", padding: "50px", textAlign: "center", marginBottom: "80px" }}>
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700", marginBottom: "30px" }}>
          Meet Our Team
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginBottom: "40px", lineHeight: "1.6" }}>
          Our team is a group of passionate individuals dedicated to creating an open and collaborative space for knowledge sharing.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
         
        {[{name:"Saidzoda Muhammad",img:"/src/pages/clientPages/about/img/telegram-cloud-photo-size-2-5235643676347199878-y.jpg"}, {name:"Parviz Normahmadov",img:"/src/pages/clientPages/about/img/telegram-cloud-photo-size-2-5235643676347199879-y.jpg"}, {name:"Mulloev Muhammad",img:"/src/pages/clientPages/about/img/telegram-cloud-photo-size-2-5235643676347199880-y.jpg"}].map((e,i) => (
            <Box key={i} data-aos="zoom-in-up" sx={{ textAlign: "center" }}>
              <Avatar
                sx={{width: 120,height: 120,margin: "auto",transition: "transform 0.3s", '&:hover': { transform: "scale(1.1)" },
                }}
                src={e.img}
                alt={`Team member ${i}`}
              />
              <Typography sx={{ color: "#112C4A", fontSize: "24px", marginTop: "10px", fontWeight: "600" }}>
                {e.name}
              </Typography>
             
            </Box>
          ))}
        </Box>
      </Box>

      <Box id="getInvolved"
        data-aos="fade-up"
        sx={{border: "2px solid black",width: "50%",margin: "auto",padding: "50px",borderRadius: "20px",boxShadow: "0px 0px 25px white",textAlign: "center",transition: "transform 0.3s", '&:hover': { transform: "scale(1.02)" },
        }}
      >
        <Typography sx={{ color: "#4A2E7B", fontSize: "48px", fontWeight: "700", marginBottom: "20px" }}>
          Ready to Make an Impact?
        </Typography>
        <Typography sx={{ color: "#112C4A", fontSize: "22px", marginBottom: "25px", lineHeight: "1.7" }}>
          Join our mission to transform the way people engage with questions, ideas, and knowledge. Together, we can inspire a new generation of thinkers.
        </Typography>
        <Button
        onClick={()=>navigate("/")}
          sx={{
            backgroundColor: "#9478E9",color: "white",borderRadius: "10px",padding: "20px",fontSize: "18px",transition: "background-color 0.3s, transform 0.3s",'&:hover': { backgroundColor: "#6A5ACD", transform: "scale(1.05)" },
          }}
        >
          GET STARTED 
        </Button>
      </Box>
    </Box>
  );
};

export default About;
