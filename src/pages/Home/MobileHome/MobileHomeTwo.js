import React from "react";
import SectionWrapper from "../../../service/SectionWrapper";
import contentTwo from "../../../asset/contentTwo.jpg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
const MobileHomeTwo = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/menu");
  };
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
          src={contentTwo}
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
              backgroundColor: "black",
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
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "50px",
              position: "absolute",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  color: "white",
                  marginBottom: "50px",
                  textTransform: "uppercase",
                  fontSize: "calc(1.5 * (1.5vh + 1.1vw))",
                  textAlign: "center",
                }}
              >
                asian and mediterranean fusion
              </h1>
              <h3
                style={{
                  color: "white",
                  fontSize: "calc(1 * (1.5vh + 1.1vw))",
                  textTransform: "uppercase",
                }}
              >
                Los Tacos No. 1 was created after three close friends from
                Tijuana, Mexico, and Brawley, California, decided to bring the
                authentic Mexican taco to the east coast. The authentic taste
                comes from family recipes and from fresh, simple and tasteful
                ingredients straight from home. In every taco from LOS TACOS No.
                1 there is a bit of true Mexican culture and flavor.
              </h3>
            </div>
            <Button onClick={navigateTo} sx={{ marginTop: "30px" }}></Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MobileHomeTwo;
