import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div id="App">
      <Home />
      <Navbar />
    </div>
  );
};

export default App;
