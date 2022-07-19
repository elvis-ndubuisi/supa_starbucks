import React from "react";

const CardCardItem = ({ img, title, children }) => {
  return (
    <div className="cashcard-item">
      <img src={img} alt={img} />
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default CardCardItem;
