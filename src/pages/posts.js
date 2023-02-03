import React from "react";
import { useParams } from "react-router-dom";

function Posts() {
  async function getData() {
    await fetch("http://localhost:5296/WeatherForecast").then((data) =>
      data.json()
    ).then((res) => console.log(res));
  }
  return (
    <>
      <h1>Posts page hvor alle posts skal vises</h1>
      <button onClick={() => getData()}>Get data</button>
    </>
  );
}

export default Posts;
