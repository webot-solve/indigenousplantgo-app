import React, { useState } from "react";
import LearnMoreHead from "../../../../components/detail/LearnMore/head";

export default function LearnMoreHeadCtrl({ learnMore, topics }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <LearnMoreHead
      learnMore={learnMore}
      topics={topics}
      imageLoaded={imageLoaded}
      setImageLoaded={setImageLoaded}
    />
  );
}
