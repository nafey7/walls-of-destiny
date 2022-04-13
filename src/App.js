import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Block from './components/Block';
// import Product from './components/product';
import AddProduct from './components/AddProductAdmin';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
    <Navbar />
    {/* <Block /> */}
    <AddProduct />
    {/* <Profile/> */}
    <Footer />
    
    </div>
  );
}

export default App;
