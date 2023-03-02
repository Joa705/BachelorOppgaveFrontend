import React, { useEffect, useState} from "react";
import "../styling/posts.css";
import { BiSearchAlt } from "react-icons/bi";
import { Display } from "./mine_posts";

function Posts() {
  const [displayData, setDisplayData] = useState([]);

  async function getData() {
    await fetch("http://localhost:5296/WeatherForecast")
      .then((data) => data.json())
      .then((res) => {
        setDisplayData(res);
        console.log(res);
      });
  }


  return (
    <>
      <div class="posts-container">
        <div className="container-sm d-flex my-2  ">
          <button
            type="button"
            class="add-post btn btn-primary btn-lg btn-block"
            data-toggle="modal" data-target="#exampleModalCenter"
          >
            Opprett et nytt innlegg
          </button>
        </div>
        <div className="main-content-container d-flex flex-row ">
          <div className="main-content-left">
            <div className="left-inner-1 d-flex flex-row">
              <div className="left-inner-item-1">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Nyeste Først</option>
                  <option value="1">Mest likte</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="left-inner-item-2 ml-2">
                <div class="search-container container-sm d-flex ">
                  <div class="search search-field  d-flex align-items-center justify-content-center ">
                    Søk etter innlegg..
                  </div>
                  <div class="search search-button d-flex align-items-center justify-content-center ">
                    <i>
                      <BiSearchAlt />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-inner-2 mt-2">
              {/*  <div class="list-group w-100">
                <a
                  class="list-group-item list-group-item-action flex-column align-items-start mt-2 mr-4"
                  href="#"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
                <a
                  class="list-group-item list-group-item-action flex-column align-items-start mt-2"
                  href="#"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Bug et sted</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Det er en bug et sted. Donec id elit non mi porta gravida at
                    eget metus. Maecenas sed diam eget risus varius blandit.
                  </p>
                  <small>Kommentarer (50)</small>
                </a>
              </div> */}
              <div class="list-group list-group-main w-100">
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-main-items"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action  list-group-main-items"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action  list-group-main-items"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action  list-group-main-items"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-main-items"
                >
                  <div class="d-flex w-100  justify-content-between">
                    <h5 class="mb-1">Endre farge</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Fargen på forsiden er ikke fin blabla blabla etest adakdka
                    kdasld aklsdla
                  </p>
                  <small>Kommentarer (200)</small>
                </a>
              </div>

              {displayData.map((res) => {
                return (
                  <a href="#">
                    <div
                      className={
                        "data-posts d-flex flex-row align-items-center justify-content-center m-4 post-" +
                        res.weatherId
                      }
                    >
                      <div className="data-items-posts p-2">
                        <p>Date: {res.date}</p>
                      </div>
                      <div className="data-items-posts p-2">
                        <p>TempC: {res.temperatureC}</p>
                      </div>
                      <div className="data-items-posts p-2">
                        <p>TempF: {res.temperatureF}</p>
                      </div>
                      <div className="data-items-posts p-2">
                        <p>Summary: {res.summary}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="main-content-right">
            <div className="right-inner-1">
              <h4 class="ml-2">Kategori</h4>
              <div class="list-group ml-2">
                <a
                  class="list-group-item list-group-item-action"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  <div class="row">
                    <div class="col">Alle</div>
                    <div class="col d-flex justify-content-end">
                      <span class="badge badge-primary badge-pill">800</span>
                    </div>
                  </div>
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  <div class="row">
                    <div class="col">Bugs</div>
                    <div class="col d-flex justify-content-end">
                      <span class="badge badge-primary badge-pill">140</span>
                    </div>
                  </div>
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  <div class="row">
                    <div class="col">Feature</div>
                    <div class="col d-flex justify-content-end">
                      <span class="badge badge-primary badge-pill">90</span>
                    </div>
                  </div>
                </a>
                <a
                  class="list-group-item list-group-item-action"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  <div class="row">
                    <div class="col">Design</div>
                    <div class="col d-flex justify-content-end">
                      <span class="badge badge-primary badge-pill">250</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade add-post-modal"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content modal-content-add-post">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
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

export default Posts;
