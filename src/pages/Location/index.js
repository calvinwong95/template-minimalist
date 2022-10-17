import React, { useContext } from "react";

import { PageStateContext } from "../../context/PageStateProvider";
import MobileLocation from "./MobileLocation";
import DefaultLocation from "./DefaultLocation";
import SectionWrapper from "../../service/SectionWrapper";

const Location = () => {
  const { isMobile } = useContext(PageStateContext);
  return (
    <SectionWrapper sx={{ padding: "20px" }}>
      {isMobile ? <MobileLocation /> : <DefaultLocation />}
    </SectionWrapper>
  );
};

export default Location;
