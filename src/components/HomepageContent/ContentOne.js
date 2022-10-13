import React, { forwardRef, useContext } from "react";
import { PageStateContext } from "../../context/PageStateProvider";
import SectionWrapper from "../../service/SectionWrapper";

const ContentOne = () => {
  const { navbarHeight } = useContext(PageStateContext);
  return (
    <SectionWrapper navbarHeight={navbarHeight}>Content One</SectionWrapper>
  );
};

export default forwardRef(ContentOne);
