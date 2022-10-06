import React from "react";
import "./manageAcc.css";
import { BiSearch } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import Accounts from "./Account/Accounts";

const ManageAcc = () => {
  return (
    <div className="acc_container">
      <h4>Manage Accounts</h4>
      <div className="acc_searchTab">
        <div className="acc_searchInput">
          <BiSearch className="acc_search" />
          <input placeholder="search here..." className="acc_input" />
        </div>
        <button className="acc_downloadBtn">
          <HiDownload /> Download Report
        </button>
      </div>
      <Accounts />
    </div>
  );
};

export default ManageAcc;
