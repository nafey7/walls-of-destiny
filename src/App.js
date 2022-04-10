import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Block from './components/Block';
// import Product from './components/product';
import AddProduct from './components/AddProductAdmin';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{height:"100%", backgroundColor:"red", position:"relative", width:"100%"}}>
    <Navbar />
    {/* <Block /> */}
    {/* <AddProduct /> */}
    
    <Footer />
    
    </div>
  );
}

export default App;
