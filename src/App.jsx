import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Dumbbell, 
  CalendarDays, 
  Sofa, 
  Briefcase, 
  Armchair, 
  CheckCircle2, 
  Circle,
  Flame,
  Droplets,
  Activity,
  ArrowRight
} from 'lucide-react';

const WORKOUT_SCHEDULE = [
  {
    id: 'mon',
    day: 'Monday',
    focus: 'Heavy Chest',
    exercises: [
      { id: 'm1', name: 'Backpack Deficit Push-ups', sets: '4 sets of 8-12' },
      { id: 'm2', name: 'Decline Push-ups (feet on couch)', sets: '3 sets to failure' },
      { id: 'm3', name: 'Chair Dips', sets: '3 sets of 10' }
    ]
  },
  {
    id: 'tue',
    day: 'Tuesday',
    focus: 'Back & Core',
    exercises: [
      { id: 't1', name: 'Backpack Bent-over Rows', sets: '4 sets of 12' },
      { id: 't2', name: 'Superman Holds', sets: '3 sets of 45s' },
      { id: 't3', name: 'Plank', sets: '3 sets of 60s' }
    ]
  },
  {
    id: 'wed',
    day: 'Wednesday',
    focus: 'Legs',
    exercises: [
      { id: 'w1', name: 'Backpack Goblet Squats', sets: '4 sets of 12' },
      { id: 'w2', name: 'Bulgarian Split Squats', sets: '3 sets of 10/leg' }
    ]
  },
  {
    id: 'thu',
    day: 'Thursday',
    focus: 'Fat Burn',
    exercises: [
      { id: 'th1', name: 'Brisk Walking / Jogging / High-Knees', sets: '30 continuous minutes' }
    ]
  },
  {
    id: 'fri',
    day: 'Friday',
    focus: 'Chest Volume',
    exercises: [
      { id: 'f1', name: 'Standard Push-ups', sets: '4 sets to failure' },
      { id: 'f2', name: 'Incline Push-ups (hands on couch)', sets: '3 sets to failure' },
      { id: 'f3', name: 'Diamond Push-ups', sets: '3 sets of 10' }
    ]
  },
  {
    id: 'sat',
    day: 'Saturday',
    focus: 'Core & HIIT',
    exercises: [
      { id: 's1', name: 'Bicycle Crunches', sets: '4 sets of 20' },
      { id: 's2', name: 'Mountain Climbers', sets: '4 sets of 30s' },
      { id: 's3', name: 'Burpees', sets: '3 sets of 15' }
    ]
  },
  {
    id: 'sun',
    day: 'Sunday',
    focus: 'Rest & Recovery',
    exercises: [
      { id: 'su1', name: 'Light Stretching & Mobility', sets: '15-20 minutes' }
    ]
  }
];

const EQUIPMENT_GUIDE = [
  {
    title: 'Heavy Backpack',
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
    description: 'Fill with books or water bottles. Wear during push-ups and squats to force progressive overload without dumbbells.'
  },
  {
    title: 'Two Sturdy Chairs',
    icon: <Armchair className="w-8 h-8 text-emerald-400" />,
    description: 'Place shoulder-width apart for dips, or use for deficit push-ups allowing a deeper stretch in the chest muscles.'
  },
  {
    title: 'Couch or Bed',
    icon: <Sofa className="w-8 h-8 text-emerald-400" />,
    description: 'Elevate feet for Decline Push-ups (upper chest) or elevate hands for Incline Push-ups (lower chest).'
  }
];

