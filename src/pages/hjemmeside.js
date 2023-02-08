import "../styling/hjemmeside.css";
import React from "react";
import asplan from "../illustrasjon.png";
import viak from "../asplan_viak_1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*export default function Hjemmeside() {
    return (
        <h1 className="hjemmeside">User Feedback System</h1>
        
    )
}
*/

function Hjemmeside() {
  return (
    <div className="hjemmeside-container">
      <div
        className="image-container image-style"
        style={{ backgroundImage: `url(${asplan})` }}
      >
        <h1 className="tittel">User Feedback System</h1>
        <h5 className="undertittel">
          Registrer din tilbakemelding av våre tjenester utvilket av Asplan Viak
        </h5>
      </div>

      <Container>
      <Row>
        <Col>
        Enkel å komme i gang. Ingen registrering, logg inn med Azure AD
        
        </Col>
        <Col> 
        Registrer tilbakemelding av din opplevelse av våre systemer
        
        </Col>
        <Col>
        Du vil få svar av en av våre administratorer
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Hjemmeside;
