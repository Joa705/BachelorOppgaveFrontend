import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

function DisplayPosts(props) {
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{props.userName}</p>
              <p className="text-muted mb-0">{props.email}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{props.title}</p>
        </td>
        <td>
          <MDBBadge color="success" pill>
            {props.status}
          </MDBBadge>
        </td>
        <td>
          <MDBBadge color="warning" pill>
            {props.category}
          </MDBBadge>
        </td>
        <td>
          <p className="fw-normal">{props.created}</p>
        </td>
        <td>
          <MDBBtn color="link" rounded size="sm">
            Åpne
          </MDBBtn>
          <MDBBtn color="link" rounded size="sm">
            Svar
          </MDBBtn>
          <MDBBtn color="link" rounded size="sm">
            Set status
          </MDBBtn>
          <MDBBtn color="link" rounded size="sm">
            Slett
          </MDBBtn>
        </td>
      </tr>
    </>
  );
}

export default function Admin() {
  const [displayBruker, setDisplayBruker] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5296/Post")
      .then((res) => res.json())
      .then((data) => setDisplayBruker(data));
  }, []);
  return (
    <>
      <MDBCardBody className="p-4 header-text">
        <MDBTypography tag="h1" className="mb-2">
          Admin Panel
        </MDBTypography>
        <p className="fw-light mb-4 pb-2">
          <br />
          <h5>
            Her kan du administrere alle innlegg. Åpne, svar, set status eller
            slett innlegg.
          </h5>
        </p>
        <br />
      </MDBCardBody>
      <div className="blank-space-header"></div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Bruker</th>
            <th scope="col">Tittel</th>
            <th scope="col">Status</th>
            <th scope="col">Kategori</th>
            <th scope="col">Dato opprettet</th>
            <th scope="col">Administer innlegg</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {displayBruker.map((element) => {
            let nyDato = new Date(element.created).toDateString();

            return (
              <DisplayPosts
                title={element.title}
                category={element.category.type}
                description={element.description}
                userName={element.user.userName}
                status={element.status.type}
                id={element.user.userId}
                created={nyDato}
                email={element.user.email}
              />
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
