import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Block from './components/Block';
import Product from './components/product';

function App() {
  return (
    <div className="App" style={{height:"100%", backgroundColor:"red", position:"relative", width:"100%"}}>
    <Navbar />
    <Block featured={featured} />
    <Footer />
    {/* <Product /> */}
    </div>
  );
}


// dummy data
let featured = [
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
  {name: "Carpet",
  price: 3000,
  pic: "https://d2wd2j5j7vio4j.cloudfront.net/data/carpets/Medium/2x/273-15890-150x150-01.jpg"},
]

export default App;
