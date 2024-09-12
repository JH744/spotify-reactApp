import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Component/Header";
import MyPlaylist from "./Component/MyPlaylist.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
const Layout = () => {
  return (
    <div className="bg-black">
      <Header />
      <div className={"flex"}>
        <MyPlaylist />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
