import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Layout from "../Layout/endlayout";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};
export default routes;
