import React from "react";
import ProductFour from "../components/ProductsContent/ProductFour";

import ProductOne from "../components/ProductsContent/ProductOne";
import ProductThree from "../components/ProductsContent/ProductThree";
import ProductTwo from "../components/ProductsContent/ProductTwo";
import ScrollWrapper from "../service/ContentWrapper";

const Product = () => {
  return (
    <ScrollWrapper>
      <ProductOne />
      <ProductTwo />
      <ProductThree />
      <ProductFour />
    </ScrollWrapper>
  );
};

export default Product;
