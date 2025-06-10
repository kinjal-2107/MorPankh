import { Route, Routes } from "react-router-dom";
import Homepage from "../page/home";
import Layout from "../Layout/endlayout";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Homepage" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};
export default routes;
