import React, { useState, useRef } from "react";
import { useQuery } from "react-query";
import "../../App.css";
import Loader from "../../components/loader";
import ErrorNotification from "../../components/errorNotification";
import AdminPanel from "../../components/admin/panel";
import { fetchCategories } from "../../functions/category";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Category() {
  const { data: categoryData, status: categoryStatus } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetchCategories(),
  });

  function displayCategoryData() {
    if (categoryStatus == "loading") {
      return <Loader />;
    }

    if (categoryStatus == "success") {
      return;
    }
  }

  return (
    <>
      <div className="Appcontainer">
        <AdminPanel title={"Se eller legg til kategorier"} />
        <div className="blank-space-header" style={{ height: "50px" }}></div>
        <div className="add-new-category d-flex flex-column align-items-center">
          <button>Legg til en ny kategory</button>
        </div>
        <div className="blank-space-header" style={{ height: "50px" }}></div>
        <div className="mainContent" style={{ overflow: "scroll" }}>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col">Bruker</th>
                <th scope="col">Ide</th>
                <th scope="col">Beskrivelse</th>
                <th scope="col">Status</th>
                <th scope="col">Kategori</th>
                <th scope="col">Opprettet</th>
                <th scope="col">Administrer</th>
              </tr>
            </MDBTableHead>
          </MDBTable>
          {categoryStatus === "loading" ? (
            <div className="d-flex flex-column align-items-center">
              <Loader />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
