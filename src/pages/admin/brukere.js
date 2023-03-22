import React, { useState, useEffect } from "react";
import { UrlConfig } from "../../config";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { stringify } from "uuid";

function DisplayBruker(props) {
  const userId = props.userId;

  const randImg =
    "https://mdbootstrap.com/img/new/avatars/" +
    Math.floor(Math.random() * 15) +
    ".jpg";
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={randImg}
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{props.userName}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{props.userEmail}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{props.rolle}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{props.opprettet}</p>
        </td>
        <td>
          <MDBBtn color="link" rounded size="sm">
            Endre
          </MDBBtn>
          <MDBBtn color="link" rounded size="sm">
            Slett
          </MDBBtn>
        </td>
      </tr>
    </>
  );
}

export default function Brukere() {
  const [displayBruker, setDisplayBruker] = useState([]);

  useEffect(() => {
    fetch(UrlConfig.serverUrl + "/User")
      .then((res) => res.json())
      .then((data) => setDisplayBruker(data));
  }, []);
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Navn</th>
          <th scope="col">Email</th>
          <th scope="col">Rolle</th>
          <th scope="col">Opprettet</th>
          <th scope="col">Administer</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {displayBruker.map((element) => {
          let newdate = new Date(element.created);

          return (
            <DisplayBruker
              userId={element.id}
              userName={element.userName}
              userEmail={element.email}
              rolle={element.userRole.type}
              opprettet={newdate.toDateString()}
            />
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}
