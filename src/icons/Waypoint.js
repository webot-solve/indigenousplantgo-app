import React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

export function WaypointDefault(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12.297 5.574l-.005-.005s1.703-1.754 2.388-2.259c1.181-.871 2.743-.339 2.743-.339s.021 1.465-.936 2.06c-.913.568-1.788.333-1.882.307.355-.5.853-1.165 1.521-1.498-.493-.028-1.09.246-1.557.681-.38.353-1.26 1.257-1.57 1.576v3.1c1.068-.86 3.035-2.439 3.603-2.877 1.568-1.212 3.691-.522 3.691-.522s.028 1.963-1.254 2.76c-1.223.76-2.753.298-2.878.263.605-.668 1.563-1.277 2.457-1.722-.898-.122-1.614.157-2.749 1.06-.789.629-2.491 2.013-2.87 2.321v3.201c1.229-.929 3.753-2.811 4.9-3.452 2.85-1.593 5.101-.284 5.101-.284s-.263 2.57-2.061 3.417c-1.714.808-3.837-.076-3.996-.14.893-.782 2.197-1.467 3.585-1.816-1.316-.209-2.626-.195-4.415 1.213-.95.747-2.665 1.997-3.114 2.323l.001 9.08h-2l-.001-9.08c-.45-.328-2.162-1.576-3.112-2.323-1.789-1.408-3.099-1.422-4.415-1.213 1.388.349 2.692 1.034 3.585 1.816-.159.064-2.282.948-3.996.14-1.798-.847-2.061-3.417-2.061-3.417s2.251-1.309 5.101.284c1.146.641 3.67 2.521 4.898 3.452v-3.198c-.37-.301-2.081-1.693-2.874-2.324-1.135-.903-1.851-1.182-2.749-1.06.895.445 1.853 1.054 2.457 1.722-.125.035-1.655.497-2.877-.263-1.282-.797-1.254-2.76-1.254-2.76s2.122-.69 3.691.522c.568.439 2.539 2.021 3.606 2.88v-3.105c-.311-.321-1.189-1.222-1.568-1.574-.467-.435-1.064-.709-1.557-.681.668.333 1.166.998 1.521 1.498-.094.026-.969.261-1.882-.307-.957-.595-.936-2.06-.936-2.06s1.562-.532 2.743.339c.685.505 2.388 2.259 2.388 2.259l-.006.007.297.276.298-.278zm2.895 9.386c.389-.138 2.022-.636 3.583.12 1.788.866 2.037 3.461 2.037 3.461s-2.178 1.42-3.978.549c-1.717-.831-2.297-2.637-2.347-2.801 1.177.203 2.363.618 3.494 1.305-.847-1.062-1.783-1.926-2.789-2.634zm-6.384 0c-.389-.138-2.022-.636-3.583.12-1.788.866-2.037 3.461-2.037 3.461s2.178 1.42 3.978.549c1.717-.831 2.297-2.637 2.347-2.801-1.177.203-2.363.618-3.494 1.305.847-1.062 1.783-1.926 2.789-2.634zm3.664-10.973c.175-.175.866-.929.861-1.969-.005-1.19-1.344-1.996-1.344-1.996s-1.332.811-1.326 2.009c.006 1.143.832 1.924.908 1.993.194-.689.276-1.437.198-2.227.355.734.58 1.463.703 2.19z"
        stroke="grey"
        fill="grey"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function WaypointActive(props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <Path
        d="M12.297 5.574l-.005-.005s1.703-1.754 2.388-2.259c1.181-.871 2.743-.339 2.743-.339s.021 1.465-.936 2.06c-.913.568-1.788.333-1.882.307.355-.5.853-1.165 1.521-1.498-.493-.028-1.09.246-1.557.681-.38.353-1.26 1.257-1.57 1.576v3.1c1.068-.86 3.035-2.439 3.603-2.877 1.568-1.212 3.691-.522 3.691-.522s.028 1.963-1.254 2.76c-1.223.76-2.753.298-2.878.263.605-.668 1.563-1.277 2.457-1.722-.898-.122-1.614.157-2.749 1.06-.789.629-2.491 2.013-2.87 2.321v3.201c1.229-.929 3.753-2.811 4.9-3.452 2.85-1.593 5.101-.284 5.101-.284s-.263 2.57-2.061 3.417c-1.714.808-3.837-.076-3.996-.14.893-.782 2.197-1.467 3.585-1.816-1.316-.209-2.626-.195-4.415 1.213-.95.747-2.665 1.997-3.114 2.323l.001 9.08h-2l-.001-9.08c-.45-.328-2.162-1.576-3.112-2.323-1.789-1.408-3.099-1.422-4.415-1.213 1.388.349 2.692 1.034 3.585 1.816-.159.064-2.282.948-3.996.14-1.798-.847-2.061-3.417-2.061-3.417s2.251-1.309 5.101.284c1.146.641 3.67 2.521 4.898 3.452v-3.198c-.37-.301-2.081-1.693-2.874-2.324-1.135-.903-1.851-1.182-2.749-1.06.895.445 1.853 1.054 2.457 1.722-.125.035-1.655.497-2.877-.263-1.282-.797-1.254-2.76-1.254-2.76s2.122-.69 3.691.522c.568.439 2.539 2.021 3.606 2.88v-3.105c-.311-.321-1.189-1.222-1.568-1.574-.467-.435-1.064-.709-1.557-.681.668.333 1.166.998 1.521 1.498-.094.026-.969.261-1.882-.307-.957-.595-.936-2.06-.936-2.06s1.562-.532 2.743.339c.685.505 2.388 2.259 2.388 2.259l-.006.007.297.276.298-.278zm2.895 9.386c.389-.138 2.022-.636 3.583.12 1.788.866 2.037 3.461 2.037 3.461s-2.178 1.42-3.978.549c-1.717-.831-2.297-2.637-2.347-2.801 1.177.203 2.363.618 3.494 1.305-.847-1.062-1.783-1.926-2.789-2.634zm-6.384 0c-.389-.138-2.022-.636-3.583.12-1.788.866-2.037 3.461-2.037 3.461s2.178 1.42 3.978.549c1.717-.831 2.297-2.637 2.347-2.801-1.177.203-2.363.618-3.494 1.305.847-1.062 1.783-1.926 2.789-2.634zm3.664-10.973c.175-.175.866-.929.861-1.969-.005-1.19-1.344-1.996-1.344-1.996s-1.332.811-1.326 2.009c.006 1.143.832 1.924.908 1.993.194-.689.276-1.437.198-2.227.355.734.58 1.463.703 2.19z"
        stroke="mediumseagreen"
        fill="mediumseagreen"
        strokeWidth="0"
      />
    </Svg>
  );
}

