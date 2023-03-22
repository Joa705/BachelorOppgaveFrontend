import React, { useState, useEffect, } from "react";
import { UrlConfig } from "../config";
import logo from "../logo5.png";
import "../styling/ny_post.css"
import { UseAuth } from "../functions/authentication";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
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
  MDBInput,
  MDBScrollspy,
} from "mdb-react-ui-kit";

export default function NyPosts() {
  const {token} = UseAuth();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [labelTakk, setLabelTakk] = useState("");

  const navgiate = useNavigate();

  useEffect(() => {
    fetch(UrlConfig.serverUrl + "/Category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log(e));
  }, []);

  async function submitData(){
    let myForm = new FormData();
    myForm.append("categoryId", categoryId)
    myForm.append("title", title)
    myForm.append("description", description)
    let res = await fetch(UrlConfig.serverUrl + "/Post",
    {
      method: "post",
      headers: {'userId' : token},
      body: myForm
    })
    
    if(res.status == "200") {
      setLabelTakk("Takk for din tilbakemelding! Vi setter pris på det.")

      setTimeout(() =>{
      setLabelTakk("")
      navgiate("/posts")

      }, 3000)
    }
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
          <h5>
            Vennligst fyll ut vårt skjema. Velg hva slags feedback du ønsker å
            registere, deretter skriv hva kan vi gjøre for å forbedre
            brukeropplevelse av våre tjenester.
          </h5>
        </div>
      </div>
      <br />
      <br />

      <form className="px-4" action="" onSubmit={(e)=> {e.preventDefault(); submitData();}}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol size="11">
              <MDBCard>
                <MDBCardBody>
                  <div className="text-center">
                    <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                  </div>
                  <p className="text-center">
                    <strong>
                      <h5>Hva slags feedback ønsker du å registrere?</h5>
                    </strong>
                  </p>

                  <div>
                    <select
                      required
                      className="form-control"
                      aria-label="Floating label select example"
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option value="" disabled selected="selected">
                        -- Velg --
                      </option>
                      {categories.map((element) => {
                        return (
                          <option value={element.id}>
                            {element.type}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  
                  <hr></hr>
                  <p className="text-center">
                    <strong>
                      <h5>Tittel</h5>
                    </strong>
                  </p>
                  <MDBInput
                    className="mb-4"
                    label="Skriv feedbacken din her:"
                    id="tittel"
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    required
                  />
                  <MDBTextArea
                    className="mb-4"
                    label={labelTakk}
                    id="textAreaExample"
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    type="text"
                    required
                  />
                </MDBCardBody>
                <MDBCardFooter>
                  <div className="text-end">
                    <button type="submit" className="submit-ny-innlegg btn btn-success">Send inn</button>
                  </div>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
      <br></br>
    </>
  );
}
