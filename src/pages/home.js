import React, {useContext, useState} from "react";

function Home(props) {
    const [isAdmin, setIsAdmin] = useState(false);
    return(

        <div className="App">
            <h2>Home Page</h2>   
            {isAdmin? <p>Hey</p>:""}
            <button onClick={() => props.loggedin = true}>Click me</button>
        </div>
    )    
}
  

export default Home;