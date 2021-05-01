import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChart } from "react-minimal-pie-chart";

const Techstack = (prop) => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-back">
          <div>{prop.iconType}</div>
          {/* <div style={{height:"100%", background:"red",padding:"0px 0px 4px 4px" , margin:"0px"}}>60%</div> */}
        </div>
        <Col xs={4} md={2} className="tech-icons">
          <i className={`${prop.iconName} tech-icon-images`}></i>
        </Col>
      </div>
    </div>
  );
};

export default Techstack;

// https://css-tricks.com/building-progress-ring-quickly/
