import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/Resume.pdf";

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
            <h3 className="resume-title">Technical Experience</h3>
            <Resumecontent
              title="SOFTWARE DEVELOPER [SLK]"
              date="June 2020 - Present"
              content={[
                "Worked as a Product intern in the Dimensions Lab division of SLK Software, worked on Parsers for C language.",
                "Worked on Rewriting the whole Product in React Js",
                "Currently working on Technologies Python , React , JavaScript to Integrate a 3rd Party Feature in our Product."
              ]}
            />
            <Resumecontent
              title="Technical Intern at Aditya Birla Group, Ultratech cement Pvt. Ltd."
              date="June 2019-July 2019"
              content={[
                "Worked in Compressor House of Pyro Section in the plant",
                "Was assigned a project to optimize the consumption of power of the compressor house",
                "Was successful in achieving the goal of saving 149.9 KHW per days for the plant."
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
            <Resumecontent
              title="Coordinator, Street Play Society(Nukkad Mandali) LNMIIT , Jaipur "
              content={[
                "Have Personally Perfomed 6 Street Plays in prestigious Institutions line IITB(Mood Ingido) , IITR(Thomso)",
                "Directed Plays and Mentored Juniors for almost 3 Years"
              ]}
            />
            <Resumecontent
              title="President,Society of Automotive Engineers(SAE), LNMIIT, Jaipur"
              content={[
                "Was Responsible for managing the student chapter of SAE in LNMIIT with more than 150 members.",
                "First Fully funded Major Project of Efficycle was made under my Tenure and Participated in National Level Competition Help in LPU Jalandhar, Punjab"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Technology with Majors in MECHANICAL Engineering [THE LNMIIT, Jaipur] "
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
