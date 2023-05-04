import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Navigation from "../pages/Shared/Navigation/Navigation";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
