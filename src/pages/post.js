import React from "react";
import { useParams } from "react-router-dom";
import { UseAuth } from "../functions/authentication";

function Post() {
    const {id} = useParams()
    const {admin, userName} = UseAuth();
    return (
     <div>
         <h1>Her vises en enkel post</h1>
         <h2>Dette er for eksempel post med id: {id}</h2>

         {admin? 
            <p>DU er en admin {userName}</p> 
            :
            <p>DU er ikke admin</p>
        }
     </div>   
    )

}

export default Post;