import {css} from "@emotion/react";
import {resetCSS} from "./reset";
import {fontCSS} from "./fonts";

const globalStyles = css`
  ${resetCSS}
  ${fontCSS}

  body {
    font-family: Montserrat-Regular;
  }
`;

export default globalStyles;
