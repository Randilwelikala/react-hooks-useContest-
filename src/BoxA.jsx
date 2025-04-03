import { useState } from "react";

const BoxA  = ()=>{
    const[name,setName]= useState('React');
    return(
        <div className="box">
            <h1>Box A</h1>
            <p>Name = {name}</p>


        </div>
    )
};

export default BoxA;