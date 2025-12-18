import React from "react";
import React_DOM from "react-dom/client";
const Farm=(props)=>{
    return(
        <div>
                    <h2>Animal:{props.animal}</h2>
                    <h2>type:{props.type}</h2>
                    <h2>crops:{props.crops}</h2>
        </div>
    )
}
export default Farm;