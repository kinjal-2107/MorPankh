import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import img from "../assets/crpimg.jpg";
import Badge from "react-bootstrap/Badge";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../page/style.css";

const Header = () => {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand className="">
            <Image src={img} width={300} className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>MorPankh</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark ">
                  Home
                </Nav.Link>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark">
                  Shirt
                </Nav.Link>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark">
                  T-shirt
                </Nav.Link>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark">
                  Pant
                </Nav.Link>

                <Form className="d-flex search ms-0 ">
                  <InputGroup>
                    <InputGroup.Text id="search-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-1.707 4.293a6 6 0 1 0-1.414 1.414l3.853 3.854a1 1 0 0 0 1.414-1.414l-3.853-3.854z" />
                      </svg>
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-icon"
                    />
                  </InputGroup>
                </Form>

                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark ">
                  CONTACTUS
                </Nav.Link>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark ">
                  LOGIN
                </Nav.Link>
                <Nav.Link href="/" className="ms-5 ms-md-0 text-md-dark ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                  </svg>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
