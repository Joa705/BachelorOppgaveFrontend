import React, { useEffect, useState } from "react";
import "../styling/posts.css";

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
      <h1>Posts page hvor alle posts skal vises</h1>
      <button onClick={() => getData()}>Get data</button>

      <div className="main-posts">
        <div className="container">
          <div className="row">
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
          </div>
          <div class="d-flex flex-row-reverse">
            <div class="p-2">Flex item 1</div>
            <div class="p-2">Flex item 2</div>
            <div class="p-2">Flex item 3</div>
          </div>
        </div>
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
    </>
  );
}

export default Posts;
