import React from "react";
import { UrlConfig } from "../config";
import "../styling/posts.css";
import "../App.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Loader from "../components/loader";
import ErrorNotification from "../components/errorNotification";
import { useQuery } from "react-query";
import Post from "../components/post";

async function fetchPostsData() {
  return await fetch(UrlConfig.serverUrl + "/Post").then((res) => {
    const result = res.json();
    return result;
  });
}

export default function RecentComments() {
  const { isLoading, error, data } = useQuery("fetchPosts", fetchPostsData);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    console.log(error.name + " : " + error.message);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        <ErrorNotification message={error.name + " : " + error.message} />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <section style={{ backgroundColor: "#f0f4e3" }}>
          <MDBContainer className="py-5" style={{ maxWidth: "100%" }}>
            <MDBRow className="justify-content-center">
              <MDBCol md="12" lg="10">
                <MDBCard className="text-dark">
                  <MDBCardBody className="p-4 header-text">
                    <MDBTypography tag="h1" className="mb-2">
                      Asplan Viak <br /> Feedback System
                    </MDBTypography>
                    <p className="fw-light mb-4 pb-2">
                      <br />
                      <h5>
                        Se alle feedbackene med ris, ros og forbedringsforslag
                        sendt til oss
                      </h5>
                    </p>
                    <br />
                  </MDBCardBody>
                  <div className="blank-space-header"></div>

                  {data.map((element) => {

                    return (
                      <>
                        <Post
                          id={element.id}
                          title={element.title}
                          description={element.description}
                          userName={element.user.userName}
                          status={element.status.type}
                          category={element.category.type}
                          votes={element.votes}
                          date={element.created}
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
