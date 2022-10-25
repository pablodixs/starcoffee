import styled, { createGlobalStyle } from "styled-components";

import regWoff from "../assets/fonts/SoDoSans-Regular.woff";
import regWoff2 from "../assets/fonts/SoDoSans-Regular.woff2";
import regEot from "../assets/fonts/SoDoSans-Regular.eot";
import regTtf from "../assets/fonts/SoDoSans-Regular.ttf";
import semiWoff from "../assets/fonts/SoDoSans-SemiBold.woff";
import semiWoff2 from "../assets/fonts/SoDoSans-SemiBold.woff2";
import semiEot from "../assets/fonts/SoDoSans-SemiBold.eot";
import semiTtf from "../assets/fonts/SoDoSans-SemiBold.ttf";
import boldWoff from "../assets/fonts/SoDoSans-Bold.woff";
import boldWoff2 from "../assets/fonts/SoDoSans-Bold.woff2";
import boldEot from "../assets/fonts/SoDoSans-Bold.eot";
import boldTtf from "../assets/fonts/SoDoSans-Bold.ttf";
import blackWoff from "../assets/fonts/SoDoSans-Black.woff";
import blackWoff2 from "../assets/fonts/SoDoSans-Black.woff2";
import blackEot from "../assets/fonts/SoDoSans-Black.eot";
import blackTtf from "../assets/fonts/SoDoSans-Black.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SoDo';
    src: 
        url(${regWoff}) format('woff'),
        url(${regWoff2}) format('woff2'),
        url(${regEot}) format('eot'),
        url(${regTtf}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'SoDo';
    src: 
        url(${semiWoff}) format('woff'),
        url(${semiWoff2}) format('woff2'),
        url(${semiEot}) format('eot'),
        url(${semiTtf}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'SoDo';
    src: 
        url(${boldWoff}) format('woff'),
        url(${boldWoff2}) format('woff2'),
        url(${boldEot}) format('eot'),
        url(${boldTtf}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'SoDo';
    src: 
        url(${blackWoff}) format('woff'),
        url(${blackWoff2}) format('woff2'),
        url(${blackEot}) format('eot'),
        url(${blackTtf}) format('truetype');
    font-weight: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SoDo', sans-serif;
    color: ${(props) => props.theme.black};
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  margin: 0 auto;
`;
