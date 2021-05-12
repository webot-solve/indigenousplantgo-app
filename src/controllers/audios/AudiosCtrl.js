import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import Audios from "../../components/audios";

export default function AudiosCtrl({ audio }) {
  const [sound, setSound] = useState(null);

  const playSound = async () => {
    if (!audio || typeof audio !== "object") return;
    const { sound } = await Audio.Sound.createAsync({
      uri: audio.audio_file_url,
    });
    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <Audios audio={audio} playSound={playSound} />;
}
