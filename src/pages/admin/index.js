import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import DisplayPosts from "../../components/admin";
import { fetchPosts } from "../../functions/admin";
import { UseAuth } from "../../functions/authentication";
import Loader from "../../components/loader";
import ErrorNotification from "../../components/errorNotification";
import "../../App.css";
import AdminPanel from "../../components/admin/panel";
import { fetchCategories } from "../../functions/category";

export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");
  const [statusType, setStatusType] = useState("all");
  const { token } = UseAuth();

  useEffect(() => {
    const delaySearchQuery = setTimeout(() => {
      console.log(searchQuery);
      refetchPosts();
    }, 700);

    return () => clearTimeout(delaySearchQuery);
  }, [searchQuery, categoryId, statusType]);

  const {
    data: posts,
    status,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(token, searchQuery, categoryId, statusType),
  });


  const {data: categories, status: categoryStatus} = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchCategories()
  })


  const mapPosts = () => {

    if(posts.length == 0) {
      return (
        <div>No posts</div>
      )
    }
    
    return posts?.map((element) => {
      let nyDato = new Date(element.created).toDateString();

      return (
        <DisplayPosts
          id={element.id}
          title={element.title}
          category={element.category.type}
          description={element.description}
          userName={element.user.userName}
          status={element.status.type}
          created={nyDato}
          email={element.user.email}
        />
      );
    });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    refetchPosts();
  };
 
  return (
    <>
      <div className="Appcontainer">
        <AdminPanel
          title={
            "Her kan du administrere alle innlegg.Åpne, svar, set status eller slett innlegg"
          }
        />
        <div className="blank-space-header"></div>
        <MDBCardBody className="p-4">
          <form action="#" onSubmit={(e) => submitSearch(e)}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Søk etter tittel eller bruker"
                aria-label="Søk etter tittel eller bruker"
                aria-describedby="basic-addon2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">
                  Button
                </button>
              </div>
            </div>
          </form>

          <div>
            <p>Velg en Kategori:</p>
            <select
              className="form-control"
              aria-label="Floating label select example"
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="all" selected="selected">
                -- Alle --
              </option>
              {categoryStatus == "success" ? 
              categories?.map((element) => {
                return <option value={element.id}>{element.type}</option>;
              })
              :
              ""
              }
              
            </select>
          </div>

          <div>
            <p>Velg en Status:</p>
            <select
              className="form-control"
              aria-label="Floating label select example"
              onChange={(e) => setStatusType(e.target.value)}
            >
              <option value="all" selected="selected">
                -- Alle --
              </option>
              <option value={"Venter"}>Venter</option>
              <option value={"Besvart"}>Besvart</option>
              <option value={"Avlyst"}>Avlyst</option>
              
            </select>
          </div>
        </MDBCardBody>
        <div className="mainContent" style={{overflow: "scroll"}}>
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Bruker</th>
              <th scope="col">Ide</th>
              <th scope="col">Status</th>
              <th scope="col">Kategori</th>
              <th scope="col">Opprettet</th>
              <th scope="col">Administrer</th>
            </tr>
          </MDBTableHead>
          {status == "loading" ? <Loader /> : ""}

          {status == "error" ? <ErrorNotification /> : ""}
          <MDBTableBody>{status == "success" ? mapPosts() : ""}</MDBTableBody>
        </MDBTable>
      </div>
      <div className="blank-space-header"></div>
        </div>
    </>
  );
}
