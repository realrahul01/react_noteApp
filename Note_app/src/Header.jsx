import {Container,Nav,Navbar} from 'react-bootstrap';

const Header=()=>{
    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Note_App</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;