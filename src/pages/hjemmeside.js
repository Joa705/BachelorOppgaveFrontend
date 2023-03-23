import "../styling/hjemmeside.css";
import React from "react";
import asplan from "../illustrasjon.png";
import il1 from "../1.png";
import il2 from "../2.png";
import il3 from "../3.png";
import Footer from "../components/footer";
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
            <div className="tittel">
              Asplan Viak <br /> Feedback System
            </div>
            <div className="undertittel">
              Registrer din tilbakemelding av våre tjenester utvilket av Asplan
              Viak. Vi er nysgjerrige på å høre hva du mener mens vi hjelper deg
              så godt vi kan.
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
              <p class="text-center">1. Logg inn </p> Det er lett å komme i gang
              med vårt system. Vi krever ingen registrering. Logg deg inn på
              en-to-tre med Azure AD. Helt gratis.
            </div>
            <div className="col-sm">
              <div
                className="image2"
                style={{ backgroundImage: `url(${il5})` }}
              ></div>
              <p class="text-center">2. Registrer feedback </p>Registrer
              tilbakemelding av din opplevelse av våre tjenester som du har
              brukt. Da kan du velge mellom ris, ros, tips eller forbedring.
            </div>
            <div className="col-sm">
              <div
                className="image3"
                style={{ backgroundImage: `url(${il6})` }}
              ></div>
              <p class="text-center">3. Vent på svar fra oss </p> Sånn, da er
              det gjort! Vi skal gå gjennom feedbacken din. Du vil straks få et
              svar av oss. Vi setter pris på at du tok deg tid!
            </div>
          </div>
        </div>

        <div className="forklaring2 d-flex flex-column align-items-center justify-content-center">
          Hvordan logger du deg inn?
        </div>

        <div className="forklaring3 d-flex flex-column align-items-center justify-content-center">
          Hvordan registrerer du feedbacken?
        </div>

        <div className="forklaring4 d-flex flex-column align-items-center justify-content-center">
          Hva skjer videre?
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Hjemmeside;
