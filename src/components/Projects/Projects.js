import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ww from "../../Assets/Projects/ww.jpeg";
import alad from "../../Assets/Projects/alad.jpeg";
import meg from "../../Assets/Projects/meg.jpeg";
import fast from "../../Assets/Projects/fast.png";
import juman from "../../Assets/Projects/juman.jpeg";
import mal from "../../Assets/Projects/mal.jpeg";
import { FaStackExchange } from "react-icons/fa";

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
              imgPath={fast}
              isBlog={false}
              title="FAST AND FURIOUS 10"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={mal} isBlog={false} title="MALEFICIENT 2" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={meg} isBlog={false} title="MEG2" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard imgPath={ww} isBlog={false} title="WONDER WOMAN" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={juman}
              isBlog={false}
              title="JUMAN JI"

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alad}
              isBlog={false}
              title="ALADDIN"

              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
