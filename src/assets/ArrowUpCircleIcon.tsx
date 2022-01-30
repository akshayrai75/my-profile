// icon:arrow-up-circle | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

function ArrowUpCircleIcon(props: any) {
  return (
    <svg
      fill="white"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
      />
      <path
        fillRule="evenodd"
        d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
      />
    </svg>
  );
}

export default ArrowUpCircleIcon;
