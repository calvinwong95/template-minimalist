import React from "react";

import SectionWrapper from "../../../service/SectionWrapper";
import video from "../../../asset/videoCooking.mp4";

const MobileHomeOne = () => {
  return (
    <SectionWrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={video}
          width="100%"
          height="100%"
          autoPlay={true}
          type="video/mp4"
          muted
          style={{ objectFit: "cover", zIndex: 1, position: "absolute" }}
          loop
        ></video>
        <div
          style={{
            backgroundColor: "black",
            opacity: "0.7",
            width: "100%",
            height: "100%",
            zIndex: 2,
            position: "absolute",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "200px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "calc(2 * (1.5vh + 1.1vw))",
                marginBottom: "30px",
              }}
            >
              WELCOME TO
            </h1>
            <h1
              style={{
                color: "white",
                fontSize: "calc(3 * (1.5vh + 1.1vw))",
                marginBottom: "200px",
              }}
            >
              SP II CE
            </h1>
            <h3
              style={{
                color: "white",
                fontWeight: 100,
                marginBottom: "100px",
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: "calc(1 * (1.5vh + 1.1vw))",
              }}
            >
              scroll down for a journey of taste
            </h3>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MobileHomeOne;
