import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishant Mishra </span>
            from <span className="purple">New Delhi, India.</span>
            <br />I am a software developer at <span className="purple">SLK,Bengaluru, India.</span>
            <br />
            <br />
            Other than development, I love: 
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Football</li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Organising events.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#00f2ff"}}>
            "Talk is cheap! Show me the Code!!{" "}
          </p>
          <footer className="blockquote-footer">Linus Trovalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
