import React from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export default function Navb() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" gap={5}>
                <Container fluid>
                    <Navbar.Brand href="#" >E-SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '90px' }}
                        navbarScroll
                    > 
                    <Nav.Link >About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success text-white">Search</Button>
                    </Form>
                    <Nav.Link >My Account</Nav.Link>
                    </Navbar.Collapse>
                    <Nav>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-white" size="lg"/> 
                    </Nav>                    
                </Container>
            </Navbar>           
        </div>
    )
}
