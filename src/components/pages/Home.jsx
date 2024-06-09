import LoginForm from "../LoginForm";
import Background from '../../imgs/background2.png'
import Footer from "../Footer";

function Home(){
    return (
        <div className="App">
        <div className='bodyHandle'>
        <LoginForm />
        <div className='backgroundHandle'>
        <img src={Background}  alt="Background"></img>
        </div>
        </div>
        <Footer />
        </div>
      );
}

export default Home;