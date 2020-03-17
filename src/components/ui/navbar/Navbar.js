import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand as="div"><Link to="/">Shopping List</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as="div"><Link to="/">Inicio</Link></Nav.Link>
                <Nav.Link as="div"><Link to="/alimentos">Alimentos</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigation