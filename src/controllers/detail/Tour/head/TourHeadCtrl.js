import React, { useState } from "react";
import TourHead from "../../../../components/detail/Tour/head";

export default function TourHeadCtrl({ tour, topics }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <TourHead
      tour={tour}
      topics={topics}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
