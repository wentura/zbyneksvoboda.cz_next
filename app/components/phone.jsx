import * as React from "react";

function PhoneSvg(props) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.308 12.467a24.095 24.095 0 01-.881-4.384C18.27 6.602 16.977 5.5 15.488 5.5H8.58c-1.777 0-3.145 1.535-2.989 3.304 1.575 17.829 15.777 32.03 33.606 33.606 1.77.156 3.304-1.207 3.304-2.984v-6.16c0-2.248-1.102-3.536-2.583-3.693a24.095 24.095 0 01-4.384-.88 4.903 4.903 0 00-4.87 1.243l-2.957 2.957a31.27 31.27 0 01-12.599-12.599l2.957-2.957a4.903 4.903 0 001.244-4.87z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PhoneSvg;
