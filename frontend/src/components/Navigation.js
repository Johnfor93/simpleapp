import React from "react";
import Button from "./Button.js";

import "./Navigation.css";

import { PlusIcon } from "@heroicons/react/20/solid";

const Navigation = ({ onClickEvent }) => {
  return (
    <div className="navigation">
      <div className="navigation-info">
        <h2>Daftar Pembayaran</h2>
      </div>
      <div className="navigation-button">
        <Button Icon={<PlusIcon />} text={"Tambah Pembayaran"} classCategory={"add"} onClickEvent={onClickEvent}></Button>
      </div>
    </div>
  );
};

export default Navigation;
