import React, {useState} from 'react'
import logo from "../logo5.png";
import "../styling/mine_posts.css";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRadio,
    MDBRow,
    MDBTextArea,
    MDBRange,
    MDBInput
  } from "mdb-react-ui-kit";
  

export function Display(props) {
    return (
        <>
        <div style={{border : "2px solid black"}}>

        <h1>Id {props.id}</h1>
        <h1>Navn {props.name}</h1>
        <button>En knapp</button>
        </div>

        </>
        
    )
}


export default function MyPosts() {
    const [displayData, setDisplayData] = useState([]);

    async function getData() {
      await fetch("http://localhost:5296/WeatherForecast")
        .then((data) => data.json())
        .then((res) => {
          setDisplayData(res);
          console.log(res);
        });
    }
    
    return (
     <> 
        <div className="main-container-item2">
        <img className="image-container2" src={logo} />
        </div>

        <div className="beskrivelse d-flex flex-column align-items-center justify-content-center">
          <div className="beskrivelse2">
          <h3>Din tilbakemelding betyr mye for oss!</h3>     
        </div> 
        <div className="beskrivelse3">
          <h5>Vennligst fyll ut vårt skjema. Velg hva slags feedback du ønsker å registere, deretter skriv hva kan vi gjøre for å forbedre brukeropplevelse av våre tjenester.</h5>     
        </div>       
        </div>
<br/>
<br/>
        <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="11">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
         
                <MDBContainer style={{ maxWidth: "800px" }}>
      <div className="mx-0 mx-sm-auto">
        <p className="fw-bold text-center">
          <h5>Hvor fornøyd er du med tjenester levert av Asplan Viak?</h5>
        </p>

        <label htmlFor="customRange3" className="form-label float-start">
          Svært lite
        </label>
        <label htmlFor="customRange3" className="form-label float-end">
          Veldig fornøyd
        </label>

        <MDBRange min="0" max="10" step="1" id="customRange3" />

        <div className="text-right mt-3">
          <MDBBtn>Velg</MDBBtn>
        </div>
      </div>
    </MDBContainer>
              </div>

              <hr />

              <form className="px-4" action="">
                <p className="text-center">
                  <strong><h5>Hva slags feedback ønsker du å registrere?</h5></strong>
                </p>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Ris"
                  className="mb-2"
                  defaultChecked
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Ros"
                  className="mb-2"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  label="Forbedring"
                  className="mb-2"
                />
                
                <p className="text-center">
                  <strong><h5>Tittel</h5></strong>
                </p>
                 <MDBTextArea className="mb-4" label='Skriv feedbacken din her:' id='tittel' rows={1} />
                <MDBTextArea className="mb-4" label='Takk for din tilbakemelding! Vi skal gå gjennom den. Du vil høre fra oss.' id='textAreaExample' rows={10} />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-end">
                <MDBBtn>Send inn</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

        


        

        <button onClick={() => getData()}>display</button>
     {displayData.map(element => {
            return (
                <Display id={element.weatherId} name={element.summary}/>
            )
        
     })
    }
    </>
    )
}