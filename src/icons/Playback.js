import React from "react";
import Svg, { Path } from "react-native-svg";

export function PlayButton(props) {
  return (
    <Svg width="25" height="25" viewBox="0 0 24 24" {...props}>
      <Path
        d="M3 22v-20l18 10-18 10z"
        stroke="#f7f7f7"
        fill="#f7f7f7"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function PauseButton(props) {
  return (
    <Svg width="25" height="25" viewBox="0 0 24 24" {...props}>
      <Path
        d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z"
        stroke="#f7f7f7"
        fill="#f7f7f7"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function ResetButton(props) {
  return (
    <Svg width="25" height="25" viewBox="0 0 24 24" {...props}>
      <Path
        d="M13 12l11-7v14l-11-7zm-11 0l11-7v14l-11-7zm-2 6h2v-12h-2v12z"
        stroke="black"
        fill="black"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function FinishButton(props) {
  return (
    <Svg width="25" height="25" viewBox="0 0 24 24" {...props}>
      <Path
        d="M0 19v-14l11 7-11 7zm11 0v-14l11 7-11 7zm13-13h-2v12h2v-12z"
        stroke="black"
        fill="black"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function Waves(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-12 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z"
        stroke="black"
        fill="black"
        strokeWidth="0"
      />
    </Svg>
  );
}
