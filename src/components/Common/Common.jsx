import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Spinner from "../spinner/Spinner";
import "./Common.css";
import { RingLoader,ClipLoader } from "react-spinners";

const Common = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Common;
