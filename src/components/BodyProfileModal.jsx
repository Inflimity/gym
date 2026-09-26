import React, { useState, useMemo } from 'react';
import { ArrowRight, X, Scale, Target, Activity, Heart, Info } from 'lucide-react';
import { sound } from '../utils/audio';

function getBmiCategory(bmi) {
  if (bmi >= 35) return { label: 'Severely Obese', color: 'text-red-400', tier: 'high-support', desc: 'Joint-safe movements, extra recovery, low-impact cardio' };
  if (bmi >= 30) return { label: 'Obese', color: 'text-orange-400', tier: 'high-support', desc: 'Scaled intensity, longer rest periods, protected joints' };
  if (bmi >= 25) return { label: 'Overweight', color: 'text-yellow-400', tier: 'moderate', desc: 'Moderate scaling, progressive overload, balanced volume' };
  return { label: 'Normal', color: 'text-emerald-400', tier: 'standard', desc: 'Full intensity, standard rest, maximum volume' };
}

export default function BodyProfileModal({ currentProfile, onSave, onClose }) {
  const [formData, setFormData] = useState({
    currentWeight: currentProfile?.currentWeight || 96,
    targetWeight: currentProfile?.targetWeight || 89,
    height: currentProfile?.height || 176,
    age: currentProfile?.age || 28,
    gender: currentProfile?.gender || 'male',
    fitnessLevel: currentProfile?.fitnessLevel || 'beginner', // 'beginner' | 'intermediate' | 'advanced'
    focusArea: currentProfile?.focusArea || 'chest_belly', // 'chest_belly' | 'visceral_belly' | 'all_over'
    activityLevel: currentProfile?.activityLevel || 'sedentary'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Live BMI calculation
  const liveBmi = useMemo(() => {
    const w = parseFloat(formData.currentWeight) || 0;
    const h = parseFloat(formData.height) || 170;
    return w / Math.pow(h / 100, 2);
  }, [formData.currentWeight, formData.height]);

  const bmiInfo = getBmiCategory(liveBmi);

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = parseFloat(formData.currentWeight);
    const tw = parseFloat(formData.targetWeight);
    const h = parseFloat(formData.height);
    const a = parseFloat(formData.age);

    // Calculate BMR (Mifflin-St Jeor)
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += formData.gender === 'male' ? 5 : -161;

    // TDEE multiplier based on activity
    const mult = formData.activityLevel === 'sedentary' ? 1.35 : 1.5;
    const tdee = Math.round(bmr * mult);

    // Calculate 30-day deficit: 1kg of fat ≈ 7,700 kcal
    const totalKgToLose = Math.max(1, w - tw);
    const totalKcalDeficitNeeded = totalKgToLose * 7700;
    const dailyDeficitCal = Math.min(800, Math.max(400, Math.round(totalKcalDeficitNeeded / 30)));
    const targetCalories = Math.max(1500, tdee - dailyDeficitCal);
    
    // Protein target: 2.0g per kg of target weight
    const targetProtein = Math.round(tw * 2.0);

    const updatedProfile = {
      isConfigured: true,
      currentWeight: w,
      targetWeight: tw,
      height: h,
      age: a,
      gender: formData.gender,
      fitnessLevel: formData.fitnessLevel,
      focusArea: formData.focusArea,
      activityLevel: formData.activityLevel,
      bmr,
      tdee,
      dailyDeficit: dailyDeficitCal,
      targetCalories,
      dailyProtein: targetProtein,
      dailyWaterLiters: '3.5',
      projectedLossKg: Math.round((w - tw) * 10) / 10,
      bmi: Math.round(liveBmi * 10) / 10,
      bmiTier: bmiInfo.tier
    };

    sound.playTone(620, 0.12, 'sine');
    onSave(updatedProfile);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-lg w-full bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6 space-y-4 my-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
              30-Day Body Recomposition
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Body Profile & Workout Customizer
            </h3>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Section 1: Body Metrics */}
          <div className="space-y-2">
            <span className="font-semibold text-zinc-300 block flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-zinc-400" />
              1. Current Body Metrics
            </span>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-zinc-500 block mb-1">Current Weight (kg)</label>
                <input
                  type="number"
                  name="currentWeight"
                  required
                  min="45"
                  max="220"
                  step="0.5"
                  value={formData.currentWeight}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 font-mono text-sm"
                  placeholder="e.g. 96"
                />
              </div>

              <div>
                <label className="text-zinc-500 block mb-1">30-Day Goal Weight (kg)</label>
                <input
                  type="number"
                  name="targetWeight"
                  required
                  min="40"
                  max="200"
                  step="0.5"
                  value={formData.targetWeight}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-emerald-400 font-mono text-sm"
                  placeholder="e.g. 89"
                />
              </div>

              <div>
                <label className="text-zinc-500 block mb-1">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  required
                  min="130"
                  max="230"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded px-2.5 py-1.5 text-zinc-100 font-mono"
                  placeholder="e.g. 176"
                />
              </div>

              <div>
                <label className="text-zinc-500 block mb-1">Age & Gender</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="80"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-1/2 bg-zinc-950 border border-zinc-700 rounded px-2 py-1.5 text-zinc-100 font-mono"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-1/2 bg-zinc-950 border border-zinc-700 rounded px-1.5 py-1.5 text-zinc-100"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live BMI Display */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-zinc-400" />
                <span className="text-zinc-400">Your BMI:</span>
                <span className={`font-mono font-bold text-sm ${bmiInfo.color}`}>
                  {liveBmi > 0 ? liveBmi.toFixed(1) : '—'}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${bmiInfo.color} border-current/20`}>
                  {bmiInfo.label}
                </span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500">
                <Info className="w-3 h-3" />
                <span className="text-[10px] hidden sm:inline">{bmiInfo.desc}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Fitness Level (Sets joint-safe vs advanced progressions) */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <span className="font-semibold text-zinc-300 block flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-zinc-400" />
              2. Starting Physical Capacity
            </span>

            <div className="space-y-1.5">
              <label 
                className={`p-2.5 rounded border block cursor-pointer transition-colors ${
                  formData.fitnessLevel === 'beginner' 
                    ? 'bg-zinc-800 border-emerald-500/80 text-white' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <input
                  type="radio"
                  name="fitnessLevel"
                  value="beginner"
                  checked={formData.fitnessLevel === 'beginner'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="font-semibold text-zinc-200">
                  Heavy / Beginner (Knee & Joint-Safe Scaled)
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Overweight or struggle with ground pushups. Adapts workouts to elevated incline presses, box squats, and low-impact fat burn to protect knees and elbows.
                </div>
              </label>

              <label 
                className={`p-2.5 rounded border block cursor-pointer transition-colors ${
                  formData.fitnessLevel === 'intermediate' 
                    ? 'bg-zinc-800 border-emerald-500/80 text-white' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <input
                  type="radio"
                  name="fitnessLevel"
                  value="intermediate"
                  checked={formData.fitnessLevel === 'intermediate'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="font-semibold text-zinc-200">
                  Moderate / Ready for Overload
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Can do 5-10 standard pushups. Uses progressive backpack loading, full bodyweight squats, and tempo calisthenics.
                </div>
              </label>
            </div>
          </div>

          {/* Section 3: Target Problem Zone */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <span className="font-semibold text-zinc-300 block flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-zinc-400" />
              3. Primary Fat Loss Priority
            </span>

            <div className="grid grid-cols-3 gap-2 text-center">
              <label 
                className={`p-2 rounded border cursor-pointer ${
                  formData.focusArea === 'chest_belly' 
                    ? 'bg-zinc-800 border-emerald-500 text-white font-semibold' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <input
                  type="radio"
                  name="focusArea"
                  value="chest_belly"
                  checked={formData.focusArea === 'chest_belly'}
                  onChange={handleChange}
                  className="sr-only"
                />
                Chest & Belly
              </label>

              <label 
                className={`p-2 rounded border cursor-pointer ${
                  formData.focusArea === 'visceral_belly' 
                    ? 'bg-zinc-800 border-emerald-500 text-white font-semibold' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <input
                  type="radio"
                  name="focusArea"
                  value="visceral_belly"
                  checked={formData.focusArea === 'visceral_belly'}
                  onChange={handleChange}
                  className="sr-only"
                />
                Belly & Love Handles
              </label>

              <label 
                className={`p-2 rounded border cursor-pointer ${
                  formData.focusArea === 'all_over' 
                    ? 'bg-zinc-800 border-emerald-500 text-white font-semibold' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                }`}
              >
                <input
                  type="radio"
                  name="focusArea"
                  value="all_over"
                  checked={formData.focusArea === 'all_over'}
                  onChange={handleChange}
                  className="sr-only"
                />
                All-Over Fat Loss
              </label>
            </div>

            {/* Personalization Preview */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 space-y-1.5 text-[11px]">
              <span className="text-zinc-500 font-semibold block">Your Workout Will Be Personalized:</span>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                <span>
                  {formData.fitnessLevel === 'beginner' 
                    ? '10 joint-safe exercises per day, beginner-scaled reps & rest' 
                    : '10 progressive overload exercises per day, standard intensity'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                <span>
                  Rest periods {liveBmi >= 30 ? '40% longer' : liveBmi >= 25 ? '15% longer' : 'standard'} based on BMI {liveBmi > 0 ? liveBmi.toFixed(1) : ''}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                <span>
                  {formData.focusArea === 'chest_belly' 
                    ? 'Chest & core exercises prioritized first in rotation' 
                    : formData.focusArea === 'visceral_belly'
                      ? 'Cardio & HIIT exercises front-loaded for max fat burn'
                      : 'Balanced full-body exercise order maintained'}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <span>Structure My 30-Day Workout Protocol</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
