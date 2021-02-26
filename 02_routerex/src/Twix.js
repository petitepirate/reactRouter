import React from "react";
import { Link } from "react-router-dom";


function Twix() {
  return (
    <div>
        <h1>Here's your Twix!</h1>
        <h1><Link to="/">Go Home</Link></h1>
      </div>
  );
}

export default Twix;
