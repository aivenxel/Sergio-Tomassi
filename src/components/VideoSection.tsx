import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Presentation, 
  MonitorPlay
} from 'lucide-react';

export default function VideoSection() {
  // Video 1 Player State (Clase de Fonética)
  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const container1Ref = useRef<HTMLDivElement | null>(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [currentTime1, setCurrentTime1] = useState(0);
  const [duration1, setDuration1] = useState(0);
  const [isMuted1, setIsMuted1] = useState(false);

  // Video 2 Player State (Presentación del Profesor)
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const container2Ref = useRef<HTMLDivElement | null>(null);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [duration2, setDuration2] = useState(0);
  const [isMuted2, setIsMuted2] = useState(false);

  // Video 1 Handlers
  const togglePlay1 = async () => {
    if (!video1Ref.current) return;
    if (isPlaying1) {
      video1Ref.current.pause();
    } else {
      try {
        await video1Ref.current.play();
      } catch (err) {
        console.error("Error playing video 1:", err);
      }
    }
  };

  const handleSeek1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (video1Ref.current) {
      video1Ref.current.currentTime = val;
      setCurrentTime1(val);
    }
  };

  const toggleMute1 = () => {
    if (video1Ref.current) {
      video1Ref.current.muted = !isMuted1;
      setIsMuted1(!isMuted1);
    }
  };

  const handleRestart1 = () => {
    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play().catch(() => {});
    }
  };

  const toggleFullscreen1 = () => {
    if (!container1Ref.current) return;
    if (!document.fullscreenElement) {
      container1Ref.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Video 2 Handlers
  const togglePlay2 = async () => {
    if (!video2Ref.current) return;
    if (isPlaying2) {
      video2Ref.current.pause();
    } else {
      try {
        await video2Ref.current.play();
      } catch (err) {
        console.error("Error playing video 2:", err);
      }
    }
  };

  const handleSeek2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (video2Ref.current) {
      video2Ref.current.currentTime = val;
      setCurrentTime2(val);
    }
  };

  const toggleMute2 = () => {
    if (video2Ref.current) {
      video2Ref.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };

  const handleRestart2 = () => {
    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => {});
    }
  };

  const toggleFullscreen2 = () => {
    if (!container2Ref.current) return;
    if (!document.fullscreenElement) {
      container2Ref.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Synchronized Play Both option
  const togglePlayBoth = async () => {
    const shouldPlay = !isPlaying1 || !isPlaying2;
    if (shouldPlay) {
      if (video1Ref.current) video1Ref.current.play().catch(() => {});
      if (video2Ref.current) video2Ref.current.play().catch(() => {});
    } else {
      if (video1Ref.current) video1Ref.current.pause();
      if (video2Ref.current) video2Ref.current.pause();
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="video-intro" className="relative py-16 lg:py-24 bg-brand-ivoire/60 text-brand-marine overflow-hidden px-4 sm:px-8 lg:px-16 border-y border-brand-ivoire">
      
      {/* Background Architectural Ambient Elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand-ciel/15 pointer-events-none select-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand-or/15 pointer-events-none select-none z-0" />

      <div className="relative max-w-5xl mx-auto z-10 space-y-10">
        
        {/* Single Clean Title Header (Without any filler text) */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-brand-ciel inline-flex items-center gap-1.5 bg-brand-ciel/10 px-3.5 py-1 rounded-full border border-brand-ciel/20">
            <Sparkles className="w-3.5 h-3.5" />
            REPRODUCTOR DUAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-brand-marine">
            Clase del Profesor y Presentación
          </h2>

          {/* Master Control Button */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={togglePlayBoth}
              className="inline-flex items-center gap-2 bg-brand-marine text-white hover:bg-brand-ciel px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {(isPlaying1 && isPlaying2) ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{(isPlaying1 && isPlaying2) ? 'Pausar Ambos Videos' : 'Reproducir Ambos Videos'}</span>
            </button>
          </div>
        </div>

        {/* Vertical 9:16 Dual Video Player Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12 max-w-3xl mx-auto">
          
          {/* REPRODUCTOR 1: VIDEO DE LA CLASE (9:16 Vertical Aspect Ratio) */}
          <div className="w-full max-w-[320px] sm:max-w-[340px] flex flex-col bg-[#0a1829] rounded-3xl overflow-hidden border-2 border-brand-ciel/30 shadow-2xl relative aspect-[9/16]" ref={container1Ref}>
            
            {/* Header bar */}
            <div className="p-3 px-4 bg-[#0e2137] border-b border-white/10 flex items-center justify-between gap-2 text-white shrink-0 z-20">
              <div className="flex items-center gap-1.5">
                <MonitorPlay className="w-4 h-4 text-brand-ciel" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-white truncate max-w-[150px]">
                  Video de la Clase
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPlaying1 ? 'bg-emerald-400 animate-pulse' : 'bg-brand-or'}`} />
                <span className="font-mono text-[10px] text-brand-ivoire/80 uppercase">
                  {isPlaying1 ? 'En reproducción' : 'Listo'}
                </span>
              </div>
            </div>

            {/* Video Viewport - 9:16 aspect ratio */}
            <div className="relative flex-1 bg-black flex items-center justify-center group overflow-hidden">
              <video 
                ref={video1Ref}
                src="sergio_intro.mp4"
                poster="image00009.jpeg"
                className="w-full h-full object-cover cursor-pointer"
                playsInline
                preload="metadata"
                onClick={togglePlay1}
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
                onEnded={() => setIsPlaying1(false)}
                onTimeUpdate={() => {
                  if (video1Ref.current) setCurrentTime1(video1Ref.current.currentTime);
                }}
                onLoadedMetadata={() => {
                  if (video1Ref.current) setDuration1(video1Ref.current.duration);
                }}
              />

              {/* Big Centered Play Button (When paused) */}
              {!isPlaying1 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                  <button 
                    onClick={togglePlay1}
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-or text-brand-marine hover:bg-brand-ciel hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group/btn"
                    aria-label="Reproducir Clase"
                  >
                    <Play className="w-7 h-7 fill-current ml-0.5 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Controls Footer */}
            <div className="p-3 bg-[#0e2137] border-t border-white/10 space-y-2.5 z-20 shrink-0">
              
              {/* Scrubbable Timeline */}
              <div className="relative flex items-center w-full">
                <input 
                  type="range"
                  min="0"
                  max={duration1 || 100}
                  step="0.1"
                  value={currentTime1}
                  onChange={handleSeek1}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-or focus:outline-none"
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={togglePlay1}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-brand-ciel text-white transition-colors cursor-pointer"
                    title={isPlaying1 ? 'Pausar' : 'Reproducir'}
                  >
                    {isPlaying1 ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>

                  <button 
                    onClick={handleRestart1}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                    title="Reiniciar"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button 
                    onClick={toggleMute1}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                    title={isMuted1 ? 'Activar Sonido' : 'Silenciar'}
                  >
                    {isMuted1 ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  <span className="font-mono text-[10px] text-brand-ivoire/90">
                    {formatTime(currentTime1)} / {formatTime(duration1)}
                  </span>
                </div>

                <button 
                  onClick={toggleFullscreen1}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                  title="Pantalla Completa"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* REPRODUCTOR 2: VIDEO DE LA PRESENTACIÓN DEL PROFESOR (9:16 Vertical Aspect Ratio) */}
          <div className="w-full max-w-[320px] sm:max-w-[340px] flex flex-col bg-[#0a1829] rounded-3xl overflow-hidden border-2 border-brand-ciel/30 shadow-2xl relative aspect-[9/16]" ref={container2Ref}>
            
            {/* Header bar */}
            <div className="p-3 px-4 bg-[#0e2137] border-b border-white/10 flex items-center justify-between gap-2 text-white shrink-0 z-20">
              <div className="flex items-center gap-1.5">
                <Presentation className="w-4 h-4 text-brand-or" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-white truncate max-w-[150px]">
                  Presentación del Profesor
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPlaying2 ? 'bg-emerald-400 animate-pulse' : 'bg-brand-or'}`} />
                <span className="font-mono text-[10px] text-brand-ivoire/80 uppercase">
                  {isPlaying2 ? 'En reproducción' : 'Listo'}
                </span>
              </div>
            </div>

            {/* Video Viewport - 9:16 aspect ratio */}
            <div className="relative flex-1 bg-black flex items-center justify-center group overflow-hidden">
              <video 
                ref={video2Ref}
                src="sergio_vid.mp4"
                poster="image00022.jpeg"
                className="w-full h-full object-cover cursor-pointer"
                playsInline
                preload="metadata"
                onClick={togglePlay2}
                onPlay={() => setIsPlaying2(true)}
                onPause={() => setIsPlaying2(false)}
                onEnded={() => setIsPlaying2(false)}
                onTimeUpdate={() => {
                  if (video2Ref.current) setCurrentTime2(video2Ref.current.currentTime);
                }}
                onLoadedMetadata={() => {
                  if (video2Ref.current) setDuration2(video2Ref.current.duration);
                }}
              />

              {/* Big Centered Play Button (When paused) */}
              {!isPlaying2 && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                  <button 
                    onClick={togglePlay2}
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-or text-brand-marine hover:bg-brand-ciel hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer group/btn"
                    aria-label="Reproducir Presentación"
                  >
                    <Play className="w-7 h-7 fill-current ml-0.5 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Controls Footer */}
            <div className="p-3 bg-[#0e2137] border-t border-white/10 space-y-2.5 z-20 shrink-0">
              
              {/* Scrubbable Timeline */}
              <div className="relative flex items-center w-full">
                <input 
                  type="range"
                  min="0"
                  max={duration2 || 100}
                  step="0.1"
                  value={currentTime2}
                  onChange={handleSeek2}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-or focus:outline-none"
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={togglePlay2}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-brand-ciel text-white transition-colors cursor-pointer"
                    title={isPlaying2 ? 'Pausar' : 'Reproducir'}
                  >
                    {isPlaying2 ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5=" />}
                  </button>

                  <button 
                    onClick={handleRestart2}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                    title="Reiniciar"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button 
                    onClick={toggleMute2}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                    title={isMuted2 ? 'Activar Sonido' : 'Silenciar'}
                  >
                    {isMuted2 ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  <span className="font-mono text-[10px] text-brand-ivoire/90">
                    {formatTime(currentTime2)} / {formatTime(duration2)}
                  </span>
                </div>

                <button 
                  onClick={toggleFullscreen2}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-brand-ivoire transition-colors cursor-pointer"
                  title="Pantalla Completa"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
