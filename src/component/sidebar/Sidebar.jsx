import React from "react";
import "./sidebar.css";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineDashboard, MdAssignment } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { RiStackLine } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import SideBarContent from "./slideContent/SideBarContent";

const Sidebar = () => {
  let sideBarList = [
    {
      icon: <MdOutlineDashboard />,
      title: "Dashboard",
    },
    {
      icon: <TbReport />,
      title: "Manage Loan Request",
    },
    {
      icon: <RiStackLine />,
      title: "Inventory System",
    },
    {
      icon: <HiOutlineUserGroup />,
      title: "Manage Accounts",
    },
    {
      icon: <BsEnvelope />,
      title: "My Loans",
    },
    {
      icon: <MdAssignment />,
      title: "Report Generation",
    },
  ];

  return (
    <div className="sidebar_container">
      {sideBarList.map((list) => {
        return <SideBarContent list={list} />;
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="side_hidden">
        <AiOutlineLeft />
      </div>
    </div>
  );
};

export default Sidebar;
