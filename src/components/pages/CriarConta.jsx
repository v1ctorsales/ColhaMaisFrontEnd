import React, { useRef, useState } from "react";
import Button from "../Button";
import Logo from "../Logo";
import Header from "../Header";
import axios from 'axios';
import Footer from "../Footer";
import Background from '../../imgs/background4.jpg'

function CriarConta() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState(null);

  const criarContaUsuario = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
  
    if (!isValidEmail(email)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }
  
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
  
    try {
      const response = await axios.post('/api/criaConta', { email, password });
      const { message, redirectUrl } = response.data;
  
      // Exibe a mensagem retornada pelo servidor
      alert(message);
  
      // Redireciona para a página de login se a criação da conta foi bem-sucedida
      if (response.status === 200 && redirectUrl) {
        // Aguarda 2 segundos antes de redirecionar
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 2000); // 2 segundos
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      alert('Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
    }
  };
  

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="App">
    <div className='bodyHandle'>
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
      <div className="inputHodler">
        <p>Confirme sua senha</p>
        <input ref={confirmPasswordRef} className="lgninput" type="password" />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="loginActionOptions">
        <Button onClick={criarContaUsuario} nome="Criar Conta" classe="loginformbrn" />
        <a className="loginA" href="/">Já possui uma conta? Faça login</a>
      </div>
    </div>
    <div className='backgroundHandle'>
        <img src={Background} alt="Background"></img>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default CriarConta;
