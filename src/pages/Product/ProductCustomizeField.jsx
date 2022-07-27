import React from "react";

const ProductCustomizeField = ({ fieldTitle = "", title }) => {
  return (
    <div>
      <span>{fieldTitle}</span>
      <span>{title}</span> <span>Edit</span>
    </div>
  );
};

export default ProductCustomizeField;
