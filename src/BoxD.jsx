import { useContext } from "react";
import { NameContext } from "./BoxA";

const BoxD = ({name})=>{

    const {name:newName,theme,toggleTheme} = useContext(NameContext);

    const themeStyle = {
        backgroundColor:theme ==='light'?'#fff':'#333',
        color: theme === 'light'?'#000':'#fff',

    }
    return(
        <div className="box" style={themeStyle}>
            <h1>Box D</h1>
            <p>name = {name}</p>
            <p>New Name = {newName}</p>
            <p>Current Theme = {theme}</p>
            <button onClick = {toggleTheme}>Toggle Theme</button>
            
            

        </div>
    )
};
export default BoxD;