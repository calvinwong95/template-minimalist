import React from "react";
import SectionWrapper from "../../service/SectionWrapper";
import drinks from "../../asset/drinks.jpg";
import { motion } from "framer-motion";
const ProductThree = () => {
  const listArray = [
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
    },
    {
      name: "Sweet and Sour Mojito",
      price: 20,
      description: "Mint, Lime, Honey, Rum, Sprite",
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={drinks}
            alt=""
            width="400px"
            height="400px"
            style={{ objectFit: "cover", backgroundColor: "pink" }}
          />
        </motion.div>
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
            drinks
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
      </div>
    </SectionWrapper>
  );
};

export default ProductThree;
