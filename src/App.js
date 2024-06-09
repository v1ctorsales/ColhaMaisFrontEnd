// App.js
import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import Home from './components/pages/Home';
import CriarConta from './components/pages/CriarConta';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <CriarConta path="/criarConta" />
      </Router>
    </div>
  );
}

export default App;
