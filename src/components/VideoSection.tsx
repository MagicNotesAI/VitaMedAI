import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, X } from "lucide-react";
import { REQUEST_ACCESS_FORM_URL } from "@/constants/urls";
import videoFile from "../assets/vidro.mov";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playVideoRef = useRef<(() => Promise<void>) | null>(null);

  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const pauseVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  };

  const playVideo = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  // Store playVideo ref for use in event listener
  playVideoRef.current = playVideo;

  const handleFormSubmit = () => {
    setShowForm(false);
    setTimeout(() => {
      if (playVideoRef.current) {
        void playVideoRef.current();
      }
    }, 100);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for form completion message from WTF Forms
      if (
        event.data &&
        (event.data.type === "WTF_FORMS_SUBMISSION_COMPLETE" ||
          event.data.type === "form-submit" ||
          event.data.type === "wtf-form-submit" ||
          event.data.type === "success" ||
          event.data.success === true ||
          event.data.completed === true)
      ) {
        handleFormSubmit();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const toggleAudio = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    const v = videoRef.current;
    if (v) {
      v.muted = nextMuted;
      if (!nextMuted) v.volume = 1;
    }
  };

  const handlePlayIntent = () => {
    setIframeKey(0);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    // Close form and play video
    setShowForm(false);
    setTimeout(() => {
      if (playVideoRef.current) {
        void playVideoRef.current();
      }
    }, 100);
  };

  const handleIframeLoad = () => {
    // Initial check for submitted=true in URL
    checkForSubmission();
  };

  const checkForSubmission = () => {
    const iframe = document.getElementById(
      "video-form-iframe",
    ) as HTMLIFrameElement;
    if (!iframe) return;

    try {
      const iframeUrl = iframe.contentWindow.location.href;
      if (
        iframeUrl.includes("submitted=true") ||
        iframeUrl.includes("success=true")
      ) {
        handleFormSubmit();
        return;
      }
    } catch {
      // Cross-origin - check src instead
    }

    const iframeSrc = iframe?.src || "";
    if (
      iframeSrc.includes("submitted=true") ||
      iframeSrc.includes("success=true")
    ) {
      handleFormSubmit();
    }
  };

  // Poll for form submission when form is shown
  useEffect(() => {
    if (!showForm) return;

    const interval = setInterval(() => {
      checkForSubmission();
    }, 500);

    return () => clearInterval(interval);
  }, [showForm]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience VitaMed AI in Action
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a 2 minute tour of how our AI engine integrates into clinical
          workflows to save time and lives.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
          <div className="aspect-video w-full relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              src={videoFile}
              preload="metadata"
              playsInline
              muted={muted}
              loop
              controls={false}
              onClick={handlePlayIntent}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Form Overlay - positioned inside video container */}
            {showForm && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-white rounded-lg">
                <div className="relative w-full h-full">
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="absolute top-2 right-2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-700" />
                  </button>
                  <iframe
                    key={iframeKey}
                    id="video-form-iframe"
                    src={REQUEST_ACCESS_FORM_URL}
                    className="w-full h-full border-0"
                    allow="clipboard-write"
                    onLoad={handleIframeLoad}
                    title="Video Form"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={toggleAudio}
            className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-black/80 transition-colors"
          >
            {muted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
            {muted ? "Muted" : "Audio on"}
          </button>

          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-white text-sm font-medium">2:00</span>
          </div>

          {!isPlaying && !showForm && (
            <button
              type="button"
              onClick={handlePlayIntent}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </span>
            </button>
          )}

          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl">
              <p className="text-white text-sm font-medium">
                See how VitaMed AI transforms patient care in real time
              </p>
            </div>
          </div>

          <style>{`
            video::-webkit-media-controls { display: none !important; }
            video::-webkit-media-controls-panel { display: none !important; }
            video::-webkit-media-controls-start-playback-button { display: none !important; }
          `}</style>
        </div>
      </div>
    </section>
  );
}
