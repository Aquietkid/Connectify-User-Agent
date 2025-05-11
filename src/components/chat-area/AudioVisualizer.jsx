import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function AudioVisualizer({ src, wavesurferRef, onFinish, progressColor, audioRate = 1, onReady, onTimeUpdate }) {
  const waveformRef = useRef(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#bebebe',
      progressColor,
      barWidth: 2,
      cursorColor: progressColor,
      responsive: true,
      height: 70,
      audioRate,
      dragToSeek: true
    });

    wavesurferRef.current.load(src);

    wavesurferRef.current.on('ready', () => {
      onReady(wavesurferRef.current.getDuration());
    });

    wavesurferRef.current.on('audioprocess', (time) => {
      onTimeUpdate(time)
    });

    wavesurferRef.current.on('finish', onFinish);

    return () => {
      wavesurferRef.current.destroy();
    };
  }, [src]);

  useEffect(() => {
    wavesurferRef.current.setPlaybackRate(audioRate);
  }, [audioRate])

  return (
    <div ref={waveformRef} className="w-full cursor-pointer" />
  );
}
