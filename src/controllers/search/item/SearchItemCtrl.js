import React, { useEffect, useState } from "react";
import SearchItem from "../../../components/search/item";

export default function SearchItemCtrl({ resource, resourceType }) {
  const [topics, setTopics] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    concatInfo();
  }, [resource]);

  const concatInfo = () => {
    let concatArray = [];

    const categories = resource.categories.map(
      (category) => category.category_name
    );
    const tags = resource.tags.map((tag) => tag.tag_name);

    if (categories && categories.length > 0)
      concatArray = [...concatArray, ...categories];
    if (tags && tags.length > 0) concatArray = [...concatArray, ...tags];

    setTopics(concatArray);
  };

  return (
    <SearchItem
      topics={topics}
      resourceType={resourceType}
      resource={resource}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
