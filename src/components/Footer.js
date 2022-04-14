import React from 'react'

export const Footer =() => {
  let footerStyle={
    position: "sticky",
    top: "100vh",
    width: "100%",
    backgroundColor: "#E5E5E5",
    opacity: "90%",
  }
    return (
    <footer className="text-light py-5" style={footerStyle}>
      <div className="row">
        <div className="col">
          <h4 style={{margin:"0px 0px 5px 50px", color:"#a7ac38"}}><b>Walls Of Destiny</b></h4>
          <p className="text text-dark" style={{margin:"0px 0px 0px 50px", color:"#959932"}}>Copywrite &copy; WallsOfDestiny</p>
        </div>
        <div className='col'>
        <button type="button" className="btn btn-primary btn-sm" style={{ margin:"10px"}}><b>About Us</b></button>
        <button type="button" className="btn btn-primary btn-sm" style={{ margin:"10px"}}><b>Contact Us</b></button>
        </div>
      </div>
    </footer>
  )
}
export default Footer
