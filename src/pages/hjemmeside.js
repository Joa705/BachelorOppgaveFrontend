import "../styling/hjemmeside.css";
import React from "react";
import asplan from "../illustrasjon.png";
import viak from "../asplan_viak_1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*export default function Hjemmeside() {
    return (
        <h1 className="hjemmeside">User Feedback System</h1>
        
    )
}
*/

function Hjemmeside() {
  return (
    <>
      <div className="hjemmeside-container">
        <div
          className="image-container image-style"
          style={{ backgroundImage: `url(${asplan})` }}
        >
          <h1 className="tittel">User Feedback System</h1>
          <h5 className="undertittel">
            Registrer din tilbakemelding av våre tjenester utvilket av Asplan
            Viak
          </h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Enkel å komme i gang. Ingen registrering. Bare logg deg inn med
              Azure AD
            </div>
            <div className="col-sm">
              Registrer tilbakemelding av din opplevelse av våre systemer. Enten
              det er ris, ros eller forslag til ny funksjonalitet
            </div>
            <div className="col-sm">
              Du vil straks få svar av en av våre administratorer
            </div>
          </div>
        </div>

        <div className="footer d-flex flex-column align-items-center justify-content-center">
          <h5 className="">Kontaktinformasjon</h5>
          <p className="">Kontakt oss på redaksjon@asplanviak.no!</p>
          <p className="">Laget av UiA studenter for Asplan Viak © 2023</p>
        </div>
      </div>
    </>
  );
}

export default Hjemmeside;
