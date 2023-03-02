import React, {useState} from 'react'

export function Display(props) {
    return (
        <>
        <div style={{border : "2px solid black"}}>

        <h1>Id {props.id}</h1>
        <h1>Navn {props.name}</h1>
        <button>En knapp</button>
        </div>

        </>
    )
}


export default function MyPosts() {
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
        <button onClick={() => getData()}>display</button>
     {displayData.map(element => {
            return (
                <Display id={element.weatherId} name={element.summary}/>
            )
        
     })
    }
  
         <h1>Her kommer mine posts</h1>
    </>
    )
}