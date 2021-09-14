import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
  //we're goint to make reouter here
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;

//<Navigation /> supposed to be inside the hashrouter
// dont have to put everythin inside the router but navigatio has to be
