import {
  Container,
  Nav,
  Navbar,
  Image,
  Offcanvas,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Contactus from "../page/contactus";
import Aboutus from "../page/aboutus";
import img from "../assets/Brand.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../page/style.css";
import LoginModal from "./loginform";
import { showLoginForm } from "../redux/slice/formslice";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.form.isvisible);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="position-sticky top-0 z-3 bg-white">
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
                  <Nav.Link to="/Aboutus">ABOUT US</Nav.Link>
                  <Nav.Link to="/Contactus">CONTACTUS</Nav.Link>
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
                <FaUser size={20} onClick={() => dispatch(showLoginForm())} />
                <LoginModal show={isModalVisible} />
              </Nav.Link>
              <Nav.Link className="p-xs-0 ms-md-0 text-md-dark ">
                <FaSearch size={20} onClick={handleShow} />
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>SEARCH</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav.Link>
              <Nav.Link href="/" className="p-xs-0 ms-md-0 text-md-dark ">
                <BsFillBagHeartFill size={22} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Row className="nav-links d-none d-lg-flex m-0 p-0">
          <Container className="d-flex justify-content-center align-items-center py-2 gap-5">
            <Col xs="auto">
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  className="fs-6 fw-medium "
                  style={{ cursor: "pointer" }}
                >
                  COLLECTION
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>T-SHIRT</Dropdown.Item>
                  <Dropdown.Item>HOODIES</Dropdown.Item>
                  <Dropdown.Item>SHIRT</Dropdown.Item>
                  <Dropdown.Item>PANT</Dropdown.Item>
                  <Dropdown.Item>JOGGERS</Dropdown.Item>
                  <Dropdown.Item>DROPDOWM SHIRT</Dropdown.Item>
                  <Dropdown.Item>DROPDOWN T-SHIRT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col xs="auto" className="fs-6  text-dark">
              <Link to="/Aboutus" className=" text-decoration-none text-dark">
                ABOUT US
              </Link>
            </Col>
            <Col xs="auto" className="fs-6  text-dark">
              TRACK ORDER
            </Col>
            <Col xs="auto" className="fs-6  text-dark">
              <Link to="/Contactus" className=" text-decoration-none text-dark">
                CONTACT US
              </Link>
            </Col>
          </Container>
        </Row>
      </div>
    </>
  );
};

export default Header;
