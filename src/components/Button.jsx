import React from "react";

function Button(props) {
    return (
        <div className="divButton">
            <button className={`btn ${props.classe}`} onClick={props.onClick}>
                {props.nome}
            </button>
        </div>
    );
}

export default Button;
