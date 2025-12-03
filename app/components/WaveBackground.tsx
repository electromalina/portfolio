"use client";

export default function WaveBackground() {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full h-[40vh] overflow-hidden pointer-events-none z-0">
      {/* Wave Layer 1 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full loading-wave-container wave-layer-1">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(141, 22, 42, 0.35)" />
              <stop offset="50%" stopColor="rgba(141, 22, 42, 0.25)" />
              <stop offset="100%" stopColor="rgba(141, 22, 42, 0.15)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            d="M0,100 C200,50 400,150 600,100 C800,50 1000,150 1200,100 C1400,50 1600,150 1800,100 C2000,50 2200,150 2400,100 L2400,200 L0,200 Z"
            fill="url(#waveGradient1)"
          />
        </svg>
      </div>

      {/* Wave Layer 2 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full loading-wave-container wave-layer-2">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(141, 22, 42, 0.28)" />
              <stop offset="50%" stopColor="rgba(141, 22, 42, 0.2)" />
              <stop offset="100%" stopColor="rgba(141, 22, 42, 0.12)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            d="M0,120 C200,70 400,170 600,120 C800,70 1000,170 1200,120 C1400,70 1600,170 1800,120 C2000,70 2200,170 2400,120 L2400,200 L0,200 Z"
            fill="url(#waveGradient2)"
          />
        </svg>
      </div>

      {/* Wave Layer 3 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full loading-wave-container wave-layer-3">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(141, 22, 42, 0.22)" />
              <stop offset="50%" stopColor="rgba(141, 22, 42, 0.16)" />
              <stop offset="100%" stopColor="rgba(141, 22, 42, 0.1)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            d="M0,140 C200,90 400,190 600,140 C800,90 1000,190 1200,140 C1400,90 1600,190 1800,140 C2000,90 2200,190 2400,140 L2400,200 L0,200 Z"
            fill="url(#waveGradient3)"
          />
        </svg>
      </div>

      {/* Wave Layer 4 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full loading-wave-container wave-layer-4">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(141, 22, 42, 0.18)" />
              <stop offset="50%" stopColor="rgba(141, 22, 42, 0.13)" />
              <stop offset="100%" stopColor="rgba(141, 22, 42, 0.08)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            d="M0,160 C200,110 400,210 600,160 C800,110 1000,210 1200,160 C1400,110 1600,210 1800,160 C2000,110 2200,210 2400,160 L2400,200 L0,200 Z"
            fill="url(#waveGradient4)"
          />
        </svg>
      </div>

      {/* Wave Layer 5 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-full loading-wave-container wave-layer-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(141, 22, 42, 0.15)" />
              <stop offset="50%" stopColor="rgba(141, 22, 42, 0.11)" />
              <stop offset="100%" stopColor="rgba(141, 22, 42, 0.07)" />
            </linearGradient>
          </defs>
          <path
            className="wave-path"
            d="M0,80 C200,30 400,130 600,80 C800,30 1000,130 1200,80 C1400,30 1600,130 1800,80 C2000,30 2200,130 2400,80 L2400,200 L0,200 Z"
            fill="url(#waveGradient5)"
          />
        </svg>
      </div>
    </div>
  );
}

