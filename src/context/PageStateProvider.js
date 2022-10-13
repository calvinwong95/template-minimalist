import React, { createContext, useState } from "react";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [leftNavbar, setLeftNavbar] = useState(false);

  const data = {
    navbarHeight: navbarHeight,
    leftNavbar: leftNavbar,
  };
  return (
    <PageStateContext.Provider value={data}>
      {children}
    </PageStateContext.Provider>
  );
};
