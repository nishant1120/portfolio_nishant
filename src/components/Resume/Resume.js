import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/RESUME.docx";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOFTWARE DEVELOPER [SLK]"
              date="June 2020 - Present"
              content={[
                "Worked as a Product intern in the Dimensions Lab division of SLK Software, worked on Parsers for C language.",
                "Worked on Rewriting the whole Product in React Js",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="VIVACITY [Cultutal Fest of the LNMIIT Jaipur]"
              content={[
                "ORGANISING COMMITTEE Head OF THE LARGEST CULTURAL FEST IN RAJASTHAN.",
              ]}
            />
            <Resumecontent
              title="CYBROS[Computer Club of THE LNMIT]"
              content={[
                "Conducted classes on Data Structures and Algorithms for over 300 college students",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.TECH MECHANICAL [THE LNMIIT, Jaipur] "
              date="2016 - 2020 "
              content={["CGPA: 5.98"]}
            />
            <Resumecontent
              title="12TH BOARD [Kalka Public School, New Delhi]"
              date="July 2015"
              content={["Precentage: 80.40%"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
