import { Navbar, Container, Nav } from "react-bootstrap"



const MyNav = function(){
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNav