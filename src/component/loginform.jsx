import { Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showSignupForm, hideModal } from "../redux/slice/formslice";
import SearchModal from "./signupform";
import { useState } from "react";
import "../component/login.css";
import axios from "axios";

const LoginModal = ({ show }) => {
  const initialstate = {
    ContactNumber: "9726365603",
    Password: "Kinjal@2107",
  };

  const [form, setform] = useState(initialstate);
  const handlesubmit = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  // const handle = async () => {
  //   try {
  //     const { ContactNumber, Password } = form;
  //     if (!ContactNumber || !Password) {
  //       alert("Please fill all fields.");
  //       return;
  //     }
  //     const res = await axios.post("http://localhost:5000/api/loginuser", form);
  //     console.log(res);
  //   } catch (error) {
  //     console.log("Not Login");
  //   }
  // };

  const dispatch = useDispatch();
  const Modalvisible = useSelector((state) => state.form.signvisible);

  const handlechange = () => {
    dispatch(showSignupForm());
  };
  const handleClose = async () => {
    dispatch(hideModal());
    try {
      const { ContactNumber, Password } = form;
      if (!ContactNumber || !Password) {
        alert("Please fill all fields.");
        return;
      }
      const res = await axios.post("http://localhost:5000/api/loginuser", form);
      console.log(res);
    } catch (error) {
      console.log("Not Login");
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName="glass-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center fw-bold ">
            LOG IN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Contact Number </Form.Label>
              <Form.Control
                type="text"
                name="ContactNumber"
                value={form.ContactNumber}
                onChange={handlesubmit}
                placeholder="Contact Number"
              />

              <Form.Label className="fw-semibold">Password </Form.Label>
              <Form.Control
                type="password"
                name="Password"
                value={form.Password}
                onChange={handlesubmit}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text className="d-block text-center mt-3 fs-5">
              Don't have an account
              <span
                onClick={handlechange}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Click Here
              </span>
              <SearchModal show={Modalvisible} />
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-success" onClick={handleClose}>
            LOGIN
          </Button>
          <Button onClick={handleClose} className="bg-success">
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
