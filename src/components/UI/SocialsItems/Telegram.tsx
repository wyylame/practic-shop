import React from "react";
import { SocialItemProps } from "../../../interfaces/components";

import * as C from "../../../styles/components";

const Telegram: React.FC<SocialItemProps> = ({link}) => {
  return (
    <C.SocialItem href={link} target="_blank">
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3675 1.27625L13.905 12.8762C13.7237 13.6987 13.2337 13.8988 12.55 13.5113L8.8 10.7487L6.9925 12.4913C6.8175 12.7163 6.54625 12.86 6.2425 12.86H6.23625L6.5025 9.0425L13.4525 2.765C13.7525 2.49875 13.385 2.3475 12.9862 2.61375L4.4 8.02125L0.7 6.86625C-0.0999999 6.6125 -0.1225 6.06625 0.86875 5.67375L15.3263 0.10125C15.9988 -0.14375 16.5837 0.26125 16.3662 1.2775L16.3675 1.27625Z"
          fill="#493D32"
        />
      </svg>
    </C.SocialItem>
  );
};

export default Telegram;