export function WaypointMarker(props) {
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
        d="M33.5,9.5c-0.9,0.5-1.8,1-2.7,1.5c-0.5,0.3-0.9,0.4-1.5,0.1c-1.1-0.6-2.3-1.1-3.5-1.6c-0.5-0.2-0.9-0.3-1.4,0
          c-1.3,0.7-2.6,1.8-3.8,1.8c-1.3,0-2.6-1.1-4-1.8c-1-0.5-1.1-0.4-1.1,0.7c0,4.3,0,8.5,0,12.8c0,1.1,0.4,1.5,1.3,2.1
          c2.6,1.8,5,1.9,7.5-0.1c0.6-0.5,1.2-0.4,1.8,0c1.1,0.6,2.2,1,3.3,1.5c0.4,0.2,0.8,0.3,1.3,0c1.3-0.8,2.7-1.5,4-2.2
          c0-5,0-10.1,0-15.1C34.2,9.1,33.8,9.3,33.5,9.5z M33.2,24.2c-0.1,0-0.1,0.1-0.2,0.1c-3.1,1.7-3.1,1.8-6.3,0.2
          c-1.3-0.6-2.3-0.8-3.5,0.1c-1.9,1.5-3.7,1.4-5.7,0c-0.9-0.6-1.3-1.1-1.3-2.2c0.1-4,0-8,0-12.1c1.2,0.6,2.3,1.1,3.4,1.7
          c0.5,0.3,1,0.3,1.5,0c1.3-0.7,2.6-1.7,3.9-1.7c1.3,0,2.6,1,3.8,1.6c0.8,0.4,1.5,0.5,2.3-0.1c0.8-0.5,1.6-0.9,2.6-1.4
          c0,4.4,0,8.7,0,13C33.7,23.7,33.7,24,33.2,24.2z M18.2,14.3c0-0.2,0.2-0.4,0.4-0.4c0.3,0.1,0.6,0.3,0.6,0.7c0,0.3-0.2,0.3-0.4,0.4
          C18.5,14.8,18.3,14.6,18.2,14.3z M25.8,22.4c0,0.2-0.2,0.4-0.5,0.3c-0.3-0.1-0.7-0.2-0.7-0.6c0-0.2,0.2-0.3,0.5-0.4
          C25.5,21.9,25.9,22,25.8,22.4z M27,13.4c-0.3,0-0.5-0.1-0.5-0.4c0-0.4,0.3-0.4,0.6-0.4c0.2,0.1,0.5,0.1,0.5,0.4
          C27.6,13.4,27.3,13.3,27,13.4z M22.1,22.1c0,0.4-0.3,0.4-0.6,0.5c-0.3,0.1-0.5-0.1-0.5-0.4c0-0.4,0.3-0.4,0.6-0.5
          C21.8,21.7,22.1,21.7,22.1,22.1z M28.4,13.1c0-0.3,0.2-0.4,0.5-0.4c0.3,0.1,0.6,0.2,0.6,0.5c0,0.3-0.2,0.4-0.5,0.4
          C28.7,13.6,28.4,13.5,28.4,13.1z M20.8,15.6c0,0.4-0.2,0.5-0.4,0.5c-0.3,0-0.6-0.1-0.7-0.5c0-0.2,0.1-0.4,0.4-0.4
          C20.4,15.2,20.7,15.3,20.8,15.6z M22.2,15.3c0.3,0.3,0.2,0.5,0,0.6c-0.2,0.2-0.5,0.4-0.8,0.1c-0.2-0.2-0.2-0.4,0-0.5
          C21.7,15.3,22,15.2,22.2,15.3z M25.8,13.8c-0.2,0.2-0.4,0.4-0.7,0.4c-0.3-0.2-0.4-0.4-0.3-0.6c0.2-0.3,0.4-0.5,0.7-0.4
          C25.8,13.3,25.9,13.6,25.8,13.8z M33,17.1c0,0.3-0.2,0.5-0.4,0.5c-0.3,0-0.4-0.3-0.4-0.6c0-0.3,0.2-0.4,0.4-0.5
          C32.9,16.5,33.1,16.8,33,17.1z M24,21.9c0,0.3-0.3,0.4-0.5,0.4c-0.2,0-0.5-0.1-0.6-0.4c-0.1-0.3,0.2-0.4,0.4-0.4
          C23.6,21.5,24,21.5,24,21.9z M30.2,13.7c0-0.3,0.2-0.4,0.4-0.3c0.3,0.1,0.6,0.2,0.6,0.6c-0.1,0.3-0.2,0.4-0.4,0.4
          C30.5,14.2,30.3,14.1,30.2,13.7z M31.6,15c0-0.2,0.2-0.4,0.4-0.4c0.4,0,0.5,0.4,0.5,0.7c0,0.2-0.1,0.4-0.4,0.4
          C31.8,15.6,31.6,15.3,31.6,15z M33,18.8c0,0.3-0.1,0.5-0.4,0.7c-0.2,0-0.4-0.1-0.4-0.4c0-0.3,0-0.7,0.4-0.7
          C32.8,18.3,33,18.6,33,18.8z M27.7,22.9c0,0.3-0.2,0.4-0.5,0.4c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.2-0.4,0.5-0.4
          C27.4,22.4,27.7,22.5,27.7,22.9z M29.3,23c0,0.3-0.2,0.4-0.5,0.4c-0.3,0-0.6-0.1-0.6-0.4c0-0.3,0.2-0.4,0.5-0.4
          C29,22.5,29.3,22.6,29.3,23z M32.5,20.6c-0.2,0.2-0.4,0.4-0.7,0.3c-0.3-0.1-0.3-0.4-0.1-0.6c0.2-0.3,0.4-0.5,0.7-0.3
          C32.7,20.1,32.7,20.3,32.5,20.6z M20.6,22.5c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2S20.6,21.8,20.6,22.5z
          M31.8,21.9c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2c0-0.7,0.5-1.2,1.2-1.2S31.8,21.2,31.8,21.9z M24.8,14.7c0,0.7-0.5,1.2-1.2,1.2
          c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C24.3,13.5,24.8,14,24.8,14.7z"
        stroke="#ffffff"
        fill="#ffffff"
        strokeWidth="0"
      />
    </Svg>
  );
}
