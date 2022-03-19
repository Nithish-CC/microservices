import axios from "axios";
import React, { useState } from "react"; 

export default () =>{
    const [title,setTitle]=useState("")
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/posts',{title:title}).then((res)=>console.log(res.data))
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <div className="form-group container">
                <label className="text-center">Title</label>
                 <input value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/><br></br>
                 <button className="btn btn-primary">Submit</button>
            </div>
         
        </form>
        </>
    )
}