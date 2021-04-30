import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import algo from "../../../src/Assets/Projects/algo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Breast Cancer predictor"
              description="A CLASSIFIER THAT CAN HELP DIAGNOSE PATIENT AND PREDICT THE LIKLIHOOD OF THE CANCER"
              link="https://github.com/nishant1120"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Twitter clone."
              description=""
              link="https://github.com/nishant1120"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
