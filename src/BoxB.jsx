// import BoxA from "./BoxA";
import BoxC from "./BoxC";
const BoxB = ({name})=>{
    return(
        <div className="box">
            <h1>Box B</h1>
            <p>Name = {name}</p>
            <BoxC name= {name}/>

        </div>
    )
};
export default BoxB;