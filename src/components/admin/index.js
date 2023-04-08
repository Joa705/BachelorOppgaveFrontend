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

            <a
              color="link"
              rounded
              size="sm"
              href="#"
              data-toggle="modal"
              data-target={"#modal-for-" + props.id}
            >
              Sett status
            </a>
          </div>
        </td>
      </tr>

      <StatusModal postId={props.id} />
    </>
  );
}

function StatusModal({ postId }) {
  return (
    <>
      <div
        class="modal fade"
        id={"modal-for-" + postId}
        tabindex="-1"
        role="dialog"
        aria-label={"modal-for-" + postId}
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id={"modal-for-" + postId}>
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
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
