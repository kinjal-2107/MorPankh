import { Route, Routes } from "react-router-dom";
import Homepage from "../page/home";
import Layout from "../Layout/endlayout";
import Product from "../page/product";
import Contactus from "../page/contactus";
import Aboutus from "../page/aboutus";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
};
export default routes;
