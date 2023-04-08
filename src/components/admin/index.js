import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function DisplayPosts(props) {
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
          <div className="d-flex flex-column align-items-center">
            <a
              className="pr-2"
              color="link"
              rounded
              size="sm"
              href={"/posts/id/" + props.id}
            >
              Åpne
            </a>

            <a color="link" rounded size="sm" href="#">
              Sett status
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
