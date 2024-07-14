import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Mada </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I am currently pursuing my B.Tech 4th year in RGUKT,Basar.
            <br />
            <br />
            Apart from coding ,some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket , Kabaddi and Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Conducting Interactive Sessions with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vinay Mada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
