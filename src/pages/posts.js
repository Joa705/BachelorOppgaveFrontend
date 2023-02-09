import React, { useEffect, useState } from "react";
import "../styling/posts.css";
import { BiSearchAlt } from "react-icons/bi";
import { UrlConfig } from "../config";
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
        <div className="container-sm d-flex my-2 border ">
          <button
            type="button"
            class="add-post btn btn-primary btn-lg btn-block"
          >
            Opprett et nytt innlegg
          </button>
        </div>
        <div className="main-content-container d-flex flex-row border">
          <div className="main-content-left border">
            <div className="left-inner-1 d-flex flex-row">
              <div className="left-inner-item-1 border">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="left-inner-item-2 border">
                <div class="search-container container-sm d-flex border">
                  <div class="search search-field  d-flex align-items-center justify-content-center ">
                    Søk etter innlegg
                  </div>
                  <div class="search search-button d-flex align-items-center justify-content-center ">
                    <i>
                      <BiSearchAlt />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-inner-2">
                  <div class="list-group w-100" id="list-tab" role="tablist">
                    <a
                      class="list-group-item list-group-item-action flex-column align-items-start mt-2"
                      id="list-home-list"
                      data-toggle="list"
                      href="#list-home"
                      role="tab"
                      aria-controls="home"
                    >
                      <div class="d-flex w-100  justify-content-between">
                        <h5 class="mb-1">Endre farge</h5>
                        <small>3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Fargen på forsiden er ikke fin blabla blabla etest adakdka kdasld aklsdla
                      </p>
                      <small>Kommentarer (200)</small>
                    </a>
                    <a
                      class="list-group-item list-group-item-action flex-column align-items-start mt-2"
                      id="list-home-list"
                      data-toggle="list"
                      href="#list-home"
                      role="tab"
                      aria-controls="home"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Bug et sted</h5>
                        <small>3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Det er en bug et sted.
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </p>
                      <small>Kommentarer (50)</small>
                    </a>
                  </div>
              {displayData.map((res) => {
                return (
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
                );
              })}
            </div>
          </div>
          <div className="main-content-right border">
            <div className="right-inner-1">
              <button onClick={() => getData()}>Get data</button>
            </div>
            <div className="right-inner-2">
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <span class="badge badge-primary badge-pill">140</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <span class="badge badge-primary badge-pill">20</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span class="badge badge-primary badge-pill">59</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  asdas kasdkas
                  <span class="badge badge-primary badge-pill">400</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  test test
                  <span class="badge badge-primary badge-pill">69</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
