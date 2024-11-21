import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="text-center mb-4 name">Education</h2>
        <Row className="justify-content-center">
          {/* College 1 */}
          <Col sm={12} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body className='card-bdy'>
                <Card.Title>Sai niketan kannada medium high school mudhol</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SSLC</Card.Subtitle>
                <Card.Text>Percentile: 78.88%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* College 2 */}
          <Col sm={12} md={4} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Body className='card-bdy'>
                <Card.Title>Sai niketan PU science colloge mudhol </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">PUC in PCME</Card.Subtitle>
                <Card.Text>Percentile: 71.2%</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* College 3 */}
          <Col sm={12} md={4} lg={3} className="mb-4">
            <Card className="text-center ">
              <Card.Body className='card-bdy'>
                <Card.Title>Jain college of BBA,BCA and BCOM belgavi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">BCA (Bachelors of computer applocation)</Card.Subtitle>
                <Card.Text>CGPA: 7.98</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
