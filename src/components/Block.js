import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Block = () => {
  const [props,setProps] = React.useState([{}]);

  let navigate = useNavigate();
  function productScreen(Name){
    let index = props.findIndex( item => Name === item.name );
    console.log(props[0])
    navigate("/product", {state: props[index]});
  }

    React.useEffect(()=> {
      axios.get('http://localhost:8000/home')
      .then(function(res) {
          setProps(res.data)          
      }, props)
      .catch(function(err) {
          console.log(err);
      })
    }, [])

  return (
    <>
      <h2 style={{textAlign:"center"}}>{props.title}</h2>
             <div class="row" style={{margin:"0 0 55px 0cm"}}>
                 {props.map((item)=>{
                   
                     return(
                       
                        <div class="col-3" style={{textAlign: "center", padding: '2cm', margin:"0 0 0 3cm"}}>
                         <div className="card" style={{width: "22rem", outline: "3px ridge grey"}}>
                         <button onClick={()=>{productScreen(item.name)}}><img className="card-img-top" src={item.pic} alt="Card image cap"/></button>
                         <div className="card-body" style={{backgroundColor:"grey"}}>
                           <p className="card-text"><h4><b>{item.name}</b></h4></p>
                           <h4><b>Rs: {item.sales_price} /-</b></h4>
                         </div>
                       </div>
                       </div>
                     )
                 })}
            </div>
      
    </>
  )
}

export default Block