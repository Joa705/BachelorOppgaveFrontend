import React, { useEffect, useState } from "react";
import "../styling/posts.css";
import { BiSearchAlt } from "react-icons/bi";
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
        <div class="search-container container-sm  my-3 d-flex border">
          <div class="search search-field  d-flex align-items-center justify-content-center ">
            Søk etter innlegg
          </div>
          <div class="search search-button d-flex align-items-center justify-content-center ">
            <i>
              <BiSearchAlt />
            </i>
          </div>
        </div>

        <div className="main-content-container d-flex flex-row border">
          <div className="main-content-left border">
            <div className="left-inner-1"></div>
            <div className="left-inner-2">
              {displayData.map((res) => {
                return (
                  <div className={"data-posts post-" + res.weatherId}>
                    <div className="data-items-posts">
                      <p>Date: {res.date}</p>
                    </div>
                    <div className="data-items-posts">
                      <p>TempC: {res.temperatureC}</p>
                    </div>
                    <div className="data-items-posts">
                      <p>TempF: {res.temperatureF}</p>
                    </div>
                    <div className="data-items-posts">
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
            <div className="right-inner-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
