import React, { useState } from "react";
import GalleryImage from "../../../components/gallery/image";

export default function GalleryImageCtrl({ image, resourceType }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <GalleryImage
      image={image}
      url={image.image_url}
      resourceType={resourceType}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
