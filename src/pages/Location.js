import React from "react";
import restaurantOutside from "../asset/restaurantOutside.jpg";
import SectionWrapper from "../service/SectionWrapper";

const Location = () => {
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
        <div style={{ width: "50%", height: "100%" }}>
          <img
            src={restaurantOutside}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Location;
