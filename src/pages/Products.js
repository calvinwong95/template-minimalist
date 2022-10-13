import React, { useRef, useState, useEffect, createRef } from "react";
import PageScroller from "../components/PageScroller";
import ProductOne from "../components/ProductsContent/ProductOne";
import ContentWrapper from "../service/ContentWrapper";

const Product = () => {
  return (
    <div className="content">
      <ContentWrapper>
        <ProductOne />
      </ContentWrapper>
    </div>
  );
};

export default Product;
