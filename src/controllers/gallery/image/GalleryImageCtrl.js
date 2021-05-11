import React from "react";
import GalleryImage from "../../../components/gallery/image";

export default function GalleryImageCtrl({ image }) {
  console.log(image);
  return <GalleryImage image={image} url={image.image_url} />;
}
