import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaGitAlt, FaPython, FaJava, FaCogs, FaDatabase } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiCplusplus, SiMysql, SiPostgresql } from "react-icons/si";

function Skills() {
  return (
    <Container className="my-5" id="skills">
      <h2 className="text-center mb-4 section-title name">My Skills</h2>

      {/* Skills Row */}
      <Row className="skill-row mb-4 justify-content-center">
        {/* Programming Basics */}
        <Col md={5} className="mb-4">
          <Card className="skill-card">
            <Card.Body>
              <Card.Title className="text-center">
                <FaCogs className="skill-icon" /> Programming Basics
              </Card.Title>
              <Card.Text>
                <ul>
                  <li><FaCogs /> C</li>
                  <li><SiCplusplus /> C++</li>
                  <li><FaJava /> Java</li>
                  <li><FaPython /> Python</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Frameworks */}
        <Col md={5} className="mb-4">
          <Card className="skill-card">
            <Card.Body>
              <Card.Title className="text-center">
                <FaReact className="skill-icon" /> Frameworks
              </Card.Title>
              <Card.Text>
                <ul>
                  <li><FaReact /> React JS</li>
                  <li><DiDjango /> Django (Basics)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Version Control */}
      <Row className="skill-row mb-4 justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="skill-card">
            <Card.Body>
              <Card.Title className="text-center">
                <FaGitAlt className="skill-icon" /> Version Control
              </Card.Title>
              <Card.Text>
                <ul>
                  <li><FaGitAlt /> Git</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Databases */}
      <Row className="skill-row mb-4 justify-content-center">
        <Col md={5} className="mb-4">
          <Card className="skill-card">
            <Card.Body>
              <Card.Title className="text-center">
                <FaDatabase className="skill-icon" /> Databases
              </Card.Title>
              <Card.Text>
                <ul>
                  <li><SiMysql /> MySQL</li>
                  <li><SiPostgresql /> PostgreSQL</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
