import React, { useRef, useState, useEffect, createRef } from "react";
import PageScroller from "../components/PageScroller";
import ContentTwo from "../components/HomepageContent/ContentTwo";
import ContentOne from "../components/HomepageContent/ContentOne";
import ContentThree from "../components/HomepageContent/ContentThree";

import ContentWrapper from "../service/ContentWrapper";

const Home = () => {
  return (
    <div className="content">
      <ContentWrapper showDots>
        <ContentOne />
        <ContentTwo />
        <ContentThree />
      </ContentWrapper>
    </div>
  );
};

export default Home;
