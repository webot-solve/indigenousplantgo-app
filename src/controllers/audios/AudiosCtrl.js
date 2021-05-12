import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import Audios from "../../components/audios";

export default function AudiosCtrl({ audio }) {
  const initailSoundState = {
    isPlaying: false,
    playbackInstance: null,
    volumn: 1.0,
    isBuffering: false,
  };
  const [soundState, setSoundState] = useState(initailSoundState);

  useEffect(() => {
    console.log(soundState);
  }, [soundState]);

  useEffect(() => {
    (async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
          shouldDuckAndroid: true,
          staysActiveInBackground: true,
          playThroughEarpieceAndroid: true,
        });

        await loadAudio();
      } catch (error) {
        console.log(error);
      }
    })();

    return soundState.playbackInstance
      ? () => {
          soundState.playbackInstance.unloadAsync();
          setSoundState(initialSoundState);
        }
      : undefined;
  }, []);

  const loadAudio = async () => {
    const { isPlaying, volume } = soundState;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: audio.audio_file_url,
      };

      const status = {
        shouldPlay: isPlaying,
        volume,
      };

      await playbackInstance.setOnPlaybackStatusUpdate();
      await playbackInstance.loadAsync(source, status, false);

      let soundState_ = { ...soundState };
      soundState_.playbackInstance = playbackInstance;
      setSoundState(soundState_);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = soundState;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    let soundState_ = { ...soundState };
    soundState_.isPlaying = !isPlaying;

    setSoundState(soundState_);
  };

  const stopSound = async () => {
    const { isPlaying, playbackInstance } = soundState;

    isPlaying ? await playbackInstance.stopAsync() : undefined;

    let soundState_ = { ...soundState };
    soundState_.isPlaying = !isPlaying;

    setSoundState(soundState_);
  };

  return (
    <Audios
      soundState={soundState}
      handlePlayPause={handlePlayPause}
      stopSound={stopSound}
    />
  );
}
