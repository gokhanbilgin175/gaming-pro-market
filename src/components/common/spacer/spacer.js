import React from "react";

const Spacer = ({ height = 100, bg = "light" }) => {
  return <div style={{ height: height }} className={`bg-${bg}`}></div>;
};

export default Spacer;
