import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Sachin </span>
            from <span className="purple">Tiruppur, India.</span>
            <br />I am a student of Artificial Intelligence and Data Science in 
            KPRIET
            <br />
            <br />
            Apart from coding, some other activities that i interest to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Indoor & Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creater & Editor
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveller
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Best way to predict your future need to create it!" {" "}
          </p>
          <footer className="blockquote-footer">Sachin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
