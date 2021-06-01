import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import githubLogo from "../../../src/Assets/github.svg";

function ProjectCards(props) {
  console.log(props.techStack)
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="secd" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
        </Button>
        <Button variant="secd" href={props.githubLink} target="_blank">
          <img src={githubLogo} alt="githublogo"/>
        </Button>
        <Card.Title>{props.techStack.map((tech , id)=>(<span className="techstacksIcon" key={id}>{tech}</span>))}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
