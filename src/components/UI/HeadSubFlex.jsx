import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const HeadSubFlex = ({ children }) => {
  return (
    <div className="head-sub-flex">
      <Wrapper xClass="children">{children}</Wrapper>
    </div>
  );
};

export default HeadSubFlex;
