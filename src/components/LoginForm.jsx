import React from "react";
import Button from "./Button";

function LoginForm(){
    
return(
    <div className="LoginFormDiv">
        <div className="inputHodler">
            <p>Digite seu e-mail</p>
            <input className="lgninput" type="text" />
        </div>
        <div className="inputHodler">
            <p>Digite a sua senha</p>
            <input className="lgninput" type="password" />
        </div>
        <Button nome="Entrar" classe="loginformbrn"></Button>
        <div class="background">
  <div class="canvas-container">
    <canvas id="fieldCanvas"> </canvas>
  </div>
</div>
    </div>
)
}

export default LoginForm;