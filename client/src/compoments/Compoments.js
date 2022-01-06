import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container, Nav} from "react-bootstrap"

export const Compoments = () => {
    return (
        <div>
        <Navbar className="nav-color" variant="dark">
        <Container className="outer-container">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/sellerhomepage">Become a Seller</Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
