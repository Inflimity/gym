import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Sofa, 
  Briefcase, 
  Armchair, 
  CheckCircle2, 
  Circle, 
  Flame, 
  Play, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Eye,
  SlidersHorizontal,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getStructuredSchedule, EQUIPMENT_GUIDE } from './data/workoutData';
import { getCurrentDayId, getCurrentWeekDates, formatCurrentDate } from './utils/dateUtils';
import { sound } from './utils/audio';
import ExerciseVisualizer from './components/ExerciseVisualizer';
import RigorousWorkoutSession from './components/RigorousWorkoutSession';
import BodyProfileModal from './components/BodyProfileModal';

export default function App() {
  const [currentDateStr, setCurrentDateStr] = useState(formatCurrentDate());
  const todayId = getCurrentDayId();
  const weekDates = getCurrentWeekDates();

  // User Profile for 30-Day Recomp Transformation
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('infinityUserProfile');
      return saved ? JSON.parse(saved) : {
        isConfigured: true,
        currentWeight: 96,
        targetWeight: 89,
        height: 176,
        age: 28,
        gender: 'male',
        fitnessLevel: 'beginner',
        focusArea: 'chest_belly',
        activityLevel: 'sedentary',
        dailyDeficit: 650,
        targetCalories: 1850,
        dailyProtein: 178,
        dailyWaterLiters: '3.5',
        projectedLossKg: 7.0
      };
    } catch {
      return {
        isConfigured: true,
        currentWeight: 96,
        targetWeight: 89,
        height: 176,
        age: 28,
        gender: 'male',
        fitnessLevel: 'beginner',
        focusArea: 'chest_belly',
        activityLevel: 'sedentary',
        dailyDeficit: 650,
        targetCalories: 1850,
        dailyProtein: 178,
        dailyWaterLiters: '3.5',
        projectedLossKg: 7.0
      };
    }
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('infinityUserProfile', JSON.stringify(userProfile));
    } catch {
      // ignore
    }
  }, [userProfile]);

  // Dynamically structure workouts based on user profile
  const structuredSchedule = getStructuredSchedule(userProfile);

  const [selectedDayId, setSelectedDayId] = useState(todayId);
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [sessionDayId, setSessionDayId] = useState(todayId);
  const [previewExercise, setPreviewExercise] = useState(null);
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  // Local storage completed exercises
  const [completedExercises, setCompletedExercises] = useState(() => {
    try {
      const saved = localStorage.getItem('infinityRecompProgress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('infinityRecompProgress', JSON.stringify(completedExercises));
    } catch {
      // ignore
    }
  }, [completedExercises]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateStr(formatCurrentDate());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleExercise = (exerciseId) => {
    const willBeDone = !completedExercises[exerciseId];
    setCompletedExercises(prev => ({ ...prev, [exerciseId]: willBeDone }));

    if (willBeDone) {
      sound.playExerciseDone();
      try {
        confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
      } catch {
        // ignore
      }
    }
  };

  const getDayProgress = (dayExercises) => {
    const total = dayExercises.length;
    const completed = dayExercises.filter(ex => completedExercises[ex.id]).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) || 0 };
  };

  const resetProgress = () => {
    if (window.confirm("Reset all checkmarks for this week?")) {
      setCompletedExercises({});
      sound.playTone(300, 0.15, 'sawtooth');
    }
  };

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsSoundMuted(muted);
  };

  const launchSession = (dayIdToLaunch) => {
    setSessionDayId(dayIdToLaunch);
    setIsSessionOpen(true);
    sound.playTone(520, 0.1, 'triangle');
  };

  const activeDayPlan = structuredSchedule.find(d => d.id === selectedDayId) || structuredSchedule[0];
  const activeDayDateObj = weekDates.find(w => w.dayId === selectedDayId);
  const todayPlan = structuredSchedule.find(d => d.id === todayId) || structuredSchedule[0];
  const todayDateObj = weekDates.find(w => w.dayId === todayId);

  const totalWeeklyExercises = structuredSchedule.reduce((acc, d) => acc + d.exercises.length, 0);
  const totalWeeklyCompleted = Object.values(completedExercises).filter(Boolean).length;
  const overallWeekPercentage = Math.round((totalWeeklyCompleted / totalWeeklyExercises) * 100);

  const getEquipmentIcon = (name) => {
    if (name === 'Briefcase') return <Briefcase className="w-5 h-5 text-zinc-300" />;
    if (name === 'Armchair') return <Armchair className="w-5 h-5 text-zinc-300" />;
    return <Sofa className="w-5 h-5 text-zinc-300" />;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800 selection:text-white pb-16">
      
      {/* 30-Day Body Assessment & Recomp Structuring Modal */}
      {isProfileModalOpen && (
        <BodyProfileModal
          currentProfile={userProfile}
          onSave={(updated) => {
            setUserProfile(updated);
            setIsProfileModalOpen(false);
          }}
          onClose={() => setIsProfileModalOpen(false)}
        />
      )}

      {/* 1-Hour Rigorous Workout Session Modal */}
      {isSessionOpen && (
        <RigorousWorkoutSession
          dayPlan={structuredSchedule.find(d => d.id === sessionDayId) || activeDayPlan}
          dateInfo={weekDates.find(w => w.dayId === sessionDayId)}
          completedExercises={completedExercises}
          onToggleExercise={toggleExercise}
          onClose={() => setIsSessionOpen(false)}
        />
      )}

      {/* Inline Exercise Preview Modal */}
      {previewExercise && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-zinc-900 border border-zinc-700 rounded-xl p-5 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="text-base font-bold text-white">{previewExercise.name}</h3>
              <button
                onClick={() => setPreviewExercise(null)}
                className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <ExerciseVisualizer
              animationType={previewExercise.animationType}
              name={previewExercise.name}
              primaryMuscles={previewExercise.primaryMuscles}
              secondaryMuscles={previewExercise.secondaryMuscles}
              cues={previewExercise.cues}
              equipment={previewExercise.equipment}
              animGifUrl={previewExercise.animGifUrl}
              realImages={previewExercise.realImages}
              isScaledForBeginner={previewExercise.isScaledForBeginner}
            />

            <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800 text-xs">
              <button
                onClick={() => setPreviewExercise(null)}
                className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  toggleExercise(previewExercise.id);
                  setPreviewExercise(null);
                }}
                className="px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer"
              >
                {completedExercises[previewExercise.id] ? 'Mark Incomplete' : 'Mark Done ✓'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <Flame className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-tight">Infinity Recomp</h1>
              <p className="text-[11px] text-zinc-400 font-mono">30-Day Heavy Recomposition • {currentDateStr}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded border border-zinc-700 cursor-pointer font-medium"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Customize Profile</span>
            </button>

            <button
              onClick={toggleSound}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                !isSoundMuted ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-zinc-900 text-zinc-600 border-zinc-800'
              }`}
              title="Audio toggle"
            >
              {!isSoundMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => launchSession(todayId)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-1.5 rounded flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Workout (60m)</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        
        {/* PERSONALIZED 30-DAY FAT LOSS ROADMAP BANNER */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-5 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div>
                <span className="font-bold text-white text-sm">
                  Your 30-Day Recomp Transformation Target
                </span>
                <span className="text-zinc-500 block text-[11px]">
                  Calibrated to take you from {userProfile.currentWeight}kg to {userProfile.targetWeight}kg (-{userProfile.projectedLossKg}kg fat shred)
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="text-xs text-zinc-300 hover:text-white bg-zinc-800 px-3 py-1.5 rounded border border-zinc-700 cursor-pointer flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3 h-3 text-emerald-400" />
              <span>Edit Data & Re-structure</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3">
            <div>
              <span className="text-zinc-500 block">30-Day Goal</span>
              <span className="text-base font-bold text-emerald-400 font-mono">
                {userProfile.currentWeight}kg → {userProfile.targetWeight}kg
              </span>
              <span className="text-[10px] text-zinc-500 block">Target: -{userProfile.projectedLossKg} kg</span>
            </div>

            <div>
              <span className="text-zinc-500 block">Protocol Tier</span>
              <span className="text-base font-bold text-zinc-200 capitalize">
                {userProfile.fitnessLevel === 'beginner' ? 'Joint-Safe Scaled' : 'Moderate Overload'}
              </span>
              <span className="text-[10px] text-zinc-500 block">
                {userProfile.fitnessLevel === 'beginner' ? 'Knees & wrists protected' : 'Standard weighted progression'}
              </span>
            </div>

            <div>
              <span className="text-zinc-500 block">BMI Adaptation</span>
              <span className={`text-base font-bold font-mono ${
                (userProfile.bmi || 0) >= 30 ? 'text-orange-400' : (userProfile.bmi || 0) >= 25 ? 'text-yellow-400' : 'text-emerald-400'
              }`}>
                {userProfile.bmi || '—'}
              </span>
              <span className="text-[10px] text-zinc-500 block">
                {(userProfile.bmi || 0) >= 30 ? 'Extra rest + joint safety' : (userProfile.bmi || 0) >= 25 ? 'Moderate rest scaling' : 'Standard intensity'}
              </span>
            </div>

            <div>
              <span className="text-zinc-500 block">Daily Caloric Deficit</span>
              <span className="text-base font-bold text-zinc-200 font-mono">
                -{userProfile.dailyDeficit} kcal
              </span>
              <span className="text-[10px] text-zinc-500 block">Cap: {userProfile.targetCalories} kcal/day</span>
            </div>

            <div>
              <span className="text-zinc-500 block">Daily Protein Shield</span>
              <span className="text-base font-bold text-zinc-200 font-mono">
                {userProfile.dailyProtein}g
              </span>
              <span className="text-[10px] text-zinc-500 block">Guards muscle while cutting</span>
            </div>
          </div>
        </section>

        {/* Today's Mission Card */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400">
                  Today • {todayPlan.day}, {todayDateObj?.formattedDate}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-emerald-500/30">
                  60m Protocol
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                {todayPlan.focus}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                {todayPlan.exercises.length} Exercises • Target: {todayPlan.targetCalories} burn
              </p>
            </div>

            <button
              onClick={() => launchSession(todayId)}
              className="bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs px-4 py-2.5 rounded flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch 1-Hour Protocol</span>
            </button>
          </div>
        </section>

        {/* 7-Day Date & Schedule Strip */}
        <section className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <h3 className="font-bold text-zinc-300">
                Weekly Calendar & Schedule
              </h3>
              <span className="text-[11px] text-zinc-500 font-mono">
                Progress: {overallWeekPercentage}% ({totalWeeklyCompleted} of {totalWeeklyExercises} sets completed)
              </span>
            </div>
            <button 
              onClick={resetProgress}
              className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset checkmarks</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {weekDates.map((weekDay) => {
              const dayWorkout = structuredSchedule.find(d => d.id === weekDay.dayId);
              const progress = dayWorkout ? getDayProgress(dayWorkout.exercises) : { completed: 0, total: 0 };
              const isSelected = weekDay.dayId === selectedDayId;
              const isToday = weekDay.isToday;
              const isFinished = progress.completed === progress.total && progress.total > 0;

              return (
                <button
                  key={weekDay.dayId}
                  onClick={() => setSelectedDayId(weekDay.dayId)}
                  className={`p-3 rounded-lg text-left transition-colors cursor-pointer border flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-zinc-800 border-zinc-600 text-white'
                      : isToday
                        ? 'bg-zinc-900 border-emerald-500/50'
                        : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono text-zinc-400">{weekDay.shortName}</span>
                    {isToday && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500 text-zinc-950">
                        TODAY
                      </span>
                    )}
                    {isFinished && !isToday && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>

                  <div className="text-lg font-bold font-mono text-zinc-100">
                    {weekDay.dayNumber}
                  </div>

                  <div className="text-[11px] text-zinc-400 truncate mt-1">
                    {dayWorkout?.focus}
                  </div>

                  <div className="w-full h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500"
                      style={{ width: `${progress.percentage}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Day's Workout List (6 Exercises with Moving GIF Demonstrations) */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
            <div>
              <span className="text-xs font-mono text-zinc-400">
                {activeDayPlan.day} • {activeDayDateObj?.formattedDate}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {activeDayPlan.focus}
              </h3>
            </div>

            <button
              onClick={() => launchSession(selectedDayId)}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold text-xs px-3.5 py-2 rounded border border-zinc-700 flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch 1-Hour Protocol</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {activeDayPlan.exercises.map((ex, idx) => {
              const isDone = completedExercises[ex.id];

              return (
                <div 
                  key={ex.id}
                  className={`rounded-lg border flex flex-col justify-between overflow-hidden ${
                    isDone ? 'bg-zinc-950/80 border-emerald-500/30' : 'bg-zinc-950/50 border-zinc-800'
                  }`}
                >
                  <div className="p-3 border-b border-zinc-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-zinc-500">#{idx + 1} • {ex.workMinutes}m</span>
                    <button
                      onClick={() => setPreviewExercise(ex)}
                      className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </button>
                  </div>

                  {/* Real Moving GIF Animation */}
                  <div 
                    onClick={() => setPreviewExercise(ex)}
                    className="p-3 bg-zinc-950 cursor-pointer"
                    title="Click for full view"
                  >
                    <ExerciseVisualizer
                      animationType={ex.animationType}
                      name={ex.name}
                      primaryMuscles={ex.primaryMuscles}
                      equipment={ex.equipment}
                      animGifUrl={ex.animGifUrl}
                      realImages={ex.realImages}
                      isScaledForBeginner={ex.isScaledForBeginner}
                    />
                  </div>

                  <div className="p-3 bg-zinc-900 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-100">{ex.name}</h4>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{ex.sets}</p>
                    </div>

                    <button
                      onClick={() => toggleExercise(ex.id)}
                      className={`w-full py-2 px-3 rounded text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                        isDone 
                          ? 'bg-zinc-800 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700'
                      }`}
                    >
                      {isDone ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Done</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4 text-zinc-500" />
                          <span>Mark Done</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Minimal Equipment Guide */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
            <Dumbbell className="w-4 h-4 text-zinc-400" />
            <span>Household Arsenal Guide</span>
          </div>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            {EQUIPMENT_GUIDE.map((item, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg space-y-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-zinc-800 rounded">
                    {getEquipmentIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-zinc-500 text-[11px]">{item.badge}</span>
                </div>
                <h5 className="font-bold text-zinc-200">{item.title}</h5>
                <p className="text-zinc-400 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-800 text-center py-6 text-xs text-zinc-500">
        Infinity Recomp • 30-Day Heavy Body Recomposition • High Protein • Progressive Overload
      </footer>
    </div>
  );
}
