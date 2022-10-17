import styled from "styled-components";

export const ContentWrap = styled.div`
  height: ${({ navbarHeight }) => `calc(100vh - ${navbarHeight}px)`};
  /* height: 100vh; */
  width: 100%;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
`;
