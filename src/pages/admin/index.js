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
import DisplayPosts, { fetchPosts } from "../../components/admin";
import { UseAuth } from "../../functions/authentication";
import Loader from "../../components/loader";
import ErrorNotification from "../../components/errorNotification";
import "../../App.css";
import AdminPanel from "../../components/admin/panel";


export default function Admin() {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const delaySearchQuery = setTimeout(() => {
      console.log(searchQuery)
      refetchPosts()
    }, 700);

    return () => clearTimeout(delaySearchQuery)
  }, [searchQuery])


  const { token } = UseAuth();

  const { data: posts, status, refetch: refetchPosts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(token, searchQuery, "title"),
  });

  const mapPosts = () => {
    return posts.map((element) => {
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
    e.preventDefault()
    refetchPosts()
  }

  return (
    <>
      <div className="Appcontainer">
        <AdminPanel title={"Her kan du administrere alle innlegg.Åpne, svar, set status eller slett innlegg"}/>
        <div className="blank-space-header"></div>
        <MDBCardBody className="p-4">
          <form action="#" onSubmit={(e) => submitSearch(e)}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Søk..."
                aria-label="Søk.."
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
        </MDBCardBody>

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
          {status == "loading" ? <Loader /> : ""}

          {status == "error" ? <ErrorNotification /> : ""}
          <MDBTableBody>{status == "success" ? mapPosts() : ""}</MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
