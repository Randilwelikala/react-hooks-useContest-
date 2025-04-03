import BoxA from "./BoxA";
import BoxB from "./BoxB";
import BoxD from "./BoxD";


const BoxC =({name})=>{
    return (
        <div className="box">
            <h1> Box C</h1>
            <p>Name= {name}</p>
            <BoxD name ={name}/>

        </div>
    )
}

export default BoxC;