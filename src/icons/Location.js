import React from "react";
import Svg, { Path } from "react-native-svg";

export function LocationDefault(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M0 9l24-9-8.986 24-3.014-12z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function LocationActive(props) {
  return (
    <Svg width="12" height="12" viewBox="0 0 24 24" {...props}>
      <Path
        d="M0 9l24-9-8.986 24-3.014-12z"
        stroke="dodgerblue"
        fill="dodgerblue"
        strokeWidth="0"
      />
    </Svg>
  );
}
