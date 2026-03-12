import { useRef, useState } from 'react'
import { Volume2, VolumeX, Play } from 'lucide-react'
import videoFile from '../assets/vidro.mov'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const pauseVideo = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setIsPlaying(false)
  }

  const playVideo = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      await v.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const toggleAudio = () => {
    const nextMuted = !muted
    setMuted(nextMuted)
    const v = videoRef.current
    if (v) {
      v.muted = nextMuted
      if (!nextMuted) v.volume = 1
    }
  }

  const handlePlayIntent = () => {
    void playVideo()
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience VitaMed AI in Action
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a 2 minute tour of how our AI engine integrates into clinical workflows to save time and lives.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
          <div className="aspect-video w-full">
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
          </div>

          <button
            type="button"
            onClick={toggleAudio}
            className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm font-medium inline-flex items-center gap-2 hover:bg-black/80 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            {muted ? 'Muted' : 'Audio on'}
          </button>

          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-white text-sm font-medium">2:00</span>
          </div>

          {!isPlaying && (
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
  )
}