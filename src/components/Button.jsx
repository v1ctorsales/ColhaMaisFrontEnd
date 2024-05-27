import React from "react";

function Button(props){
return(
    <div className="divButton">
        <button className={`btn ${props.classe}`}>{props.nome}</button>
    </div>
)
}

export default Button;