import React from "react";
import MobileWrapper from "../../../service/MobileWrapper";
import appetizer from "../../../asset/appetizer.jpg";
import { motion } from "framer-motion";

const MobileProductOne = ({ listArray }) => {
  return (
    <MobileWrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={appetizer}
            alt=""
            width="250px"
            height="250px"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div
          style={{
            width: "100%",
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
              marginBottom: "20px",
              fontSize: "calc(2 * (1.5vh + 1.1vw))",
              textAlign: "center",
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
                <h3
                  style={{
                    textTransform: "uppercase",
                    fontSize: "calc(1.5 * (1.5vh + 1.1vw))",
                  }}
                >
                  {food.name} - {food.price}
                </h3>
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontStyle: "italic",
                    fontSize: "calc(1* (1.5vh + 1.1vw))",
                    textAlign: "center",
                  }}
                >
                  {food.description}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </MobileWrapper>
  );
};

export default MobileProductOne;
