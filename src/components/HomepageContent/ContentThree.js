import React, { forwardRef } from "react";

const ContentThree = ({ props, ref }) => {
  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100vh", backgroundColor: "white" }}
    >
      ContentThree
    </div>
  );
};

export default forwardRef(ContentThree);
