import React from "react";
import Navigation from "../pages/Shared/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
