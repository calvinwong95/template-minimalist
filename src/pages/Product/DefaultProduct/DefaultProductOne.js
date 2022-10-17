import React from "react";
import SectionWrapper from "../../../service/SectionWrapper";
import appetizer from "../../../asset/appetizer.jpg";
import { motion } from "framer-motion";
const DefaultProductOne = ({ listArray }) => {
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
            src={appetizer}
            alt=""
            width="400px"
            height="400px"
            style={{ objectFit: "cover" }}
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
            appetizer
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

export default DefaultProductOne;
