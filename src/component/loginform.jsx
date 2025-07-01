import { Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showSignupForm, hideModal } from "../redux/slice/formslice";
import SearchModal from "./signupform";

const LoginModal = ({ show }) => {
  const dispatch = useDispatch();
  const Modalvisible = useSelector((state) => state.form.signvisible);

  const handlechange = () => {
    dispatch(showSignupForm());
  };
  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="m-3">
              <Form.Label>Contact Number </Form.Label>
              <Form.Control type="number" placeholder="Contact Number" />

              <Form.Label>Password </Form.Label>
              <Form.Control type="number" placeholder="Password" />
            </Form.Group>
            <Form.Text className="d-block text-center mt-3">
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
          <Button className="bg-success">LOGIN</Button>
          <Button onClick={handleClose} className="bg-success">
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;
