import React from "react";
import { useParams } from "react-router-dom";


function Posts() {
    const {id} = useParams()

    return <h1>This is posts {id}</h1>
}

export default Posts;