import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../redux/slice/searchslice";

const Search = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state) => state.search.open);

  const searchClose = () => {
    dispatch(handleClose());
  };

  return (
    <Offcanvas show={isSearchOpen} onHide={searchClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>SEARCH</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <input type="text" placeholder="Search..." className="form-control" />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Search;
