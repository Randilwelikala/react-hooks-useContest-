import { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxD = ({name})=>{

    const {name:newName,theme,toggleTheme} = useContext(NameContext);
    return(
        <div className="box">
            <h1>Box D</h1>
            <p>name = {name}</p>
            <p>New Name = {newName}</p>
            <p>Current Theme = {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
};
export default BoxD;