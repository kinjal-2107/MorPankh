import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import img from "../assets/Brand.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../page/style.css";
import LoginModal from "./loginform";
import { showLoginForm } from "../redux/slice/formslice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.form.isvisible);

  return (
    <>
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="d-lg-none toggle xs-m-0"
          />
          <Navbar.Offcanvas
            id="navbarScroll"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="ts">
                MORPANKH
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link href="/">COLLECTION</Nav.Link>
                <Nav.Link href="/">TRACK ORDER</Nav.Link>
                <Nav.Link href="/">SUPPORT</Nav.Link>
                <Nav.Link href="/">ABOUT US</Nav.Link>
                <Nav.Link href="/">CONTACTUS</Nav.Link>
                <Nav.Link onClick={() => dispatch(showLoginForm())}>
                  LOGIN
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className="mx-auto d-flex justify-content-center">
            <Image src={img} width={350} height={50} className="logo " />
          </Navbar.Brand>

          <Nav className="d-flex ">
            <Nav.Link
              as="span"
              className="ms-5 ms-md-0 me-xs-0 text-md-dark d-none d-lg-block "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
                onClick={() => dispatch(showLoginForm())}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <LoginModal show={isModalVisible} />
            </Nav.Link>

            <Nav.Link href="/" className="p-xs-0 ms-md-0 text-md-dark ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search-heart"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
              </svg>
            </Nav.Link>
            <Nav.Link href="/" className="p-xs-0 ms-md-0 text-md-dark ">
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
        </Container>
      </Navbar>
      <Row className="nav-links d-none d-lg-block m-0 p-0 ">
        <Container className="d-flex justify-content-center py-2">
          <Col md={2} xxl={1}>
            COLLECTION
          </Col>
          <Col md={2} xxl={1}>
            TRACK ORDER
          </Col>
          <Col md={2} xxl={1}>
            SUPPORT
          </Col>
          <Col md={2} xxl={1}>
            ABOUT US
          </Col>
          <Col md={2} xxl={1}>
            CONTACT US
          </Col>
        </Container>
      </Row>
    </>
  );
};

export default Header;
