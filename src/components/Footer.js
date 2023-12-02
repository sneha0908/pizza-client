import React from "react";
import "../styles/Footer.css";
import Instagram from "@mui/icons-material/Instagram";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from "@mui/icons-material/YouTube";
import  LinkedIn  from "@mui/icons-material/LinkedIn"; 
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
            <Instagram/>
      
      <span style={{color:'white'}}>
        <TwitterIcon/> <FacebookIcon/><YouTubeIcon/> <LinkedIn/>
      </span>
      </div>
     <p> &copy; 2021 Posillipo pizza.com</p>
    </div>
    
  );
}

export default Footer;