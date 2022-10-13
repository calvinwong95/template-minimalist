import React from "react";

const SectionWrapper = ({ children, navbarHeight, ...style }) => {
  return (
    <div
      style={{
        width: "100%",
        height: `calc(100vh - ${navbarHeight}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
