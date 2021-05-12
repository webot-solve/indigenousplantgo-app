import React, { useState, useEffect } from "react";
import YTPlayer from "../../components/ytplayer";

export default function YTPlayerCtrl({ video }) {
  const [youtubeId, setYoutubeId] = useState("");

  useEffect(() => {
    if (
      video &&
      typeof video === "object" &&
      video !== null &&
      Object.keys(video).length > 0
    ) {
      const id = parseYoutubeId(video.video_url);
      if (id) {
        setYoutubeId(id);
      }
    }
  }, [video]);

  const parseYoutubeId = (string) => {
    const regExp =
      /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = string.match(regExp);
    return match && match[1].length == 11 ? match[1] : false;
  };

  return <YTPlayer youtubeId={youtubeId} video={video} />;
}
