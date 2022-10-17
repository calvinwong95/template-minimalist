import React from "react";
import restaurantOne from "../asset/restaurantOne.jpg";
import SectionWrapper from "../service/SectionWrapper";

const About = () => {
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={restaurantOne}
            alt=""
            width="500px"
            height="500px"
            style={{ objectFit: "cover", borderRadius: 5 }}
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            padding: "20px",

            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "100px",
          }}
        >
          <h1>OUR STORY</h1>
          <h4 style={{ textTransform: "uppercase" }}>
            The Old Ebbitt Grill, Washington's oldest saloon, was founded in
            1856 when, according to legend, innkeeper William E. Ebbitt bought a
            boarding house. Today, no one can pinpoint the house’s exact
            location, but it was most likely on the edge of present-day
            Chinatown. <br />
            <br />
            As a boarding house, the Ebbitt guest list read like a Who's Who of
            American History. President McKinley is said to have lived there
            during his tenure in Congress, and Presidents Ulysses S. Grant,
            Andrew Johnson, Grover Cleveland, Theodore Roosevelt and Warren
            Harding supposedly refreshed themselves at its stand-around bar.
          </h4>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
