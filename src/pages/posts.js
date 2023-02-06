import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

      {displayData.map((res) => {
        return(
            <div className="dataDiv">
                <p>{res.date}</p>
            </div>
        )
      })}
    </>
  );
}

export default Posts;
