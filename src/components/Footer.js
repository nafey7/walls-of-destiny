import React from 'react'

export const Footer =() => {
  let footerStyle={
    position: "sticky",
    top: "100vh",
    width: "100%"
  }
    return (
    <footer className="bg-dark text-light py-5" style={footerStyle}>
        <p className="text-center">Copywrite &copy; WallsOfDestiny</p>
        <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officiis eaque non inventore optio nemo provident, ipsa eos expedita rerum tempora a eius, error sequi quam doloribus officia ipsam odit.</p>
    </footer>
  )
}
export default Footer
