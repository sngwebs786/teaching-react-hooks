import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  let{name} = useParams()
  return (
    <div>
      <h1>This is About Page</h1>
      <h2>Hello {name}!</h2>
    </div>
  );
};

export default About;
