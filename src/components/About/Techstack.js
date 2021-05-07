import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProgressBar from "./../Progressbar.js";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const Techstack = (prop) => {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-back">
            <div>{prop.iconType}</div>
            {/* <div label="Custom animation speed">
              <ChangingProgressProvider values={[0, prop.iconPercent]}>
                {(percent) => (
                  <CircularProgressbar
                    value={percent}
                    text={`${percent}%`}
                    styles={buildStyles({
                      pathTransitionDuration: 1,
                      textSize: 30,
                      textColor: "#ffffff",
                      strokeLinecap: "10",
                      pathColor: "#7d35bd",
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div> */}
          </div>
          <Col xs={4} md={2} className="tech-icons">
            <i className={`${prop.iconName} tech-icon-images`}></i>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Techstack;

// https://css-tricks.com/building-progress-ring-quickly/
