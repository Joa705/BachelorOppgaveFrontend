import React, { useState, useEffect, useRef } from "react";
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
  const { token } = UseAuth();
  const rolleRef = useRef();
  const [curURole, setCurURole] = useState(props.userRoleId);

  const {
    data: userRoles,
    status: userRoleStatus,
    refetch,
  } = useQuery({
    refetchOnWindowFocus: false,
    enabled: false,
    queryKey: ["userRoles", props.userId],
    queryFn: () => fetchUserRoles(token),
  });

  async function fetchUserRoles(userId) {
    let url = new URL(UrlConfig.serverUrl + "/Role");
    return await fetch(url, {
      headers: {
        userId: userId,
      },
    }).then((res) => {
      return res.json();
    });
  }

  const randImg =
    "https://mdbootstrap.com/img/new/avatars/" +
    Math.floor(Math.random() * 15) +
    ".jpg";

  function setUserRole() {
    console.log(curURole)
    console.log(rolleRef.current.innerHTML);
  }

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
          <p ref={rolleRef} className="fw-normal mb-1">
            {props.rolle}
          </p>
        </td>
        <td>
          <p className="fw-normal mb-1">{props.opprettet}</p>
        </td>
        <td>
          <div className="d-flex flex-column">
            <a
              color="link"
              rounded
              size="sm"
              href="#"
              data-toggle="modal"
              data-target={"#bruker-modal-" + props.userId}
              onClick={() => refetch()}
            >
              Endre
            </a>
            <a color="link" rounded size="sm" href="#">
              Slett
            </a>
          </div>
        </td>
      </tr>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserRole();
        }}
      >
        <div
          class="modal fade"
          id={"bruker-modal-" + props.userId}
          tabindex="-1"
          role="dialog"
          aria-labelledby={"bruker-modal-" + props.userId}
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={"bruker-modal-" + props.userId}>
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {userRoleStatus == "loading" ? <Loader /> : ""}

                {userRoleStatus == "error" ? <ErrorNotification /> : ""}

                {userRoleStatus == "success" ? (
                  <>
                    <div class="form-group">
                      <label for="selectStatus">Velg rolle</label>
                      <select
                        class="form-control"
                        id="selectStatus"
                        onChange={(e) => setCurURole(e.target.value)}
                      >
                        {userRoles.map((el) => {
                            if (el.type == props.rolle) {
                              return <option value={el.id} selected>{el.type}</option>;
                            } else {
                              return <option value={el.id}>{el.type}</option>;
                            }
                        })}
                      </select>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => setUserRole("En test")}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default function Brukere() {
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

  const display = () => {
    return users.map((element) => {
      if (element.id == token) return;

      let newdate = new Date(element.created);
      return (
        <DisplayBruker
          userId={element.id}
          userName={element.userName}
          userEmail={element.email}
          rolle={element.userRole.type}
          opprettet={newdate.toLocaleDateString()}
          userRoleId={element.userRole.id}
        />
      );
    });
  };

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

            {userStatus == "success" ? display() : ""}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
