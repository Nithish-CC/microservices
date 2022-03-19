import React from "react";
import PostCreate from "./PostCreate";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () =>{
    return (<div className="text-center">Blog App
        <h1 className="text-center">Create Post</h1>
        <PostCreate/>
    </div>);
};