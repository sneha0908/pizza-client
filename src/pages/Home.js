import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1><u><b> Posillipo Pizza </b></u></h1>
        <p><marquee>😋CRUST ME,IT'S DELICIOUS🍕</marquee></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
       
        </Link>
      </div>
    </div>
    
  );
}

export default Home;