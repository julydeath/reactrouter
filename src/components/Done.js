import React from "react";
import { useNavigate } from "react-router-dom";

function Done() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>its Done</h4>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}

export default Done;
