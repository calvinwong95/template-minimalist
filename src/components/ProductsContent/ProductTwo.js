import React from "react";
import SectionWrapper from "../../service/SectionWrapper";
import mains from "../../asset/mains.jpg";
const ProductTwo = () => {
  const listArray = [
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
    {
      name: "Steak Tartare",
      price: 40,
      description: "Raw beef, capers, mustard, honey, salt and pepper",
    },
  ];
  return (
    <SectionWrapper sx={{ padding: "20px" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
              textDecoration: "underline",
              marginBottom: "40px",
            }}
          >
            mains
          </h1>
          {listArray.map((food) => {
            return (
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3 style={{ textTransform: "uppercase" }}>
                  {food.name} - {food.price}
                </h3>
                <h4 style={{ textTransform: "uppercase", fontStyle: "italic" }}>
                  {food.description}
                </h4>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={mains}
            alt=""
            width="400px"
            height="400px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductTwo;
