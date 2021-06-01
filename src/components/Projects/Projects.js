import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import netflix from "../../../src/Assets/netflixProject.PNG";
import coinbaseLive from "../../../src/Assets/coinBaseLive.PNG";
import vaccinationIndia from "../../../src/Assets/vaccinate.PNG";

const Projects=()=> {
 const techStackCoin = ["React JS" , "CSS" , "webSockets"];
 const techStackNetflix =["React JS" , "CSS"];
 const techStackVaccinate =["React JS" , "ApiSetu" , "CSS"]
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
              imgPath={coinbaseLive}
              isBlog={false}
              title="Crypto Coin Price Tracker"
              description="Realtime access to prices of over 250 crypto currencies using Coinbase Pro"
              link="https://coinbase-live.vercel.app/"
              githubLink="https://github.com/nishant1120/coinbaseLive"
              techStack={techStackCoin}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix clone."
              description="Netflix Frontend UI clone, with the exact CSS on Netflix website , Closely worked with properties like CSS Grid , Flex Box , Positioning"
              link="https://netflix-nishant.vercel.app/"
              githubLink="https://github.com/nishant1120/netflix"
              techStack={techStackNetflix}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vaccinationIndia}
              isBlog={false}
              title="Vaccination Data"
              description="Used Government's API to fetch realtime data for vaccination and integrated with a UI, applied filters like sort by age"
              link="https://vaccine-data.vercel.app/"
              githubLink="https://github.com/nishant1120/vaccine_data"
              techStack={techStackVaccinate}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
