import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>about page</h4>
      <button onClick={() => navigate("/done")}>Done</button>
    </div>
  );
}

export default About;
