import React from "react";
import About from "./About.js";
import Contact from "./Contact.js";
import Resume from "./Resume.js";

import Work from "./Work.js";

const CenterScreen = (props) => {
  switch (props.screenType) {
    case "Resume":
      return <Resume />;
    case "Contact":
      return <Contact />;
    case "Work":
      return <Work />;

    default:
      return <About />;
  }
};

// return (
//   <div className="center_screen">
//     {props.screenType === "About" ? <About /> : null}
//   </div>
// );

export default CenterScreen;
