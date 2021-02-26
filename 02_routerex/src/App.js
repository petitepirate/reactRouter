import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Twix from "./Twix";
import Oreos from "./Oreos";
import Reeses from "./Reeses";

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/twix">
          <Twix />
        </Route>
        <Route exact path="/oreos">
          <Oreos />
        </Route>
        <Route exact path="/reeses">
          <Reeses />
        </Route>

    </BrowserRouter>
  );
}

export default App;
