import React, { useEffect, useState } from "react";
import { UrlConfig } from "../config";
import "../styling/posts.css";
import "../App.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/footer";

function PostDisplay(props) {
  const navigate = useNavigate();

  const postsId = props.id;
  const postsRef = "posts/id/";

  const randImg =
    "https://mdbootstrap.com/img/new/avatars/" +
    Math.floor(Math.random() * 15) +
    ".jpg";

  return (
    <>
    <a className="post-anchor" href={postsRef + postsId}>
      <MDBCardBody
        className="p-4 posts-single-post"
      >
        <div className="d-flex flex-start">
          <MDBCardImage
            className="rounded-circle shadow-1-strong me-3"
            src={randImg}
            alt="avatar"
            width="60"
            height="60"
          />
          <div>
            <MDBTypography tag="h6" className="fw-bold mb-1">
              {props.userName}
            </MDBTypography>
            <div className="d-flex align-items-center mb-3">
              <p className="mb-0">
                <h4>{props.title}</h4>
                {props.description}
              </p>
              
              <a href="#!" className="link-muted">
                <MDBIcon fas icon="pencil-alt ms-2" />
              </a>
              
              <a href="#!" className="text-success">
                <MDBIcon fas icon="redo-alt ms-2" />
              </a>
              <a href="#!" className="link-danger">
                <MDBIcon fas icon="heart ms-2" />
              </a>
            </div>
            <div className="d-flex flex-start mt-4">
                          <a className="me-3" href="#">
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp"
                              alt="avatar"
                              width="65"
                              height="65"
                            />
                          </a>

                          <div className="flex-grow-1 flex-shrink-1">
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-1">
                                  Simona Disa{" "}
                                  <span className="small">- 3 hours ago</span>
                                </p>
                              </div>
                              <p className="small mb-0">
                                Ikke enig
                              </p>
                            </div>
                          </div>
                        </div>
            
          </div>
        </div>
      
        
      </MDBCardBody>
      </a>

    </>
  );
}

export default function RecentComments() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    async function fetchPostsData() {
      try {
        await fetch(UrlConfig.serverUrl + "/Post")
          .then((res) => res.json())
          .then((data) => setPostsData(data));
      } catch {
        setPostsData([
          {
            id: "15cfcc42-5e5e-42d0-94f4-d72a37542e9a",
            title: "Drit bra animasjoner",
            description:
              "10 av 10 animasjoner på forsiden. Dere har flinke utviklere",
            voteCount: 100,
            created: "2023-03-17T10:24:37.650147Z",
            user: {
              userId: "b2702bec-ad1a-40cf-8fd5-650c132d7bd6",
              userName: "Admin",
              email: "admin@admin.admin",
            },
            category: {
              categoryId: "5a900b35-9b8f-43fe-8ca6-f1bec9e7dd34",
              type: "Ros",
            },
            status: {
              statusId: "ea167951-c80b-41ba-9c21-c44dbb4bed91",
              type: "Pending",
            },
          },
          {
            id: "f0301cda-60aa-48f7-9396-f9e044a67dac",
            title: "Elendig UX design",
            description: "Kunne gjort det mye bedre selv",
            voteCount: 100,
            created: "2023-03-17T10:24:37.650028Z",
            user: {
              userId: "482a49d6-a52b-4975-85d9-9297f6589c2f",
              userName: "Hans Henrik",
              email: "hans@henrik.no",
            },
            category: {
              categoryId: "0fc1250c-e6c3-4e98-88ba-1cba375ca414",
              type: "Ris",
            },
            status: {
              statusId: "1b84119f-dc28-4ab8-92b8-7398311ea13c",
              type: "Pending",
            },
          },
        ]);
      }
    }

    fetchPostsData();
  }, []);
  return (
    <>
    <div className="container">
    <section style={{ backgroundColor: "#f0f4e3" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "100%"}}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4 header-text">
                <MDBTypography tag="h1" className="mb-2">
                 Asplan Viak <br /> Feedback System
                </MDBTypography>
                <p className="fw-light mb-4 pb-2">
                  <br />
                  <h5>Se alle feedbackene med ris, ros og forbedringsforslag sendt
                  til oss</h5>
                </p>
                <br />
              </MDBCardBody>
              <div className="blank-space-header">
              </div>


                  {postsData.map((element) => {
                    var newDate = new Date(element.created);

                    return (
                      <>
                        <PostDisplay
                          id={element.id}
                          title={element.title}
                          description={element.description}
                          userName={element.user.userName}
                          status={element.status.type}
                          category={element.category.type}
                          votes={element.votes}
                          date={newDate.toDateString()}
                        />
                        <div className="blank-space"></div>
                      </>
                    );
                  })}
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </>
  );
}
