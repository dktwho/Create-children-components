import React from "react";

const Product = ({ name, cost }) => {
  return (
    <div>
      <span>
        {name} - cost : {cost}
      </span>
    </div>
  );
};

export default Product;
