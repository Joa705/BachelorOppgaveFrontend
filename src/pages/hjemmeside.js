import "../styling/hjemmeside.css";
import React from 'react';
import asplan from "../asplan_viak_1.jpg"

 /*export default function Hjemmeside() {
    return (
        <h1 className="hjemmeside">User Feedback System</h1>
        
    )
}
*/

function Hjemmeside() {
    return (
      <div className="">
        
        <h1 className="tittel">User Feedback System</h1>
        <h5 className="undertittel">Registrer din tilbakemelding av våre tjenester utvilket av Asplan Viak</h5>
        <img src={asplan} alt="asplanviak" class="picture"/>
      </div>
    );
  }
  
  export default Hjemmeside;