import React, { useContext, useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import Bin from '../../icons/Bin';
import Play from '../../icons/Play';
import Pause from '../../icons/Pause';
import Send from '../../icons/Send';
import { FaRegStopCircle } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import { numberToDuration } from '../../utils/formatter';
import { ChatAreaContext } from '../../context/ChatAreaContext';

const VoiceMessageSender = ({ stopRecording }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const recordPluginRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaybackReady, setIsPlaybackReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentRecordingTime, setCurrentRecordingTime] = useState(0);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [latestBlob, setLatestBlob] = useState(null);
  const [_try, setTry] = useState(1)
  const { sendMessage } = useContext(ChatAreaContext)

  useEffect(() => {
    if (!waveformRef.current) return;

    const audioContext = new AudioContext();

    const recordPlugin = RecordPlugin.create({
      audioContext,
      renderRecordedAudio: true,
      scrollingWaveform: true,
    });

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#bebebe',
      interact: false,
      cursorWidth: 0,
      height: 80,
      plugins: [recordPlugin],
    });

    wavesurferRef.current = wavesurfer;
    recordPluginRef.current = recordPlugin;

    // Start recording
    recordPlugin.startRecording().then(() => {
      setIsRecording(true);
    }).catch(err => {
      console.error('Microphone access failed:', err);
    });

    recordPlugin.on('record-end', (blob) => {
      if (wavesurfer && blob) {
        wavesurfer.loadBlob(blob);
        setIsPlaybackReady(true);
      }
    });

    wavesurfer.on('play', () => setIsPlaying(true));
    wavesurfer.on('pause', () => setIsPlaying(false));
    wavesurfer.on('finish', () => setIsPlaying(false));

    wavesurfer.on("audioprocess", (duration) => {
      setPlaybackTime(duration)
    })

    recordPlugin.on("record-progress", (data) => {
      setCurrentRecordingTime(data * 0.001);
    })

    recordPlugin.on("record-data-available", (blob) => {
      setLatestBlob(blob)
      wavesurfer.loadBlob(blob);
      setIsPlaybackReady(true);
    })

    return () => {
      recordPlugin.stopRecording();
      wavesurfer.destroy();
    };
  }, [_try]);

  const handleStop = () => {
    if (recordPluginRef.current) {
      recordPluginRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  const togglePlay = () => {
    const wavesurfer = wavesurferRef.current;
    if (wavesurfer && isPlaybackReady) {
      if (isPlaying) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
    }
  };

  const resumeRecording = () => {
    const wavesurfer = wavesurferRef.current;
    const recordPlugin = recordPluginRef.current;

    if (wavesurfer && recordPlugin) {
      // Resume recording from the paused time
      // We continue adding to the existing audio file from the paused position
      recordPlugin.resumeRecording({ startTime: currentRecordingTime });
      setIsRecording(true);
      setIsPaused(false);
      setIsPlaybackReady(false)
    }
  };

  const pauseRecording = () => {
    const wavesurfer = wavesurferRef.current;
    const recordPlugin = recordPluginRef.current;

    if (wavesurfer && recordPlugin) {
      recordPlugin.pauseRecording();
      setCurrentRecordingTime(recordPlugin.duration * 0.001);
      setIsPaused(true);
    }
  };

  function handleRestart() {
    setIsPlaybackReady(false);
    setIsPaused(false)
    setTry(prev => prev + 1)
  }

  function handleSend() {
    if (latestBlob) {
      sendMessage({
        type: 'audio',
        blob: latestBlob
      })
    }
  }

  return (
    <div className="flex justify-between items-center bg-white mt-2 w-full px-4 py-2 rounded shadow">
      <button onClick={stopRecording}>
        <Bin borderColor='#fff' color='#000' height={20} width={20} />
      </button>
      {/* Playback Controls */}
      {isPlaybackReady && (
        isPlaying ? (
          <button onClick={togglePlay}>
            <Pause borderColor='#fff' color='#000' height={30} width={30} />
          </button>
        ) : (
          <button onClick={togglePlay}>
            <Play borderColor='#fff' color='#000' height={30} width={30} />
          </button>
        )
      )}

      <div ref={waveformRef} className="w-full mx-4 relative" >
        <span className='text-xs text-placeholder absolute bottom-0 right-0'>{numberToDuration((isPlaybackReady && isPlaying) ? playbackTime : currentRecordingTime)}</span>
      </div>

      {/* Recording Control */}
      {isRecording ? (
        isPaused ? (
          <div className='flex gap-3'>
            <button onClick={resumeRecording}>
              <Play borderColor='#fff' color='#000' height={30} width={30} />
            </button>
            <button onClick={handleStop}>
              <FaRegStopCircle color='#000' size={20} />
            </button>
          </div>
        ) : (
          <button onClick={pauseRecording}>
            <Pause borderColor='#fff' color='#000' height={30} width={30} />
          </button>
        )
      ) : (
        <button onClick={handleRestart}>
          <IoReloadOutline color='#000' size={20} />
        </button>
      )}

      <button onClick={handleSend}>
        <Send borderColor='#fff' color='#000' height={50} width={50} />
      </button>
    </div>
  );
};

export default VoiceMessageSender;
