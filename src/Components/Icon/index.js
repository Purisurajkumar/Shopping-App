import React from "react";
const Icon=({name,size,color,onClick})=>{
    return(
        <i class={`fa fa-${name} fa-${size}`} style={{color:color}} onClick={onClick}/>
    )
}
export default Icon