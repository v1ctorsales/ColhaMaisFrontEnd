// components/CriarConta.js
import React from 'react';

function CriarConta() {
  return (
    <div className="CriarConta">
      <h2>Criar Conta</h2>
      <form>
        <div className="inputHolder">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="formInput" />
        </div>
        <div className="inputHolder">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="formInput" />
        </div>
        <div className="inputHolder">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="formInput" />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
}

export default CriarConta;
