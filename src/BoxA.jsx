import { createContext, useState } from "react";
import BoxB from "./BoxB";

export const NameContext = createContext();

const BoxA  = ()=>{
    const[name,setName]= useState('React');
    const[theme,setTheme] = useState('light');

    const toggleTheme = ()=>{
        
    }
    return(
        <div className="box">
            <h1>Box A</h1>
            <p>Name = {name}</p>
            <NameContext.Provider value={{name}}/>
            <BoxB name={name}/>
            <NameContext.Provider/>


        </div>
    )
};

export default BoxA;