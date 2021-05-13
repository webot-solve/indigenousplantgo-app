import React, { useState, useEffect } from "react";
import PlantBody from "../../../../components/detail/Plant/body";

export default function PlantBodyCtrl({ plant }) {
  let isMounted = true;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    concatInfo();
  }, [plant]);

  useEffect(() => {
    isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  const concatInfo = () => {
    if (!isMounted) return;
    if (!plant) return;
    let concatArray = [];

    const categories = plant.categories.map(
      (category) => category.category_name
    );
    const tags = plant.tags.map((tag) => tag.tag_name);

    if (categories && categories.length > 0)
      concatArray = [...concatArray, ...categories];
    if (tags && tags.length > 0) concatArray = [...concatArray, ...tags];

    if (isMounted) setTopics(concatArray);
  };

  return <PlantBody plant={plant} topics={topics} />;
}
