import { Route, Routes } from "react-router-dom";
import Home from "../page/Homepage";
import Layout from "../Layout/endlayout";
import Product from "../page/product";
import Contactus from "../page/contactus";
import Aboutus from "../page/aboutus";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
};
export default routes;
