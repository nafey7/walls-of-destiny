import Navbar from './Navbar';
import Footer from './Footer';


function Product(props) {
    let wrapper={
        width:"100%",
        height:"100%",
        display:"grid",
        gridtemplatecolumns:"65% 35%",
    }
    let leftcontainer = {
        width: "100%",
        backgroundcolor: "#EDF3F8",
        height: "100%",
        zindex: "1"
    }
    let rightcontainer = {
        width: "100%",
        height: "100%",
        backgroundcolor: "#B6E2F8",
        zindex: "10"
    }
    return (
    <div className="small-container">
    <h2 style={{textAlign:"center"}}>Featured Products</h2>
    <div className="row" style={{textAlign: "center", marginBottom: '3cm'}}>
    <div className="col-4">
        {props.featured.map((item)=>{
            return(
                <> 
                 <a><img src={item.pic} style={{height:"150px", width:"150px"}}/></a>
                 <h5>{item.name} <b>Rs: {item.price}</b></h5>
                 
                </>
            )
        })}
    </div>
    </div>
</div>
  );
}

export default Product;
