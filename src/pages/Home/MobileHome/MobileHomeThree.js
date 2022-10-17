import React from "react";
import SectionWrapper from "../../../service/SectionWrapper";
import contentThree from "../../../asset/contentThree.jpg";

const MobileHomeThree = () => {
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
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 2,
            }}
          ></div>
          <div
            style={{
              width: "100%",
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
            <h1
              style={{
                textTransform: "uppercase",
                fontSize: "calc(1.5 * (1.5vh + 1.1vw))",
              }}
            >
              LOCATION
            </h1>
            <h4
              style={{
                textTransform: "uppercase",
                fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
              }}
            >
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
                  fontSize: "calc(1.5 * (1.5vh + 1.1vw))",
                }}
              >
                Opening Hours
              </h1>
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
                }}
              >
                Monday - Friday
              </h4>
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
                }}
              >
                12:00pm - 10:00pm
              </h4>
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
                }}
              >
                Saturday - Sunday
              </h4>
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
                }}
              >
                12:00pm - 12:00am
              </h4>
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
                  fontSize: "calc(1.5 * (1.5vh + 1.1vw))",
                }}
              >
                contact
              </h1>
              <h4
                style={{
                  textTransform: "uppercase",
                  fontSize: "calc(0.8 * (1.5vh + 1.1vw))",
                }}
              >
                03-3021 4032
              </h4>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MobileHomeThree;
