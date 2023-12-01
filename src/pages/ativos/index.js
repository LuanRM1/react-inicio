import React from "react";
import Sidebar from "../../components/sideBar";
import Title from "../../components/title";

function DashBoard({ props }) {
  return (
    <div>
      <Title text={"lista de ativos"} />
      <Sidebar />
    </div>
  );
}

export default DashBoard;
