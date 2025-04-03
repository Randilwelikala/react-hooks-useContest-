import { useState } from "react";
import BoxB from "./BoxB";

const BoxA  = ()=>{
    const[name,setName]= useState('React');
    return(
        <div className="box">
            <h1>Box A</h1>
            <p>Name = {name}</p>
            <BoxB name={name}/>


        </div>
    )
};

export default BoxA;