import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Importação do useNavigate
import Button from "./Button";
import Logo from "./Logo";
import Header from "./Header";
import axios from 'axios';

function LoginForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(100);
    const duration = 6000; // Duração total em milissegundos

    const navigate = useNavigate(); // Instanciando o hook de navegação

    useEffect(() => {
        let interval;
        if (error) {
            interval = setInterval(() => {
                setProgress(prevProgress => {
                    const remainingProgress = prevProgress - (100 / (duration / 50)); // Divide a porcentagem restante pelo tempo total do intervalo
                    return Math.max(remainingProgress, 0); // Garante que a barra nunca seja menor que 0
                });
            }, 50); // Intervalo de tempo ajustado para 50ms
        } else {
            setProgress(100);
        }

        return () => clearInterval(interval);
    }, [error]);

    async function verificarLogin() {
        console.log("Verificando login...");

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email !== "" && password !== ""){

            try {
                const response = await axios.post('/api/verificaLogin', { email, password });

                // Quando a resposta é bem-sucedida (status 200)
                if (response.status === 200) {
                    // Redireciona para a página de criação de conta
                    navigate('/Dashboard');
                }
            } catch (error) {
                // Quando ocorre um erro na requisição
                if (error.response) {
                    // Se o status da resposta é 401, tratamos como credenciais inválidas
                    if (error.response.status === 401) {
                        setError(error.response.data.message);  // Credenciais inválidas
                        // Define um timer para limpar a mensagem de erro após 3 segundos
                        setTimeout(() => {
                            setError(null);
                        }, 6800);
                    } else {
                        // Outros erros são tratados aqui
                        setError('Ocorreu um erro: ' + error.response.data.message);
                        // Define um timer para limpar a mensagem de erro após 3 segundos
                        setTimeout(() => {
                            setError(null);
                        }, 6800);
                    }
                } else {
                    console.error('Erro na verificação de login:', error);
                    setError('Ocorreu um erro. Tente novamente.');
                    // Define um timer para limpar a mensagem de erro após 3 segundos
                    setTimeout(() => {
                        setError(null);
                    }, 6800);
                }
            }
                    
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
            {error && (
                <div className="error-container">
                    <p className="error-message">{error}</p>
                    <div className="progress-bar" style={{ width: `${progress}%`, transition: 'width 0.5s linear' }}></div>
                </div>
            )}
            <div className="loginActionOptions">
                <Button onClick={verificarLogin} nome="Entrar" classe="loginformbrn" />
                <a className="loginA" href="/criarConta">Criar uma conta</a>
            </div>

        </div>
    );
}

export default LoginForm;
