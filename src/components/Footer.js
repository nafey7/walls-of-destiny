import React from 'react'

export const Footer =() => {
  let footerStyle={
    position: "sticky",
    top: "100vh",
    width: "100%"
  }
    return (
    <footer className="bg-dark text-light py-5" style={footerStyle}>
      <div className="row">
        <p className="text-center">Copywrite &copy; WallsOfDestiny</p>
        <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officiis eaque non inventore optio nemo provident, ipsa eos expedita rerum tempora a eius, error sequi quam doloribus officia ipsam odit.</p>

      </div>
      <div className='d-flex justify-content-center'>
      <button type="button" className="btn btn-primary btn-sm" style={{ margin:"10px"}}><b>About Us</b></button>
      <button type="button" className="btn btn-primary btn-sm" style={{ margin:"10px"}}><b>Contact Us</b></button>
      </div>
    </footer>
  )
}
export default Footer
