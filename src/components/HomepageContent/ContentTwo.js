import React, { forwardRef } from "react";

const ContentTwo = ({ props, ref }) => {
  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100vh", backgroundColor: "white" }}
    >
      ContentTwo
    </div>
  );
};

export default forwardRef(ContentTwo);
