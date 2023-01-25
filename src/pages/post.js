import React from "react";
import { useParams } from "react-router-dom";


function Post() {
    const {id} = useParams()

    return (
     <div>
         <h1>Her vises en enkel post</h1>
         <h2>Dette er for eksempel post med id: {id}</h2>
     </div>   
    )

}

export default Post;