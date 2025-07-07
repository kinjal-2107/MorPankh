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
import img from "../assets/LOGO.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../page/style.css";
import LoginModal from "./loginform";
import { showLoginForm } from "../redux/slice/formslice";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.form.isvisible);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className="position-sticky top-0 z-3 bg-white shadow-sm  ">
        <Navbar expand="lg" className="border-bottom">
          <Container className="d-flex justify-content-between">
            {/* Mobile Toggle */}
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="d-lg-none p-1"
              style={{
                width: "30px",
                height: "30px",
                fontSize: "0.7rem",
                border: "1px solid #999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />

            {/* Logo */}
            <Navbar.Brand as={Link} to="/">
              <Image src={img} className="img-fluid" alt="Brand Logo" />
            </Navbar.Brand>

            {/* Desktop Icons */}
            <div className="d-flex align-items-center gap-3 d-none d-lg-flex">
              <span
                size={20}
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => dispatch(showLoginForm())}
              >
                LOGIN
              </span>
              <FaSearch
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => setShowSearch(true)}
              />
              <IoCart size={25} style={{ cursor: "pointer" }} />
            </div>

            {/* Offcanvas Menu - MUST be inside Navbar for toggle to work */}
            <Navbar.Offcanvas
              id="navbarScroll"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="d-lg-none"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  MORPANKH
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/">
                    TOP WEAR
                  </Nav.Link>
                  <Nav.Link as={Link} to="/">
                    BOTTOM WEAR
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Aboutus">
                    ABOUT US
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contactus">
                    CONTACT US
                  </Nav.Link>
                  <Nav.Link onClick={() => dispatch(showLoginForm())}>
                    LOGIN
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        {/* Search Offcanvas */}
        <Offcanvas
          show={showSearch}
          onHide={() => setShowSearch(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SEARCH</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Navigation - Desktop */}
        <div
          className="d-none d-lg-block border-top "
          style={{ backgroundColor: "ivory", boxShadow: "inherit" }}
        >
          <Container className="py-2 d-flex justify-content-center gap-4">
            <Dropdown>
              <Dropdown.Toggle
                as="span"
                className="fw-semibold"
                style={{ cursor: "pointer" }}
              >
                TOP WEAR
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>T-SHIRT</Dropdown.Item>
                <Dropdown.Item>HOODIES</Dropdown.Item>
                <Dropdown.Item>SHIRT</Dropdown.Item>
                <Dropdown.Item>PANT</Dropdown.Item>
                <Dropdown.Item>JOGGERS</Dropdown.Item>
                <Dropdown.Item>DROPDOWN SHIRT</Dropdown.Item>
                <Dropdown.Item>DROPDOWN T-SHIRT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Link to="/" className="text-decoration-none text-dark fw-semibold">
              BOTTOM WEAR
            </Link>
            <span className="fw-semibold">PLUS SIZE</span>
            <Link
              to="/Contactus"
              className="text-decoration-none text-dark fw-semibold"
            >
              PRINT YOUR T-SHIRT
            </Link>
          </Container>
        </div>
      </header>
      <div
        className="d-block d-lg-none position-fixed bottom-0 start-0 w-100 bg-white border-top"
        style={{ zIndex: 999 }}
      >
        <Row className="text-center m-0">
          <Col className="py-2">
            <IoMdHome size={23} style={{ cursor: "pointer" }} />
          </Col>
          <Col className="py-2">
            <FaSearch
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => setShowSearch(true)}
            />
          </Col>
          <Col className="py-2">
            <IoCart size={23} style={{ cursor: "pointer" }} />
          </Col>
          <Col className="py-2">
            <IoPersonCircleSharp size={23} style={{ cursor: "pointer" }} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Header;
