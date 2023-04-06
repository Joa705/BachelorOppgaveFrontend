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
import { useQuery } from "react-query";
import DisplayPosts, { fetchPosts } from "../../components/admin";
import "../../App.css";
import { UseAuth } from "../../functions/authentication";


export default function Admin() {
  const [displayBruker, setDisplayBruker] = useState([]);
  const {token} = UseAuth();
  const { isLoading, error, data } = useQuery(
    [],
    () => fetchPosts(token),
    setDisplayBruker(data)
  );

  

  if (isLoading) {
    return (
      <>
        <div className="container">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="container">
          <p>Error</p>
        </div>
      </>
    );
  }

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
