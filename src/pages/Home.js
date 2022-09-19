import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Animation
  Aos.init({ duration: 2000 });

  return (
    <div>
      <h1 data-aos="fade-up">Home Page</h1>
      <h1 data-aos="fade-up">About Page</h1>
      <h1 data-aos="fade-up">Home Page</h1>
      <h1 data-aos="fade-up">Home Page</h1>
      <h1 data-aos="fade-up">Home Page</h1>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>

      {/* <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a> */}
    </div>
  );
};

export default Home;
