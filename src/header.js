import React, { useState } from "react";
import { useHistory } from "react-router";

const Header = () => {
  const [screenType, setScreenType] = useState("About");
  const [varr, setVarr] = useState("kuchnhi");
  const history = useHistory();

  // const callScreenType = (type) => {
  //   setScreenType("Resume");
  // };
  console.log(screenType);
  console.log(varr);
  return (
    <div className="main_header">
      <div class="name">
        <i class="fas fa-user-astronaut"></i>
        <span>Nishant Mishra</span>
      </div>
      <div className="labels">
        <label
          className={screenType === "About" ? "selected" : "label"}
          onClick={() => history.push("./")}
        >
          About
        </label>
        <label
          className={screenType === "Resume" ? "selected" : "label"}
          onClick={() => {
            history.push("./resume");
            setScreenType("Resume");
            setVarr("HeroALo");
          }}
        >
          Resume
        </label>
        <label
          className={screenType === "Work" ? "selected" : "label"}
          onClick={() => history.push("./work")}
        >
          Work
        </label>
        <label
          className={screenType === "Contact" ? "selected" : "label"}
          onClick={() => history.push("./contact")}
        >
          Contact
        </label>
      </div>
    </div>
  );
};

export default Header;
