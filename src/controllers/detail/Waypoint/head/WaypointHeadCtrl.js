import React, { useState } from "react";
import WaypointHead from "../../../../components/detail/Waypoint/head";

export default function WaypointHeadCtrl({ waypoint, topics }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <WaypointHead
      waypoint={waypoint}
      topics={topics}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
