import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import Header from "./Header";

function LoginForm(){
    
return(
    <div className="LoginFormDiv">
        <Header></Header>
            <Logo></Logo>
        <div className="inputHodler">
            <p>Digite seu e-mail</p>
            <input className="lgninput" type="text" />
        </div>
        <div className="inputHodler">
            <p>Digite a sua senha</p>
            <input className="lgninput" type="password" />
        </div>
        <div className="loginActionOptions">
            <Button nome="Entrar" classe="loginformbrn"></Button>
            <a className="loginA" href="google.com">Criar uma conta</a>
        </div>
        <div class="background-">
  <div class="canvas-container">
    <canvas id="fieldCanvas"> </canvas>
  </div>
</div>
    </div>
)
}

export default LoginForm;