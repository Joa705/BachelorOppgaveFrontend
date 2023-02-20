import "../styling/hjemmeside.css";
import React from "react";
import asplan from "../illustrasjon.png";
import il1 from "../1.png";
import il2 from "../2.png";
import il3 from "../3.png";

import il4 from "../4.png";
import il5 from "../5.png";
import il6 from "../6.png";
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
        <div className="main-container ">
          <div className="main-container-item-1">
            <div className="tittel">Asplan Viak <br />  Feedback System</div>
            <div className="undertittel">
              Registrer din tilbakemelding av våre tjenester utvilket av Asplan
              Viak. Vi er nysgjerrige på å høre hva du mener og vi hjelper deg så godt vi kan. 
            </div>
          </div>
          <div className="main-container-item">
            <img className="image-container" src={asplan} />
          </div>
        </div>
        <div className="container">
          <div className="row">
          <div className="forklaring d-flex justify-content-center">
             Hvordan fungerer det?
            </div>
            <div className="col-sm">
              <div
                className="image1"
                style={{ backgroundImage: `url(${il4})` }}
              ></div>
              Det er lett å komme i gang. Vi krever ingen registrering. Logg deg
              inn på en-to-tre med Azure AD.
            </div>
            <div className="col-sm">
              <div
                className="image2"
                style={{ backgroundImage: `url(${il5})` }}
              ></div>
              Registrer en tilbakemelding av din opplevelse av våre tjenester.
              Du kan velge mellom ris, ros eller forbedringstips.
            </div>
            <div className="col-sm">
              <div
                className="image3"
                style={{ backgroundImage: `url(${il6})` }}
              ></div>
              Sånn, da er det gjort! Vi skal gå gjennom feedbacken din. Du vil
              straks få svar av oss. Vi setter pris på det!
            </div>
          </div>
        </div>

        <div className="footer d-flex flex-column align-items-center justify-content-center">
          <h5 className="footer-text-large">Kontaktinformasjon</h5>
          <p className="footer-text-small">
            Kontakt oss på redaksjon@asplanviak.no
          </p>
          <p className="footer-text-smaller">
            Laget av UiA studenter for Asplan Viak © 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Hjemmeside;