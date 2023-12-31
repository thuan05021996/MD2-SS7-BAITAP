import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAccessibleIcon } from "react-icons/fa";

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing  </Nav.Link>
            
          </Nav>
        </Container>
        <FaAccessibleIcon color='white' fontSize={30}></FaAccessibleIcon>
      </Navbar>
    </div>
  )
}
