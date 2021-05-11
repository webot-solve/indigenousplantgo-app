import React, { useState, useEffect } from "react";
import WaypointBody from "../../../../components/detail/Waypoint/body";

export default function WaypointBodyCtrl({ waypoint }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    concatInfo();
  }, [waypoint]);

  const concatInfo = () => {
    if (!waypoint || waypoint === undefined) return;
    let concatArray = [];
    const categories = waypoint.categories.map(
      (category) => category.category_name
    );
    const tags = waypoint.tags.map((tag) => tag.tag_name);

    if (categories && categories.length > 0)
      concatArray = [...concatArray, ...categories];
    if (tags && tags.length > 0) concatArray = [...concatArray, ...tags];

    setTopics(concatArray);
  };

  return <WaypointBody topics={topics} waypoint={waypoint} />;
}
