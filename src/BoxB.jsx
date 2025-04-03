// import BoxA from "./BoxA";
import BoxC from "./BoxC";
const BoxB = ({name})=>{
    return(
        <div className="box">
            <h1>Box B</h1>
            
            <BoxC name= {name}/>

        </div>
    )
};
export default BoxB;