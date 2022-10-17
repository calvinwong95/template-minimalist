import React, { useContext } from "react";

import SectionWrapper from "../../service/SectionWrapper";
import MobileAbout from "./MobileAbout";
import DefaultAbout from "./DefaultAbout";
import { PageStateContext } from "../../context/PageStateProvider";

const About = () => {
  const { isMobile } = useContext(PageStateContext);
  return (
    <SectionWrapper sx={{ padding: "20px" }}>
      {isMobile ? <MobileAbout /> : <DefaultAbout />}
    </SectionWrapper>
  );
};

export default About;
