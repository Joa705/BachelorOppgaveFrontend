import "../styling/hjemmeside.css";
import React from "react";
import asplan from "../illustrasjon.png";
import viak from "../asplan_viak_1.jpg";

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
      <div class="row">
    <div class="col">1. Enkel å komme i gang. Ingen registrering, logg inn med Azure AD</div>
    <div class="col">2. Registrer tilbakemelding av din opplevelse av våre systemer</div>
    <div class="col">3. Velg mellom ris, ros og forslag til ny funksjonalitet</div>
    <div class="col">4. Du vil få svar av en av våre administratorer</div>
  </div>
    </div>
  );
}

export default Hjemmeside;
