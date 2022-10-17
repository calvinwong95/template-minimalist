import React, { useContext } from "react";
import ScrollWrapper from "../../service/ScrollWrapper";
import { PageStateContext } from "../../context/PageStateProvider";
import DefaultHomeOne from "./DefaultHome/DefaultHomeOne";
import MobileHomeOne from "./MobileHome/MobileHomeOne";
import MobileHomeTwo from "./MobileHome/MobileHomeTwo";
import DefaultHomeTwo from "./DefaultHome/DefaultHomeTwo";
import DefaultHomeThree from "./DefaultHome/DefaultHomeThree";
import MobileHomeThree from "./MobileHome/MobileHomeThree";

const Home = () => {
  const { isMobile } = useContext(PageStateContext);
  return (
    <ScrollWrapper showDots={isMobile ? false : true}>
      {isMobile ? <MobileHomeOne /> : <DefaultHomeOne />}
      {isMobile ? <MobileHomeTwo /> : <DefaultHomeTwo />}
      {isMobile ? <MobileHomeThree /> : <DefaultHomeThree />}
    </ScrollWrapper>
  );
};

export default Home;
