import { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxD = ({name})=>{

    const {name:newName} = useContext(NameContext);
    return(
        <div className="box">
            <h1>Box D</h1>
            <p>name = {name}</p>
            <p>New Name = {newName}</p>

        </div>
    )
};
export default BoxD;