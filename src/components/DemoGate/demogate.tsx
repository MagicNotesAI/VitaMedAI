// src/components/DemoGate/demogate.tsx
import { useEffect, useMemo, useState } from 'react'
import demoVideo from '../../assets/vidro.mov'

type DemoGateProps = {
  buttonText?: string
  storageKey?: string
}

export default function DemoGate({
  buttonText = 'Watch Demo',
  storageKey = 'vitamed_demo_email',
}: DemoGateProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (!open) return
    const saved = localStorage.getItem(storageKey)
    setUnlocked(!!saved)
    setError(null)
    setVideoError(false)
    setEmail('')
  }, [open, storageKey])

  const emailOk = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  )

  function close() {
    setOpen(false)
    setEmail('')
    setError(null)
    setVideoError(false)
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const cleaned = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return

    setSaving(true)
    try {
      const res = await fetch('http://localhost:5050/api/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleaned }),
      })

      if (!res.ok) {
        setError('Could not save email. Start the Express server and try again.')
        return
      }

      localStorage.setItem(storageKey, cleaned)
      setUnlocked(true)

      setOpen(false)
    } catch {
      setError('Express server is not running on port 5050. Run: node server/index.js')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        {buttonText}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-black/60"
          />

          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-8 py-5">
              <div>
                <div className="text-sm font-semibold text-gray-900">VitaMed AI</div>
                <div className="text-xs text-gray-500">Secure demo access</div>
              </div>

              <button
                type="button"
                onClick={close}
                className="rounded-xl px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
            </div>

            <div className="min-h-[420px] bg-white text-gray-900">
              {!unlocked ? (
                <div className="px-8 py-10">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Enter your email to watch the demo
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We will only use this for onboarding and product updates.
                  </p>

                  <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                      required
                    />

                    <button
                      type="submit"
                      disabled={!emailOk || saving}
                      className="w-full rounded-2xl bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gray-800 disabled:opacity-50 sm:w-auto"
                    >
                      {saving ? 'Saving...' : 'Continue'}
                    </button>

                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <p className="text-xs leading-relaxed text-gray-500">
                      By continuing you agree to be contacted about VitaMed AI.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="bg-black">
                  {!videoError ? (
                    <video
                      className="h-[420px] w-full object-contain"
                      src={demoVideo}
                      controls
                      playsInline
                      preload="metadata"
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <div className="flex h-[420px] w-full items-center justify-center px-8 text-center text-white">
                      <div>
                        <div className="text-lg font-semibold">Video failed to load</div>
                        <div className="mt-2 text-sm text-white/80">
                          Check that the file exists at src/assets/vidro.mov and that the import path is correct.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}