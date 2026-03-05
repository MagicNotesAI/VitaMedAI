import { useMemo, useRef, useState } from 'react'
import { Volume2, VolumeX, Play, X, Mail } from 'lucide-react'
import videoFile from '../assets/vidro.mov'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [muted, setMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const [showGate, setShowGate] = useState(false)
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [saving, setSaving] = useState(false)
  const [serverError, setServerError] = useState(false)

  const emailOk = useMemo(() => {
    const v = email.trim()
    if (!v) return false
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  }, [email])

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

  const openGate = () => {
    pauseVideo()
    setShowGate(true)
  }

  const closeGate = () => {
    setShowGate(false)
    setServerError(false)
  }

  const handlePlayIntent = () => {
    if (unlocked) {
      void playVideo()
      return
    }
    openGate()
  }

  const submitEmail = async () => {
    setEmailTouched(true)
    if (!emailOk) return

    const cleaned = email.trim().toLowerCase()
    setSaving(true)
    setServerError(false)

    try {
      const res = await fetch('http://localhost:5050/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleaned }),
      })

      if (!res.ok) {
        setServerError(true)
        setSaving(false)
        return
      }
    } catch {
      setServerError(true)
      setSaving(false)
      return
    }

    setSaving(false)
    setUnlocked(true)
    setShowGate(false)
    void playVideo()
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience VitaMed AI in Action</h2>
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
            aria-label={muted ? 'Unmute video' : 'Mute video'}
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
              aria-label="Play video"
            >
              <span className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </span>
            </button>
          )}

          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl">
              <p className="text-white text-sm font-medium">See how VitaMed AI transforms patient care in real time</p>
            </div>
          </div>

          {showGate && (
            <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
              <button
                type="button"
                onClick={closeGate}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                aria-label="Close"
              />
              <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl p-6 border border-black/5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Enter your email to watch</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      We will only use this for product updates and private beta access.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeGate}
                    className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 focus-within:border-gray-400">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    onKeyDown={(e) => e.key === 'Enter' && void submitEmail()}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full outline-none text-gray-900 placeholder:text-gray-400"
                    autoFocus
                  />
                </div>

                {emailTouched && !emailOk && (
                  <p className="text-sm text-red-600 mt-2">Please enter a valid email.</p>
                )}

                {serverError && (
                  <p className="text-sm text-red-600 mt-2">
                    Could not reach the server. Make sure you ran <code className="font-mono">node server/index.js</code>.
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => void submitEmail()}
                  className="mt-5 w-full rounded-2xl bg-gray-900 text-white font-semibold py-3 hover:bg-black transition-colors disabled:opacity-50 disabled:hover:bg-gray-900"
                  disabled={!emailOk || saving}
                >
                  {saving ? 'Saving...' : 'Continue to video'}
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  By continuing, you agree to receive emails from VitaMed AI. You can unsubscribe anytime.
                </p>
              </div>
            </div>
          )}

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