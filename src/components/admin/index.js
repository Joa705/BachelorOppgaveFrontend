import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { UrlConfig } from "../../config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export async function fetchPosts(userId, search, filter) {
    let url = new URL(UrlConfig.serverUrl + "/Post")
    if (filter == "title") {
        url.searchParams.append("title", search)
    }
  return await fetch(url, {
    headers: {
      userId: userId,
    },
  }).then((res) => {
    return res.json();
  });
}

export default function DisplayPosts(props) {
  const navigate = useNavigate();

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
          <button
            color="link"
            rounded
            size="sm"
            onClick={() => navigate("/posts/id/" + props.id)}
          >
            Åpne
          </button>
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
