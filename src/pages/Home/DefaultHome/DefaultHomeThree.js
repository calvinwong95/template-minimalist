import React from "react";
import SectionWrapper from "../../../service/SectionWrapper";
import contentThree from "../../../asset/contentThree.jpg";

const DefaultHomeThree = () => {
  return (
    <SectionWrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={contentThree}
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              opacity: "0.8",
              width: "50%",
              height: "100%",
              position: "absolute",
              zIndex: 2,
            }}
          ></div>
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
              zIndex: 3,
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
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DefaultHomeThree;
