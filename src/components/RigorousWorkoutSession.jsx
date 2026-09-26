import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  X, 
  Hourglass
} from 'lucide-react';
import ExerciseVisualizer from './ExerciseVisualizer';
import { sound } from '../utils/audio';

export default function RigorousWorkoutSession({
  dayPlan,
  dateInfo,
  completedExercises,
  onToggleExercise,
  onClose
}) {
  // 1-Hour Rigorous Workout Timer: 60 minutes = 3600 seconds
  const TOTAL_SESSION_SECONDS = 3600;
  const [secondsRemaining, setSecondsRemaining] = useState(TOTAL_SESSION_SECONDS);
  const [isActive, setIsActive] = useState(true);
  const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
  const [restTimer, setRestTimer] = useState(null);
  const [isResting, setIsResting] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const timerRef = useRef(null);
  const restTimerRef = useRef(null);

  const currentExercise = dayPlan.exercises[activeExerciseIdx] || dayPlan.exercises[0];
  const isCurrentDone = completedExercises[currentExercise?.id];

  const elapsedSeconds = TOTAL_SESSION_SECONDS - secondsRemaining;
  const caloriesBurned = Math.round(elapsedSeconds * 0.167);

  function triggerFullCompletion() {
    sound.playVictory();
    setShowCelebration(true);
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  }

  // 1-hour session timer
  useEffect(() => {
    if (isActive && secondsRemaining > 0) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsActive(false);
            triggerFullCompletion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, secondsRemaining]);

  // Rest timer
  useEffect(() => {
    if (isResting && restTimer > 0) {
      restTimerRef.current = setInterval(() => {
        setRestTimer(prev => {
          if (prev <= 1) {
            clearInterval(restTimerRef.current);
            setIsResting(false);
            sound.playExerciseDone();
            return 0;
          }
          if (prev <= 4) {
            sound.playTick();
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(restTimerRef.current);
    }
    return () => clearInterval(restTimerRef.current);
  }, [isResting, restTimer]);

  const toggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundEnabled(!isMuted);
  };

  const handlePlayPause = () => setIsActive(prev => !prev);
  const handleResetSession = () => {
    setIsActive(false);
    setSecondsRemaining(TOTAL_SESSION_SECONDS);
  };
  const handleAddMinutes = (mins = 5) => {
    setSecondsRemaining(prev => Math.min(TOTAL_SESSION_SECONDS, prev + mins * 60));
    sound.playTone(500, 0.08, 'sine');
  };

  const startRest = (seconds = 60) => {
    setRestTimer(seconds);
    setIsResting(true);
    sound.playTone(550, 0.12, 'sine');
  };

  const cancelRest = () => {
    setIsResting(false);
    setRestTimer(0);
  };

  // MARK DONE AND LOAD NEXT EXERCISE FLOW
  const handleMarkDoneAndLoadNext = () => {
    if (!currentExercise) return;

    if (!completedExercises[currentExercise.id]) {
      onToggleExercise(currentExercise.id);
    }

    sound.playExerciseDone();
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    } catch {
      // ignore
    }

    setToastMsg(`Done! Loading next exercise...`);

    const nextIdx = activeExerciseIdx + 1;
    if (nextIdx < dayPlan.exercises.length) {
      setTimeout(() => {
        sound.playNextSwoosh();
        setActiveExerciseIdx(nextIdx);
        setTimeout(() => setToastMsg(''), 2000);
      }, 350);
    } else {
      setTimeout(() => {
        triggerFullCompletion();
        setTimeout(() => setToastMsg(''), 1000);
      }, 400);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const sessionPercent = Math.min(100, Math.round((elapsedSeconds / TOTAL_SESSION_SECONDS) * 100));

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/95 overflow-y-auto flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-zinc-400">
                  {dayPlan.day} • {dateInfo?.formattedDate}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  60m Session
                </span>
              </div>
              <h2 className="text-base font-bold text-zinc-100">
                {dayPlan.focus}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                soundEnabled 
                  ? 'bg-zinc-800 text-zinc-200 border-zinc-700' 
                  : 'bg-zinc-900 text-zinc-500 border-zinc-800'
              }`}
              title="Audio toggle"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full p-4 sm:p-6 flex-grow grid lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Timer Console (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
              <span className="font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-300" />
                Session Timer
              </span>
              <span className="font-mono">Target: 60:00</span>
            </div>

            {/* Timer Display */}
            <div className="text-center py-4 bg-zinc-950 rounded-lg border border-zinc-800/80 my-2">
              <span className="text-4xl font-mono font-bold text-white tracking-tight">
                {formatTime(secondsRemaining)}
              </span>
              <div className="text-xs text-zinc-500 mt-1">
                {isActive ? 'In Progress' : 'Paused'} • {sessionPercent}% Complete
              </div>

              {/* Progress bar */}
              <div className="w-4/5 mx-auto mt-3 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500"
                  style={{ width: `${sessionPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Timer Action Buttons */}
            <div className="grid grid-cols-4 gap-2 mt-4 text-xs font-semibold">
              <button
                onClick={handlePlayPause}
                className={`col-span-2 py-2 px-3 rounded flex items-center justify-center gap-2 cursor-pointer ${
                  isActive 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                }`}
              >
                {isActive ? <><Pause className="w-3.5 h-3.5" /> Pause</> : <><Play className="w-3.5 h-3.5 fill-current" /> Resume</>}
              </button>

              <button
                onClick={() => handleAddMinutes(5)}
                className="py-2 px-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 cursor-pointer"
              >
                +5m
              </button>

              <button
                onClick={handleResetSession}
                className="py-2 px-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 flex items-center justify-center cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-zinc-800 text-xs">
              <div>
                <span className="text-zinc-500 block">Active Burn</span>
                <span className="text-sm font-semibold text-zinc-200">~{caloriesBurned} kcal</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Session Target</span>
                <span className="text-sm font-semibold text-zinc-200">{dayPlan.targetCalories}</span>
              </div>
            </div>
          </div>

          {/* In-Set Rest Timer */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-zinc-400 flex items-center gap-1.5">
                <Hourglass className="w-3.5 h-3.5" /> Rest Counter
              </span>
              {isResting && (
                <span className="font-mono text-emerald-400 font-bold">{restTimer}s remaining</span>
              )}
            </div>

            {isResting ? (
              <button
                onClick={cancelRest}
                className="w-full py-1.5 text-xs text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded font-medium cursor-pointer"
              >
                Skip Rest & Continue
              </button>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => startRest(45)}
                  className="py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 cursor-pointer"
                >
                  45s
                </button>
                <button
                  onClick={() => startRest(60)}
                  className="py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 cursor-pointer"
                >
                  60s
                </button>
                <button
                  onClick={() => startRest(90)}
                  className="py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 cursor-pointer"
                >
                  90s
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Right: Exercise Theater with Real Demonstration (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Exercise Progression Steps */}
          <div className="flex flex-wrap gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-xl">
            {dayPlan.exercises.map((ex, idx) => {
              const isDone = completedExercises[ex.id];
              const isCurrent = idx === activeExerciseIdx;

              return (
                <button
                  key={ex.id}
                  onClick={() => setActiveExerciseIdx(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer flex-1 min-w-[120px] ${
                    isCurrent 
                      ? 'bg-zinc-800 text-white border border-zinc-600'
                      : isDone
                        ? 'bg-zinc-950 text-emerald-400 border border-zinc-800'
                        : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded text-[10px] flex items-center justify-center ${
                    isDone ? 'bg-emerald-500 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {isDone ? '✓' : idx + 1}
                  </span>
                  <span className="truncate">{ex.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Exercise Detail Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
            
            {toastMsg && (
              <div className="p-2.5 rounded bg-zinc-800 border border-zinc-700 text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{toastMsg}</span>
              </div>
            )}

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-500 font-mono block">
                  Movement {activeExerciseIdx + 1} of {dayPlan.exercises.length}
                </span>
                <h3 className="text-xl font-bold text-zinc-100 mt-0.5">
                  {currentExercise.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  Target: {currentExercise.sets} ({currentExercise.workMinutes} mins)
                </p>
              </div>

              {isCurrentDone && (
                <span className="text-xs text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded bg-zinc-800/80 font-medium">
                  Completed ✓
                </span>
              )}
            </div>

            {/* REAL EXERCISE DEMONSTRATION / ANIMATION */}
            <ExerciseVisualizer
              animationType={currentExercise.animationType}
              name={currentExercise.name}
              primaryMuscles={currentExercise.primaryMuscles}
              secondaryMuscles={currentExercise.secondaryMuscles}
              cues={currentExercise.cues}
              equipment={currentExercise.equipment}
              animGifUrl={currentExercise.animGifUrl}
              realImages={currentExercise.realImages}
              isScaledForBeginner={currentExercise.isScaledForBeginner}
            />

            {/* NEXT WORKOUT ACTION */}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                {activeExerciseIdx + 1 < dayPlan.exercises.length ? (
                  <>Next: <span className="text-zinc-200">{dayPlan.exercises[activeExerciseIdx + 1].name}</span></>
                ) : (
                  <span>Final exercise of today's plan</span>
                )}
              </span>

              <button
                onClick={handleMarkDoneAndLoadNext}
                className="px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {activeExerciseIdx + 1 < dayPlan.exercises.length 
                    ? 'Done & Next Exercise' 
                    : 'Done & Finish Day'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* Completion Modal */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="max-w-sm w-full bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-zinc-800 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Protocol Completed</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Crushed today's 60-minute rigorous workout.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-3 rounded border border-zinc-800 text-xs">
              <div>
                <span className="text-zinc-500 block">Time</span>
                <span className="font-mono text-zinc-200">{formatTime(elapsedSeconds)}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Est. Burn</span>
                <span className="font-mono text-zinc-200">~{caloriesBurned} kcal</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowCelebration(false);
                onClose();
              }}
              className="w-full py-2.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold cursor-pointer border border-zinc-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
