import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {
  return(
    <div>
        <h1>Choose your Snack:</h1>
        <h1><Link to="/twix">Twix</Link></h1>
        <h1><Link to="/oreos">Oreos</Link></h1>
        <h1><Link to="/reeses">Reeses</Link></h1>

    </div>
  );
}

export default VendingMachine;
