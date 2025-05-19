import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import img from "../assets/crpimg.jpg";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  return (
    <Navbar bg="white" variant="light" expand="xl">
      <Navbar.Brand className="ms-3">
        <Image src={img} width={280} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <Nav.Link href="/" className="mx-2 ">
            Home
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Shirt
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            T-shirt
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Pant
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Hoodies
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Combo Offer
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Contact
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Add to cart
          </Nav.Link>
          <Nav.Link href="/" className="mx-2">
            Track Your Order
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
