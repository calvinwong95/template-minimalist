import React from "react";
import restaurantOutside from "../../asset/restaurantOutside.jpg";
import { motion } from "framer-motion";

const DefaultLocation = () => {
  return (
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
          padding: "20px",

          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "50px",
        }}
      >
        <h1 style={{ textTransform: "uppercase" }}>LOCATION</h1>
        <h4 style={{ textTransform: "uppercase" }}>
          5th Street Avenue, Baker Valley 70300, New Zealand
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 2,
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
            }}
          >
            Opening Hours
          </h1>
          <h4 style={{ textTransform: "uppercase" }}>Monday - Friday</h4>
          <h4 style={{ textTransform: "uppercase" }}>12:00pm - 10:00pm</h4>
          <h4 style={{ textTransform: "uppercase" }}>Saturday - Sunday</h4>
          <h4 style={{ textTransform: "uppercase" }}>12:00pm - 12:00am</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 2,
          }}
        >
          <h1
            style={{
              textTransform: "uppercase",
            }}
          >
            contact
          </h1>
          <h4 style={{ textTransform: "uppercase" }}>03-3021 4032</h4>
        </div>
      </div>
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
          src={restaurantOutside}
          alt=""
          width="500px"
          height="500px"
          style={{ objectFit: "cover", borderRadius: 5 }}
        />
      </motion.div>
    </div>
  );
};

export default DefaultLocation;
