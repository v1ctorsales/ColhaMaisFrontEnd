import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

import Background from './imgs/background2.png'
//import Background from './imgs/background3.gif'



function App() {
  return (
    <div className="App">
    <div className='bodyHandle'>
    <LoginForm />
    <div className='backgroundHandle'>
    <img src={Background}></img>
    </div>
    </div>

    <Footer />
    </div>
  );
}

export default App;
