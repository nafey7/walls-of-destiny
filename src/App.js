import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Block from './components/Block';
import ChatBot from './components/ChatBot';
import ErrorPage from './components/ErrorPage';
import AddProduct from './components/AddProductAdmin';
import Cart from './components/Cart';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%"}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Block featured={featured}/>}/>
            <Route path="/AddProduct" element={<AddProduct/>}/>
            <Route path="/cart" element={<Cart featured={featured}/>}/>
            <Route path="*" element={<ErrorPage message={{message: "404 not found"}}/>}/>
          </Routes>    
          <ChatBot />
          <Footer />
        </div>
    </Router>        
    
  );
}
// dummy data
let prod = {name: "Carpet",
id: 0,
price: 3000,
color: "Black",
dim: "3x5x6",
details: "nice product pls buy",
pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"}
let featured = [
  {name: "Carpet",
  id: 0,
  price: 4000,
  color: "Black",
  dim: "3x5x6",
  details: "nice product pls buy",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},

  {name: "Carpet2",
  id: 1,
  price: 3000,
  color: "Red",
  dim: "3x5x6",
  details: "nice product pls buy now",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet3S",
  price: 1000,
  id: 2,
  color: "Red",
  dim: "3x5x6",
  details: "nice product pls buy now",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet2",
  price: 3000,
  id: 3,
  color: "Red",
  dim: "3x5x6",
  details: "nice product pls buy now",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet2",
  price: 3000,
  color: "Red",
  dim: "3x5x6",
  details: "nice product pls buy now",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet2",
  price: 3000,
  color: "Red",
  dim: "3x5x6",
  details: "nice product pls buy now",
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  
]

export default App;
