import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SidebarData";
import { IconContext } from "react-icons";
import { PageStateContext } from "../../context/PageStateProvider";
import {
  NavbarContainer,
  NavbarLink,
  NavbarMenu,
  NavbarMenuItems,
  NavbarSpan,
  NavbarText,
  NavbarTextContainer,
  NavbarToggle,
  NavbarLogo,
} from "./NavbarElements";
import LogoRestaurant from "../../asset/LogoRestaurant.png";

const Navbar = () => {
  const { navbarHeight, leftNavbar } = useContext(PageStateContext);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavbarContainer leftNavbar={leftNavbar} navbarHeight={navbarHeight}>
          {leftNavbar ? (
            <>
              <NavbarLink to="#">
                <FaIcons.FaBars
                  onClick={() => showSidebar()}
                  style={{ color: "#000" }}
                />
              </NavbarLink>
              <NavbarLink to="/">
                <NavbarLogo src={LogoRestaurant} />
              </NavbarLink>
            </>
          ) : (
            <>
              <NavbarLink to="/">
                <NavbarLogo src={LogoRestaurant} />
              </NavbarLink>
              <NavbarLink to="#">
                <FaIcons.FaBars
                  onClick={() => showSidebar()}
                  style={{ color: "#000" }}
                />
              </NavbarLink>
            </>
          )}
        </NavbarContainer>
        <NavbarMenu sidebar={sidebar} leftNavbar={leftNavbar}>
          <NavbarMenuItems onClick={() => showSidebar()}>
            <NavbarToggle leftNavbar={leftNavbar}>
              <NavbarLink to="#">
                <AiIcons.AiOutlineClose style={{ color: "#000" }} />
              </NavbarLink>
            </NavbarToggle>
            {SidebarData.map((item, index) => {
              return (
                <NavbarTextContainer key={index}>
                  <NavbarText to={item.path}>
                    {item?.icon}
                    <NavbarSpan>{item.title}</NavbarSpan>
                  </NavbarText>
                </NavbarTextContainer>
              );
            })}
          </NavbarMenuItems>
        </NavbarMenu>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
