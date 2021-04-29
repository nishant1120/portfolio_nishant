import React, { useState } from "react";
import "./App.scss";
import CenterScreen from "./centerscreen.js";
import Header from "./header";
import About from "./About.js";

const App = () => {
  const [screenType, setScreenType] = useState("About");
  console.log();
  return (
    <div className="Parent">
      <Header />
      <About />
      {/* <CenterScreen screenType={screenType} /> */}
      {/* <input list="test" placeholder="choose" />
      <datalist id="test">
        <option value="nsiahnt" />
        <option value="Msihra" />
        <option value="Addidad" />
        <option value="Nike" />
        <option value="Puma" />
        <option value="Hello" />
        <option value="wORLD" />
        <option value="ssup" />
      </datalist> */}
    </div>
  );
};

export default App;
