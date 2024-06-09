import React, { useRef } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Header from "./Header";
import axios from 'axios';

function LoginForm() {
    // Criação de refs para os inputs
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    console.log("b")

    async function verificarLogin() {
        console.log("a")
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        try {
            const response = await axios.post('/api/verificaLogin', { email, password });
    
            if (response.status === 200) {
                alert(response.data.message);  // Login bem-sucedido
            } else {
                alert(response.data.message);  // Credenciais inválidas
            }
        } catch (error) {
            console.error('Erro na verificação de login:', error);
            alert('Ocorreu um erro. Tente novamente.');
        }
    }

    return (
        <div className="LoginFormDiv">
            <Header />
            <Logo />
            <div className="inputHodler">
                <p>Digite seu e-mail</p>
                <input ref={emailRef} className="lgninput" type="text" />
            </div>
            <div className="inputHodler">
                <p>Digite a sua senha</p>
                <input ref={passwordRef} className="lgninput" type="password" />
            </div>
            <div className="loginActionOptions">
                <Button onClick={verificarLogin} nome="Entrar" classe="loginformbrn" />
                <a className="loginA" href="/criarConta">Criar uma conta</a>
            </div>
            <div className="background-">
                <div className="canvas-container">
                    <canvas id="fieldCanvas"> </canvas>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
