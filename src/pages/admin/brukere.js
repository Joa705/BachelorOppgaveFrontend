import React, { useState, useEffect } from "react";
import { UrlConfig } from "../../config";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../../styling/brukere.css";
import "../../App.css";
import AdminPanel from "../../components/admin/panel";
import { UseAuth } from "../../functions/authentication";
import { useQuery } from "react-query";
import Loader from "../../components/loader";
import ErrorNotification from "../../components/errorNotification";

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
  const { token } = UseAuth();

  const { data: users, status: userStatus } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(token),
  });

  async function fetchUsers(userId) {
    let url = new URL(UrlConfig.serverUrl + "/User");
    return await fetch(url, {
      headers: {
        userId: userId,
      },
    }).then((res) => {
      return res.json();
    });
  }

  return (
    <>
      <div className="Appcontainer">
        <AdminPanel
          title={
            "Her kan du finne oversikt over alle brukere. Endre rolle til brukeren eller slett brukere."
          }
        />
        <div className="blank-space-header"></div>
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
            {userStatus == "loading" ? <Loader /> : ""}

            {userStatus == "error" ? <ErrorNotification /> : ""}

            {userStatus == "success"
              ? users.map((element) => {
                  let newdate = new Date(element.created);

                  return (
                    <DisplayBruker
                      userId={element.id}
                      userName={element.userName}
                      userEmail={element.email}
                      rolle={element.userRole.type}
                      opprettet={newdate.toLocaleDateString()}
                    />
                  );
                })
              : ""}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
