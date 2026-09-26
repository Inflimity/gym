import React, { useState } from 'react';
import { Layers, Check, Film, Image } from 'lucide-react';

export default function ExerciseVisualizer({ 
  animationType, 
  name, 
  primaryMuscles = [], 
  secondaryMuscles = [], 
  cues = [],
  equipment = '',
  animGifUrl = '',
  realImages = [],
  isScaledForBeginner = false
}) {
  const [viewMode, setViewMode] = useState(animGifUrl ? 'gif' : 'photos');
  const [currentFrame, setCurrentFrame] = useState(0);

  const renderBlueprint = () => {
    switch (animationType) {
      case 'deficit-pushup':
      case 'standard-pushup':
      case 'diamond-pushup':
        return (
          <svg viewBox="0 0 360 200" className="w-full h-44 select-none">
            <line x1="20" y1="180" x2="340" y2="180" stroke="#3f3f46" strokeWidth="2" />
            <rect x="60" y="145" width="40" height="35" rx="3" fill="#27272a" stroke="#52525b" />
            <line x1="100" y1="110" x2="300" y2="175" stroke="#e4e4e7" strokeWidth="9" strokeLinecap="round" />
            <circle cx="80" cy="100" r="11" fill="#71717a" />
            <path d="M 100 110 L 78 135 L 80 145" fill="none" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
            <circle cx="300" cy="175" r="5" fill="#52525b" />
          </svg>
        );
      case 'decline-pushup':
        return (
          <svg viewBox="0 0 360 200" className="w-full h-44 select-none">
            <line x1="20" y1="180" x2="340" y2="180" stroke="#3f3f46" strokeWidth="2" />
            <rect x="260" y="100" width="70" height="80" rx="4" fill="#27272a" stroke="#52525b" />
            <line x1="90" y1="150" x2="270" y2="95" stroke="#e4e4e7" strokeWidth="9" strokeLinecap="round" />
            <circle cx="70" cy="160" r="11" fill="#71717a" />
            <path d="M 90 150 L 80 165 L 85 180" fill="none" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
          </svg>
        );
      case 'chair-dips':
        return (
          <svg viewBox="0 0 360 200" className="w-full h-44 select-none">
            <line x1="20" y1="180" x2="340" y2="180" stroke="#3f3f46" strokeWidth="2" />
            <rect x="60" y="90" width="30" height="90" rx="3" fill="#27272a" stroke="#52525b" />
            <rect x="230" y="90" width="30" height="90" rx="3" fill="#27272a" stroke="#52525b" />
            <line x1="160" y1="70" x2="160" y2="140" stroke="#e4e4e7" strokeWidth="10" strokeLinecap="round" />
            <circle cx="160" cy="50" r="11" fill="#71717a" />
            <path d="M 160 140 L 190 160 L 230 180" fill="none" stroke="#71717a" strokeWidth="8" strokeLinecap="round" />
            <path d="M 155 75 L 110 100 L 75 90" fill="none" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
            <path d="M 165 75 L 210 100 L 245 90" fill="none" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 360 200" className="w-full h-44 select-none">
            <line x1="20" y1="180" x2="340" y2="180" stroke="#3f3f46" strokeWidth="2" />
            <line x1="110" y1="120" x2="290" y2="175" stroke="#e4e4e7" strokeWidth="9" strokeLinecap="round" />
            <circle cx="90" cy="110" r="11" fill="#71717a" />
            <path d="M 110 120 L 95 150 L 100 180" fill="none" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-200">
            {name}
          </span>
          {isScaledForBeginner && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Joint-Safe Scaled
            </span>
          )}
          {equipment && (
            <span className="text-zinc-500 font-mono hidden sm:inline-block">
              • {equipment}
            </span>
          )}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5">
          {animGifUrl && (
            <button
              onClick={() => setViewMode('gif')}
              className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'gif'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Film className="w-3 h-3" />
              <span>Moving GIF</span>
            </button>
          )}

          {realImages && realImages.length > 0 && (
            <button
              onClick={() => setViewMode('photos')}
              className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'photos'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Image className="w-3 h-3" />
              <span>Step Photo</span>
            </button>
          )}

          <button
            onClick={() => setViewMode('diagram')}
            className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'diagram'
                ? 'bg-zinc-800 text-white border border-zinc-700'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Diagram</span>
          </button>
        </div>
      </div>

      {/* Animation / Media Canvas Area */}
      <div className="relative flex items-center justify-center min-h-[220px] bg-zinc-950 rounded-lg border border-zinc-800/80 my-3 overflow-hidden">
        
        {/* VIEW 1: REAL MOVING ANIMATED GIF LOOP */}
        {viewMode === 'gif' && animGifUrl ? (
          <div className="relative w-full h-[230px] flex items-center justify-center p-2">
            <img 
              src={animGifUrl} 
              alt={`${name} moving exercise demonstration`}
              className="max-h-full max-w-full object-contain rounded"
              loading="lazy"
              onError={() => setViewMode('photos')}
            />
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 rounded text-[10px] text-zinc-300 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE MOTION LOOP</span>
            </div>
          </div>
        ) : viewMode === 'photos' && realImages && realImages.length > 0 ? (
          /* VIEW 2: STEP PHOTOGRAPHY (Start & Contraction) */
          <div className="relative w-full h-[230px] flex items-center justify-center p-2">
            <img 
              src={realImages[currentFrame] || realImages[0]} 
              alt={`${name} position frame`}
              className="max-h-full max-w-full object-contain rounded"
              loading="lazy"
            />
            {realImages.length > 1 && (
              <div className="absolute bottom-2.5 right-3 flex items-center gap-1 bg-zinc-900 border border-zinc-700 p-0.5 rounded text-[10px]">
                <button
                  onClick={() => setCurrentFrame(0)}
                  className={`px-2 py-0.5 rounded cursor-pointer ${currentFrame === 0 ? 'bg-zinc-700 text-white' : 'text-zinc-400'}`}
                >
                  Start
                </button>
                <button
                  onClick={() => setCurrentFrame(1)}
                  className={`px-2 py-0.5 rounded cursor-pointer ${currentFrame === 1 ? 'bg-zinc-700 text-white' : 'text-zinc-400'}`}
                >
                  Peak
                </button>
              </div>
            )}
          </div>
        ) : (
          /* VIEW 3: BIOMECHANICAL DIAGRAM */
          <div className="w-full flex items-center justify-center py-2">
            {renderBlueprint()}
          </div>
        )}

      </div>

      {/* Target Muscles */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
        <span className="text-zinc-500 font-medium mr-1">Target:</span>
        {primaryMuscles.map((muscle, idx) => (
          <span 
            key={idx}
            className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 text-[11px] font-medium"
          >
            {muscle}
          </span>
        ))}
        {secondaryMuscles.map((muscle, idx) => (
          <span 
            key={`sec-${idx}`}
            className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-[11px]"
          >
            {muscle}
          </span>
        ))}
      </div>

      {/* Concise Form Cues */}
      {cues && cues.length > 0 && (
        <div className="mt-3 pt-3 border-t border-zinc-800/80 space-y-1.5 text-xs text-zinc-400">
          {cues.map((cue, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-zinc-300">{cue}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
