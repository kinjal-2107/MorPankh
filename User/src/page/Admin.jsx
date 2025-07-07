import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => <h2>Dashboard Content</h2>;
const Users = () => <h2>Manage Users</h2>;
const Products = () => <h2>Manage Products</h2>;
const Orders = () => <h2>Orders</h2>;

const AdminPanel = () => {
  return (
    <Router>
      <Container fluid>
        <Row className="vh-100">
          {/* Sidebar */}
          <Col md={2} className="bg-dark text-white p-3">
            <h4 className="mb-4">Admin Panel</h4>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/users" className="text-white">
                Users
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="text-white">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/orders" className="text-white">
                Orders
              </Nav.Link>
            </Nav>
          </Col>

          {/* Content Area */}
          <Col md={10} className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default AdminPanel;
