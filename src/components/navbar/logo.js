import React from "react";
import { LogoSvg } from "./style/container";

const Logo = () => {
  return (
    <LogoSvg version="1.2" viewBox="0 0 37.5 37.499999">
      <defs>
        <symbol id="a" overflow="visible">
          <path d="m24.234 0l-2.375-7.8125h-11.969l-2.3906 7.8125h-7.5l11.594-32.969h8.5156l11.625 32.969zm-4.0469-13.656c-2.1992-7.082-3.4375-11.086-3.7188-12.016-0.27344-0.92578-0.46875-1.6602-0.59375-2.2031-0.49219 1.918-1.9023 6.6562-4.2344 14.219z" />
        </symbol>
      </defs>
      <g>
        <g fill="#6ef7d9">
          <use x="0.853085" y="36.729608" xlinkHref="#a" />
        </g>
        <g fill="#ff2152">
          <use x="4.227" y="36.374996" xlinkHref="#a" />
        </g>
      </g>
    </LogoSvg>
  );
};

export default Logo;
