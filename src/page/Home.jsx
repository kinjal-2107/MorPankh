import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/img.png";
import upper from "../assets/shirt1.jpg";
import bottomwear from "../assets/bottomwear.jpg";
import { Button, Card, Row, Col, Carousel, Container } from "react-bootstrap";
import "../page/style.css";
import { RiMessage3Line } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { IoStopwatchSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import esse from "../assets/esse.jpg";
import bottom from "../assets/bottom.jpg";
import tshirt from "../assets/tshirt.webp";
import shirt from "../assets/dh95f_512.webp";
import drop from "../assets/Dropdown.webp";
import vd1 from "../assets/vd1.mp4";
import vd2 from "../assets/vd2.mp4";
import vd3 from "../assets/vd3.mp4";
import vd4 from "../assets/vd4.mp4";
import vd5 from "../assets/vd5.mp4";
import vd6 from "../assets/vd6.mp4";

const Home = () => {
  return (
    <>
      <OwlCarousel
        className="owl-theme "
        loop
        autoplay
        dots={false}
        autoplayTimeout={3000}
        items={1}
      >
        <div>
          <img
            className="img-fluid "
            style={{ maxHeight: "560px", width: "100%" }}
            src={img1}
            alt="img1"
          />
        </div>
        <div>
          <img
            className="img-fluid "
            style={{ maxHeight: "560px", width: "100%" }}
            src={img1}
            alt="img2"
          />
        </div>
        <div>
          <img
            className="img-fluid"
            style={{ maxHeight: "560px", width: "100%" }}
            src={img1}
            alt="img3"
          />
        </div>
      </OwlCarousel>
      <Row className="justify-content-center mt-5 mx-0 border-bottom">
        <Col
          xs={10}
          sm={6}
          md={4}
          className="mb-4 d-flex justify-content-center"
        >
          <Card className="w-100 border-5">
            <Card.Img variant="top" src={upper} height={400} />
            <Card.Body className="text-center">
              <Card.Title>UPPER WEAR</Card.Title>
              <Button variant="success">EXPLORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={10}
          sm={6}
          md={4}
          className="mb-4 d-flex justify-content-center"
        >
          <Card className="w-100 border-5 ">
            <Card.Img variant="top" src={bottomwear} height={400} />
            <Card.Body className="text-center">
              <Card.Title>BOTTOM WEAR</Card.Title>
              <Button variant="success">EXPLORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Container>
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          autoplayTimeout={2000}
          dots={false}
          margin={10}
          responsive={{
            0: { items: 1 }, // 1 video on mobile
            576: { items: 2 }, // 2 videos on small screens
            768: { items: 3 }, // 3 videos on tablets
            992: { items: 4 }, // 4 videos on desktops
            1200: { items: 5 }, // 5 videos on large desktops
          }}
        >
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd1} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd2} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd3} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd4} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd5} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <video className="w-100 h-100" autoPlay loop muted playsInline>
              <source src={vd6} type="video/mp4" />
            </video>
          </div>
        </OwlCarousel>
      </Container>

      <div className="border my-5 ">
        <h1 className="text-center ">Shop by Category</h1>
        <Row className="m-0 my-5">
          <Col>
            <img width={300} src={esse} />
            <div style={{ textAlign: "center" }}>HOODIES</div>
          </Col>
          <Col>
            <img width={300} src={bottom} />
            <div style={{ textAlign: "center" }}>BOTTOMS</div>
          </Col>
          <Col>
            <img width={300} src={tshirt} />
            <div style={{ textAlign: "center" }}>DROPDOWNS</div>
          </Col>
          <Col>
            <img width={300} src={shirt} />
            <div style={{ textAlign: "center" }}>SHIRT</div>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <Row className="m-0  justify-content-center my-5 text-center text-md-start">
        <Col xs={12} sm={6} lg={3} className="mb-4">
          <div className="d-flex align-items-center">
            <RiMessage3Line size={50} className="me-3 text-primary" />
            <div>
              <div>
                <strong>Customer Support</strong>
              </div>
              <div className="text-muted">Mon-Sun, 10am - 10pm</div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} lg={3} className="mb-4">
          <div className="d-flex align-items-center">
            <FaBoxOpen size={50} className="me-3 text-success" />
            <div>
              <div>
                <strong>COD Available</strong>
              </div>
              <div className="text-muted">On Almost All the Pincodes</div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} lg={3} className="mb-4">
          <div className="d-flex align-items-center">
            <IoStopwatchSharp size={50} className="me-3 text-warning" />
            <div>
              <div>
                <strong>Fast Shipping</strong>
              </div>
              <div className="text-muted">Ship Within 24 hr</div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={6} lg={3} className="mb-4">
          <div className="d-flex align-items-center">
            <FaTruck size={50} className="me-3 text-danger" />
            <div>
              <div>
                <strong>Free Shipping</strong>
              </div>
              <div className="text-muted">On 95% Of the Products</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
