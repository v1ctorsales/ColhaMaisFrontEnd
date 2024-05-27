import React from "react";
import Button from "./Button";
import Logo from "./Logo";

function Header(){
return(
    <div className="HeaderDiv">
        <Logo></Logo>
        <div className="HeaderRightSection">
            <Button nome="Acesso" classe="headerbtn"></Button>
            <Button nome="Saiba Mais" classe="headerbtn"></Button>
            <Button nome="Contribua" classe="headerbtn"></Button>
        </div>
    </div>
)
}

export default Header;