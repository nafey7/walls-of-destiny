import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Block from './components/Block';


function App() {
  return (
    <div className="App" style={{height:"100%", backgroundColor:"red", position:"relative", width:"100%"}}>
    <Navbar />
    <Block />
    
    <Footer />
    
    </div>
  );
}

export default App;
