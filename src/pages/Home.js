import React from "react";
import ContentTwo from "../components/HomepageContent/ContentTwo";
import ContentOne from "../components/HomepageContent/ContentOne";
import ContentThree from "../components/HomepageContent/ContentThree";
import ScrollWrapper from "../service/ContentWrapper";

const Home = () => {
  return (
    <ScrollWrapper showDots>
      <ContentOne />
      <ContentTwo />
      <ContentThree />
    </ScrollWrapper>
  );
};

export default Home;
