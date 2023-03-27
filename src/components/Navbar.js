import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Navigation() {
    return (
        <div>
            {/* this is creating an offcanvas box that will slide from left to right showing different links to page*/}

                <Navbar bg = 'light' expand={false} className='mb-3'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false'/>
                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand-false'
                            aria-labelledby='offcanvasNavbar-expand-false'
                            placement='start'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='offcanvasNavbar-expand-false'>
                                    One Jamaican Cookbook
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <Nav.Link href='#recipes'>Recipes</Nav.Link>
                                    <Nav.Link href = '#Favorites'>Your Favorites</Nav.Link>
                                    <Nav.Link href='#about'>About</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand href='#'>One Jamaican Cookbook</Navbar.Brand>
                    </Container>
                </Navbar>
        </div>
    );
}