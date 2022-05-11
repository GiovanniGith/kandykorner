import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./Nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const KandyKorner = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};
