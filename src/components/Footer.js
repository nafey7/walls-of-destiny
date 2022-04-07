import React, {useState} from 'react'
import { ReactComponent as Logo } from './logo.svg';

export const Footer =() => {
  let footerStyle={
    position: "absolute",
    top: "100vh",
    width: "100%"
  }
    return (
    <footer className="bg-dark text-light" style={footerStyle}>
        <p className="text-center">Copywrite &copy; WallsOfDestiny</p>
    </footer>
  )
}
export default Footer
