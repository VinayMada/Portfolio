import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/looker-dashboard.png";
import rguktProblemsHub from "../../Assets/Projects/rgukt-problems-hub-1.png";
import rguktLabDuesTracker from "../../Assets/Projects/rgukt-lab-dues-tracker.png";
import rguktBMS from "../../Assets/Projects/rgukt-bms.png";
import signup from "../../Assets/Projects/signup.png";
import quora from "../../Assets/Projects/quora.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rguktProblemsHub}
              isBlog={false}
              haveGH={true}
              title="RGUKT Problems HUB"
              description="A website for carrying the problems of students to corresponding workers."
              ghLink="https://github.com/VinayMada/RGUKT-Problems-HUB"
              demoLink="rgukt-problems-hub.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rguktLabDuesTracker}
              isBlog={false}
              haveGH={true}
              title="RGUKT Lab Dues Tracker"
              description="A website for tracking the student's dues in their whole six years at university."
              ghLink="https://github.com/VinayMada/RGUKT-Lab-Dues-Tracker"
              demoLink="https://rgukt-lab-dues-tracker.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rguktBMS}
              isBlog={false}
              haveGH={true}
              title="RGUKT Book My Show"
              description="A registration site for students to register for the upcoming events."
              ghLink="https://github.com/VinayMada/RGUKT-BMS"
              demoLink="https://rgukt-bms.netlify.app/"
            />
          </Col>



        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signup}
              isBlog={false}
              haveGH={true}
              title="Signup - OTP"
              description="A signup page which integrates authentication with OTP-verification."
              ghLink="https://github.com/VinayMada/Sign-Up-page"
              demoLink="https://vinaymada-signup.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              haveGH={false}
              title="Dashboard"
              description="A simple dashboard of Flipkart sales of an year in the whole India."
              ghLink=""
              demoLink="https://lookerstudio.google.com/reporting/3127b131-18bf-42ce-a7f8-3f14f3b3fe20/page/xqpTD"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quora}
              isBlog={false}
              haveGH={false}
              title="Quora Question Pair Similarity"
              description="A machine learning model for determining the similarity of two questions."
              ghLink=""
              demoLink="https://www.kaggle.com/code/vinaymada/project-quora"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
