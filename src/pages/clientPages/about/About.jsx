import { Avatar, Box, Button, Typography } from "@mui/material";
import imgAbout from "./img/image.png"; // Replace with an appropriate image for the About page
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <Box sx={{ background: "linear-gradient(to right , #FFC3A0 , #FFAFBD)", padding: "20px 30px" }}>
      <Box data-aos="fade-right" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", margin: "auto", gap: "20px", padding: "20px 20px", width: "95%", borderRadius: '20px', backgroundColor: "#FFA69E1A" }}>
        <Box>
          <Typography sx={{ color: "#FF6F61", fontSize: "40px", fontWeight: "700" }}>
            About Us
          </Typography>
          <Typography sx={{ color: "#E94B3C", fontSize: "20px" }}>
            Welcome to our platform, a place where curiosity and collaboration come together. Our goal is to provide a space where everyone can <br />
            ask questions, share insights, and engage in meaningful conversations. We believe in the power of dialogue to broaden perspectives <br />
            and create understanding.
          </Typography> <br />
          <Button sx={{ backgroundColor: "#FF6B6B", color: "white", borderRadius: "10px", padding: "15px", fontSize: '17px' }}>Learn more</Button>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img style={{ width: "560px", borderRadius: "50px" }} src={imgAbout} alt="About Us" />
        </Box>
      </Box> <br />

      <Box data-aos="fade-left" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", margin: "auto", gap: "20px", padding: "20px 20px", width: "95%", borderRadius: '20px', backgroundColor: "#FF6F6140" }}>
        <Box>
          <Typography sx={{ color: "#FF6F61", fontSize: "40px", fontWeight: "700" }}>
            Our Mission
          </Typography>
          <Typography sx={{ color: "#E94B3C", fontSize: "20px" }}>
            Our mission is to create a community where knowledge is shared freely, ideas are respected, and curiosity is encouraged. We aim to <br />
            foster a platform where anyone can find answers, share their expertise, and grow together.
          </Typography> <br />
        </Box>
        <Button sx={{ backgroundColor: "#E94B3C99", color: "white", borderRadius: "10px", padding: "15px", fontSize: '17px' }}>Discover more</Button>
      </Box> <br /><br />

      <Box sx={{ backgroundColor: "#FF6F6133", padding: "30px", borderRadius: "20px", width: '94%', ml: "13px" }}>
        <Typography sx={{ color: '#E94B3C', fontSize: '40px', fontWeight: "700" }}>Our Values</Typography>
        <Box sx={{ margin: "auto", justifyContent: "center", display: "block", padding: "20px" }}>
          <Typography sx={{ color: 'grey', fontSize: "23px", fontWeight: "800" }}>
            Transparency, inclusivity, respect, and collaboration are the core values that drive everything we do. Our community is built on trust, <br />
            where every individual’s contribution is valued and every question is a step toward deeper understanding.
          </Typography>
        </Box>
      </Box> <br /><br />

      <Box sx={{ border: "2px solid black", width: "35%", margin: "auto", padding: "30px", borderRadius: '20px', boxShadow: "0px 0px 15px white" }}>
        <Typography sx={{ color: "#8B1A1A", textAlign: "center", fontSize: "40px" }}>Join Our Journey</Typography>
        <Typography sx={{ color: "#8B1A1A", textAlign: "center", fontSize: "20px" }}>
          Be a part of our growing community and help us continue to build a platform where knowledge and questions are celebrated.
        </Typography> <br /><br />
        <Button sx={{ backgroundColor: "#FF6B6B", color: "white", borderRadius: "10px", padding: "15px", fontSize: '17px', display: "block", margin: "auto" }}>Get Involved</Button>
      </Box>
    </Box>
  );
}

export default About;
