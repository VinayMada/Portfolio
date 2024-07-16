import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Vinay Mada </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            <br />
            I am pursuing my Bachelor of Technology in Computer Science and Engineering at RGUKT-Basar with a CGPA of 9.35.
            <br />
            <br />
            I specialize in Full Stack Development and have completed notable projects like the <span className="purple">RGUKT Problems Hub </span>and <span className="purple">RGUKT Lab Dues Tracker</span> using the MERN stack. 
            <br/>
            <br />
            My technical skills include<span className="purple"> React, TypeScript, Spring Boot, C++, JavaScript, and more.</span> 
            
            <br/>
            <br />
            I excel in teamwork, communication, and problem-solving, 
            and have achieved top ranks in programming courses and competitions. 
            
            
                <br /><br />
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
