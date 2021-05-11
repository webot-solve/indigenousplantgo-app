import React, { useState } from "react";
import PlantHead from "../../../../components/detail/Plant/head";

export default function PlantHeadCtrl({ plant, topics }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <PlantHead
      plant={plant}
      topics={topics}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
