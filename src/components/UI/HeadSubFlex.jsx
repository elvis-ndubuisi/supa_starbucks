import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const HeadSubFlex = ({ xClass, children }) => {
  return (
    <div className={`head-sub-flex ${xClass}`}>
      <Wrapper xClass="children">{children}</Wrapper>
    </div>
  );
};

export default HeadSubFlex;
