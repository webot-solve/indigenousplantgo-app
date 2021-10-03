
import React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

export function TourDefault(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M13.072 12.316l-1.072-4.316-1.074 4.318c-.286.183-.518.438-.679.739l-4.247.943 4.247.943c.161.3.393.556.679.739l1.074 4.318 1.078-4.32c.285-.184.516-.439.677-.74l4.245-.94-4.246-.942c-.162-.301-.395-.558-.682-.742zm-1.072 2.684c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm3.5 2.5l-1.715-1.093c.236-.176.446-.386.622-.623l1.093 1.716zm-1.76-5.941l1.76-1.059-1.06 1.759c-.193-.27-.429-.507-.7-.7zm-3.478 4.883l-1.762 1.058 1.059-1.76c.194.271.431.509.703.702zm-.67-4.226l-1.092-1.716 1.716 1.092c-.237.177-.447.387-.624.624zm4.72-7.937c.423-.452.688-1.023.688-1.654 0-1.449-1.343-2.625-3-2.625s-3 1.176-3 2.625c0 .631.265 1.202.688 1.654-4.406 1.045-7.688 4.995-7.688 9.721 0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.726-3.282-8.676-7.688-9.721zm-2.312-2.779c.812 0 1.5.515 1.5 1.125s-.688 1.125-1.5 1.125-1.5-.515-1.5-1.125.688-1.125 1.5-1.125zm0 20.5c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function TourAlternate(props) {
  return (
    <Svg width="150" height="150" viewBox="0 0 24 24" {...props}>
      <Path
        d="M6.57 13.41c-.373 0-.741-.066-1.093-.195l.407-1.105c.221.081.451.122.686.122.26 0 .514-.05.754-.148l.447 1.09c-.382.157-.786.236-1.201.236zm8.67-.783l-1.659-.945.583-1.024 1.66.945-.584 1.024zm-6.455-.02l-.605-1.011 1.639-.981.605 1.011-1.639.981zm3.918-1.408c-.243-.101-.5-.153-.764-.153-.23 0-.457.04-.674.119l-.401-1.108c.346-.125.708-.188 1.075-.189.42 0 .83.082 1.217.244l-.453 1.087zm-8.734-.163c-.535 0-.969.433-.969.968 0 .535.434.968.969.968.535 0 .969-.434.969-.968-.001-.535-.434-.968-.969-.968zm13.576-7.036l-5.545-4-5.545 4-6.455-4v20l6.455 4 5.545-4 5.545 4 6.455-4v-20l-6.455 4zm4.455 14.887l-4 2.479v-4.366h-1v4.141l-4-2.885v-4.256h-2v4.255l-4 2.885v-5.14h-1v5.365l-4-2.479v-15.294l4 2.479v2.929h1v-2.927l4-2.886v3.813h2v-3.813l4 2.886v1.927h1v-1.929l4-2.479v15.295zm-1.328-4.871l-1.296-1.274 1.273-1.293-.708-.702-1.272 1.295-1.294-1.272-.703.702 1.296 1.276-1.273 1.296.703.703 1.277-1.298 1.295 1.275.702-.708z"
        stroke="black"
        fill="black"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function TourActive(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M13.072 12.316l-1.072-4.316-1.074 4.318c-.286.183-.518.438-.679.739l-4.247.943 4.247.943c.161.3.393.556.679.739l1.074 4.318 1.078-4.32c.285-.184.516-.439.677-.74l4.245-.94-4.246-.942c-.162-.301-.395-.558-.682-.742zm-1.072 2.684c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm3.5 2.5l-1.715-1.093c.236-.176.446-.386.622-.623l1.093 1.716zm-1.76-5.941l1.76-1.059-1.06 1.759c-.193-.27-.429-.507-.7-.7zm-3.478 4.883l-1.762 1.058 1.059-1.76c.194.271.431.509.703.702zm-.67-4.226l-1.092-1.716 1.716 1.092c-.237.177-.447.387-.624.624zm4.72-7.937c.423-.452.688-1.023.688-1.654 0-1.449-1.343-2.625-3-2.625s-3 1.176-3 2.625c0 .631.265 1.202.688 1.654-4.406 1.045-7.688 4.995-7.688 9.721 0 5.523 4.477 10 10 10s10-4.477 10-10c0-4.726-3.282-8.676-7.688-9.721zm-2.312-2.779c.812 0 1.5.515 1.5 1.125s-.688 1.125-1.5 1.125-1.5-.515-1.5-1.125.688-1.125 1.5-1.125zm0 20.5c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
        stroke="mediumseagreen"
        fill="mediumseagreen"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function TourMarker(props) {
  return (
    <Svg width="45" height="45" viewBox="0 0 50 50" {...props}>
      <Ellipse
        style={{ opacity: 0.25 }}
        cx="25"
        cy="47.1"
        rx="4.7"
        ry="0.9"
        stroke="#000000"
        fill="#000000"
      />
      <Path
        d="M25,3.1c-7.7,0-14.6,6.2-14.6,13.9C10.4,28.4,22,29.6,25,46.9C28,29.6,39.6,28.4,39.6,17
        C39.6,9.3,32.7,3.1,25,3.1z"
        stroke="#EF0906"
        fill="#EF0906"
        strokeWidth="0"
      />
      <Path
        d="M26.1,17.4L25,13.1l-1.1,4.3c-0.3,0.2-0.5,0.4-0.7,0.7L19,19.1l4.2,0.9c0.2,0.3,0.4,0.6,0.7,0.7l1.1,4.3
            l1.1-4.3c0.3-0.2,0.5-0.4,0.7-0.7l4.2-0.9l-4.2-0.9C26.6,17.9,26.4,17.6,26.1,17.4z M25,20.1c-0.6,0-1-0.4-1-1s0.4-1,1-1
            c0.6,0,1,0.4,1,1S25.6,20.1,25,20.1z M28.5,22.6l-1.7-1.1c0.2-0.2,0.4-0.4,0.6-0.6L28.5,22.6z M26.7,16.7l1.8-1.1l-1.1,1.8
            C27.2,17.1,27,16.9,26.7,16.7z M23.3,21.5l-1.8,1.1l1.1-1.8C22.8,21.1,23,21.4,23.3,21.5z M22.6,17.3l-1.1-1.7l1.7,1.1
            C23,16.9,22.8,17.1,22.6,17.3z M27.3,9.4c0.4-0.5,0.7-1,0.7-1.7c0-1.4-1.3-2.6-3-2.6s-3,1.2-3,2.6c0,0.6,0.3,1.2,0.7,1.7
            c-4.4,1-7.7,5-7.7,9.7c0,5.5,4.5,10,10,10s10-4.5,10-10C35,14.4,31.7,10.4,27.3,9.4z M25,6.6c0.8,0,1.5,0.5,1.5,1.1S25.8,8.9,25,8.9
            s-1.5-0.5-1.5-1.1S24.2,6.6,25,6.6z M25,27.1c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S29.4,27.1,25,27.1z"
        stroke="#ffffff"
        fill="#ffffff"
        strokeWidth="0"
      />
    </Svg>
  );
}