export default function App() {
  // State for Calculator
  const [calcInputs, setCalcInputs] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male'
  });
  
  const [calcResults, setCalcResults] = useState(null);

  // State for Workout Checkboxes (Load from local storage if available)
  const [completedExercises, setCompletedExercises] = useState(() => {
    try {
      const saved = localStorage.getItem('infinityRecompProgress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Save progress to local storage
  useEffect(() => {
    localStorage.setItem('infinityRecompProgress', JSON.stringify(completedExercises));
  }, [completedExercises]);

  const handleCalculate = (e) => {
    e.preventDefault();
    const { age, weight, height, gender } = calcInputs;
    
    if (!age || !weight || !height) return;

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Mifflin-St Jeor Equation for BMR
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += gender === 'male' ? 5 : -161;

    // TDEE assuming lightly active multiplier (1.375) given the workout plan
    const tdee = bmr * 1.375;
    
    setCalcResults({
      maintenance: Math.round(tdee),
      deficit: Math.round(tdee - 500),
      protein: Math.round(w * 2)
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalcInputs(prev => ({ ...prev, [name]: value }));
  };

  const toggleExercise = (exerciseId) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const getDayProgress = (dayExercises) => {
    const total = dayExercises.length;
    const completed = dayExercises.filter(ex => completedExercises[ex.id]).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) || 0 };
  };

  const resetProgress = () => {
    setCompletedExercises({});
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-slate-900">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Flame className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">Infinity Home Recomp</h1>
              <p className="text-xs text-emerald-400 font-medium">30-Day Body Recomposition</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        
        {/* Intro Section */}
        <section className="text-center space-y-4 max-w-2xl mx-auto py-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Muscle. <span className="text-emerald-400">Burn Fat.</span> No Gym Required.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A comprehensive protocol combining a caloric deficit, high protein intake, and strategic bodyweight mechanics to build a prominent chest and shed belly fat.
          </p>
        </section>

        {/* Nutrition Calculator Section */}
        <section className="grid md:grid-cols-2 gap-6 items-start">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Nutrition Target Calculator</h3>
            </div>
            
            <form onSubmit={handleCalculate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Gender</label>
                  <select 
                    name="gender" 
                    value={calcInputs.gender} 
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Age</label>
                  <input 
                    type="number" name="age" required min="15" max="100"
                    value={calcInputs.age} onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="e.g. 25"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Weight (kg)</label>
                  <input 
                    type="number" name="weight" required min="40" max="250"
                    value={calcInputs.weight} onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="e.g. 80"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Height (cm)</label>
                  <input 
                    type="number" name="height" required min="120" max="250"
                    value={calcInputs.height} onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="e.g. 175"
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Calculate Targets <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Calculator Results */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {calcResults ? (
              <div className="space-y-6 relative z-10">
                <div>
                  <h4 className="text-slate-400 text-sm font-medium mb-1">Target for Fat Loss (TDEE - 500)</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-white">{calcResults.deficit}</span>
                    <span className="text-slate-400">kcal / day</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Maintenance TDEE: {calcResults.maintenance} kcal</p>
                </div>
                
                <div className="h-px w-full bg-slate-800"></div>

                <div>
                  <h4 className="text-slate-400 text-sm font-medium mb-1 flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-emerald-400" /> Daily Protein Goal
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">{calcResults.protein}</span>
                    <span className="text-slate-400">grams</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Based on 2g per kg of body weight.</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center space-y-3 relative z-10 py-12">
                <Activity className="w-12 h-12 opacity-50" />
                <p>Enter your metrics to calculate your precise daily fat loss and protein targets.</p>
              </div>
            )}
          </div>
        </section>

        {/* Household Arsenal Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Dumbbell className="text-emerald-400 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">The Household Arsenal</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {EQUIPMENT_GUIDE.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors group">
                <div className="mb-4 p-3 bg-slate-800/50 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Recomp Protocol Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-emerald-400 w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Weekly Recomp Protocol</h3>
            </div>
            <button 
              onClick={resetProgress}
              className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-md border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Week
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
            {WORKOUT_SCHEDULE.map((day) => {
              const progress = getDayProgress(day.exercises);
              const isDayComplete = progress.completed === progress.total;

              return (
                <div 
                  key={day.id} 
                  className={`relative flex flex-col bg-slate-900 border rounded-2xl overflow-hidden transition-colors ${
                    isDayComplete ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header */}
                  <div className={`p-4 border-b ${isDayComplete ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-slate-800'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">{day.day}</span>
                      {isDayComplete && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                    </div>
                    <h4 className="text-lg font-bold text-white">{day.focus}</h4>
                    
                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-300 ease-out"
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Card Body (Exercises) */}
                  <div className="p-4 flex-grow space-y-3">
                    {day.exercises.map((ex) => {
                      const isDone = completedExercises[ex.id];
                      return (
                        <div 
                          key={ex.id}
                          onClick={() => toggleExercise(ex.id)}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <button className="mt-0.5 flex-shrink-0 text-slate-500 group-hover:text-emerald-400 transition-colors cursor-pointer">
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            ) : (
                              <Circle className="w-5 h-5" />
                            )}
                          </button>
                          <div>
                            <p className={`text-sm font-semibold transition-colors ${isDone ? 'text-slate-500 line-through' : 'text-slate-200 group-hover:text-white'}`}>
                              {ex.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">{ex.sets}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 mt-12 text-center text-slate-500 text-sm">
        <p>Infinity Home Recomp • Stay Consistent. Eat Protein. Push Hard.</p>
      </footer>
    </div>
  );
}
