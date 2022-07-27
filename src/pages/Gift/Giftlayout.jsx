import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";

const Giftlayout = ({ title, children }) => {
  return (
    <Wrapper>
      <section className="header">
        <h4 className="title">{title}</h4>
        <span>
          <p>See All</p>
        </span>
      </section>
      <section className="gift-display">{children}</section>
    </Wrapper>
  );
};

export default Giftlayout;
