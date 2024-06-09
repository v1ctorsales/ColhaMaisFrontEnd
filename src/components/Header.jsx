import React from "react";
import Button from "./Button";

function Header(){
return(
    <div className="HeaderDiv">
        <div className="HeaderRightSection">
            <Button nome="Acesso" classe="headerbtn"></Button>
            <Button nome="Saiba Mais" classe="headerbtn"></Button>
            <Button nome="Contribua" classe="headerbtn"></Button>
        </div>
    </div>
)
}

export default Header;