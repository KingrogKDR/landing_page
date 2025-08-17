"use client";
import { ExternalLink, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("video");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (iframeRef.current?.contentWindow) {
      const command = isMuted
        ? '{"event":"command","func":"unMute","args":""}'
        : '{"event":"command","func":"mute","args":""}';
      iframeRef.current.contentWindow.postMessage(command, "*");
    }
  };

  const openOnYouTube = () => {
    window.open("https://www.youtube.com/watch?v=E1czmX6bjFA", "_blank");
  };

  return (
    <section
      id="video"
      className="relative w-full py-16 md:py-24 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div
        className={`text-center mb-8 md:mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
          Watch Vignam in Action
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div
        className={`w-full transform transition-all duration-1200 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="relative w-full bg-gray-200 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 md:border-4 border-white">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://img.youtube.com/vi/E1czmX6bjFA/hqdefault.jpg"
                alt="Vignam Demo Video Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/20 z-30 cursor-pointer"
                onClick={handlePlay}
              >
                <div className="group relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play
                      className="w-8 h-8 md:w-10 md:h-10 text-blue-600 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
            )}

            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full z-20"
              src={`https://www.youtube.com/embed/E1czmX6bjFA?start=10&enablejsapi=1&controls=0&modestbranding=1&rel=0${
                isPlaying ? "&autoplay=1" : ""
              }${isMuted ? "&mute=1" : ""}`}
              title="Vignam Text to Simulations"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: isPlaying ? "block" : "none" }}
            />

            <div className="absolute top-4 md:top-6 left-0 right-0 flex justify-between items-start px-4 md:px-6 z-40">
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="flex items-center justify-center w-fit bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-gray-200"
                >
                  <div className="w-full flex gap-3 items-center justify-center py-2 px-4">
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                    ) : (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                    )}
                    <span className="max-sm:hidden text-xs lg:text-sm">
                      Sound on or off
                    </span>
                  </div>
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openOnYouTube();
                }}
                className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 md:py-3 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 border border-gray-200 group"
              >
                <span className="text-xs md:text-sm font-semibold text-gray-700 hidden sm:inline">
                  Watch on YouTube
                </span>
                <span className="text-xs md:text-sm font-semibold text-gray-700 sm:hidden">
                  YouTube
                </span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </div>

          <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-400/20 to-blue-400/20 rounded-full opacity-50 animate-pulse delay-1000"></div>
        </div>
      </div>

      <div
        className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-600 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
            Experience the power of AI-driven simulations that transform text
            into immersive, interactive experiences with unprecedented accuracy
            and detail.
          </p>
        </div>
      </div>
    </section>
  );
}
