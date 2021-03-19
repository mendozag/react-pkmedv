import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import About from "./components/About";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/about" component={About} />
      <Route exact path="/people" component={People} />
    </Router>
  );
}

export default App;
