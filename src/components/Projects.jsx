import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container className="my-5" id="Projects">
      <h2 className="text-center mb-4 name">My Projects</h2>
      <Row className="project-row mb-4">
        
        {/* Gemini-AI-Chat-Project */}
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="text-center">Gemini-AI-Chat-Project</Card.Title>
              <Card.Text>
                A chat application built using AI to generate responses and interact with users.
                <br />
                <strong>Technologies used:</strong> python & html.
              </Card.Text>
              <div className="project-links">
                <a href="https://github.com/sampat646/-Gemini-AI-Chat-Project.git" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Weather-app */}
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="text-center">Weather-app</Card.Title>
              <Card.Text>
                A weather forecasting application to check real-time weather conditions.
                <br />
                <strong>Technologies used:</strong>Html,css and js.
              </Card.Text>
              <div className="project-links">
                <a href="https://github.com/sampat646/Weather-app.git" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>

      <Row className="project-row mb-4">
        {/* Mini-projects */}
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="text-center">Mini-projects</Card.Title>
              <Card.Text>
                A collection of small projects to demonstrate various programming skills.
                <br />
                <strong>Technologies used:</strong> Html, css and  Js.
              </Card.Text>
              <div className="project-links">
                <a href="https://github.com/sampat646/Mini-projects.git" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Quiz App */}
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title className="text-center">Quiz App</Card.Title>
              <Card.Text>
                A quiz application where users can participate in quizzes and get feedback on their answers.
                <br />
                <strong>Technologies used:</strong> Html,css and js
              </Card.Text>
              <div className="project-links">
                <a href="https://quizapp-rfuj.onrender.com/" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <br />
                <a href="https://github.com/sampat646/QuizApp.git" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Projects;
