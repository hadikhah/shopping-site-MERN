import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  BSNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navbar() {
  return (
    <BSNavbar expand="lg" className="bg-body-tertiary">
    <Container>
      <BSNavbar.Brand href="#home">React-Bootstrap</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-BSNavbar-nav" />
      <BSNavbar.Collapse id="basic-BSNavbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
  )
}
