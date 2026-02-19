import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Experience Med-A in Action
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a 2-minute tour of how our AI engine integrates into clinical
          workflows to save time and lives.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Video Placeholder */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-900">
          {/* Background Image */}
          <div className="aspect-video w-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwbGFwdG9wJTIwdmlkZW8lMjBjYWxsfGVufDF8fHx8MTc3MDY3NDgwMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Video preview - Medical professional using Med-A platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-blue-600/50 focus:ring-offset-2"
              aria-label="Play video"
            >
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </button>
          </div>

          {/* Video Duration Badge */}
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-white text-sm font-medium">2:00</span>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl">
              <p className="text-white text-sm font-medium">
                See how Med-A transforms patient care in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
