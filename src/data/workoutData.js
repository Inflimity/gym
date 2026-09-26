// 30-Day Body Recomposition Workout Data
// 10 Exercises × 5 min each + 5 min warmup + 5 min cooldown = 60 min/day
// Smart personalization: BMI-scaled rest, focus-area prioritization, beginner/intermediate branching

const GIF_BASE = 'https://raw.githubusercontent.com/omercotkd/exercises-gifs/main/assets';
const IMG_BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises';

export const BASE_WORKOUT_SCHEDULE = [
  // ─────────────────────────────────────────────────────
  // MONDAY: CHEST & UPPER PUSH ARMOR (10 exercises)
  // ─────────────────────────────────────────────────────
  {
    id: 'mon',
    day: 'Monday',
    focus: 'Chest & Upper Push Armor',
    tagline: 'Chest Thickness, Deltoid Drive & Tricep Power',
    targetCalories: '590 kcal',
    intensity: 'High Rigor',
    totalMinutes: 60,
    warmup: {
      name: 'Dynamic Shoulder Opener',
      duration: '5 Mins',
      cues: ['Arm circles & chest openers', 'Towel pull-aparts', 'Wrist mobility']
    },
    exercises: [
      {
        id: 'm1', name: 'Backpack Deficit Push-ups',
        beginnerName: 'Incline Couch Push-ups (Joint-Safe)',
        sets: '3 sets of 10-12 reps', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Backpack + 2 books/chairs', beginnerEquipment: 'Couch or Sturdy Table',
        primaryMuscles: ['Mid Chest', 'Front Delts'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/0662.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Elevate hands for deep pectoral stretch', 'Lower chest below hand level', 'Drive up explosively with rigid core'],
        beginnerCues: ['Hands elevated on couch cushion edge to reduce load', 'Keep core firm, lower chest to cushion'],
        animationType: 'deficit-pushup'
      },
      {
        id: 'm2', name: 'Decline Push-ups (Feet on Couch)',
        beginnerName: 'Elevated High-Incline Presses',
        sets: '3 sets of 10-15 reps', beginnerSets: '3 sets of 8-10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Couch or Bed', beginnerEquipment: 'Couch Armrest / Wall',
        primaryMuscles: ['Upper Clavicular Chest', 'Shoulders'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/0301.gif`,
        realImages: [`${IMG_BASE}/Decline_Push-Up/0.jpg`, `${IMG_BASE}/Decline_Push-Up/1.jpg`],
        cues: ['Toes elevated on couch edge, body angled 35°', 'Drive elbows back at 45 degrees', 'Pause 1 second at top contraction'],
        beginnerCues: ['Focus on controlled pressing tempo without flaring elbows wide'],
        animationType: 'decline-pushup'
      },
      {
        id: 'm3', name: 'Chair Dips (Lockout Focus)',
        beginnerName: 'Bent-Knee Chair Dips (Assisted)',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 8-10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Two Sturdy Chairs', beginnerEquipment: 'Single Sturdy Chair',
        primaryMuscles: ['Lower Chest', 'Triceps'],
        secondaryMuscles: ['Front Shoulders'],
        animGifUrl: `${GIF_BASE}/0251.gif`,
        realImages: [`${IMG_BASE}/Bench_Dips/0.jpg`, `${IMG_BASE}/Bench_Dips/1.jpg`],
        cues: ['Grip chair edges shoulder-width', 'Descend to 90° elbow flexion', 'Press through palms to full lockout'],
        beginnerCues: ['Keep knees bent at 90° with feet flat to assist bodyweight with legs'],
        animationType: 'chair-dips'
      },
      {
        id: 'm4', name: 'Diamond Close-Grip Push-ups',
        beginnerName: 'Incline Diamond Couch Push-ups',
        sets: '3 sets of 10-12 reps', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Couch Edge',
        primaryMuscles: ['Triceps Horseshoe', 'Inner Chest'],
        secondaryMuscles: ['Anterior Deltoids'],
        animGifUrl: `${GIF_BASE}/0496.gif`,
        realImages: [`${IMG_BASE}/Push-Ups_-_Close_Triceps_Position/0.jpg`, `${IMG_BASE}/Push-Ups_-_Close_Triceps_Position/1.jpg`],
        cues: ['Thumbs and index fingers form a diamond', 'Tuck elbows tight against ribcage', 'Explode up through the triceps'],
        beginnerCues: ['Hands close together on couch edge, targeting triceps with less wrist load'],
        animationType: 'diamond-pushup'
      },
      {
        id: 'm5', name: 'Incline Push-ups (Volume Burnout)',
        beginnerName: 'Wall Push-up Squeeze Sets',
        sets: '3 sets to failure', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Couch or Table', beginnerEquipment: 'Wall or Countertop',
        primaryMuscles: ['Lower Chest Crescent'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/1396.gif`,
        realImages: [`${IMG_BASE}/Incline_Push-Up/0.jpg`, `${IMG_BASE}/Incline_Push-Up/1.jpg`],
        cues: ['Hands elevated on couch cushion edge', 'Fast controlled cadence to technical failure', 'Focus on peak chest contraction squeeze'],
        beginnerCues: ['Stand 3 feet from wall, press with hands shoulder-width, squeezing chest'],
        animationType: 'incline-pushup'
      },
      {
        id: 'm6', name: 'Standard Calisthenic Push-ups',
        beginnerName: 'Knee Push-up Finisher',
        sets: '3 sets to burnout', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Mat / Carpet',
        primaryMuscles: ['Mid Pectorals', 'Core'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/0662.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Hands slightly wider than shoulders', 'Flat rigid spine from heels to neck', 'Controlled 2-second negative tempo'],
        beginnerCues: ['Knees on carpet, torso rigid, full chest descent to build pushup strength'],
        animationType: 'standard-pushup'
      },
      {
        id: 'm7', name: 'Pike Push-ups (Shoulder Blast)',
        beginnerName: 'Elevated Pike Press on Couch',
        sets: '3 sets of 8-10 reps', beginnerSets: '3 sets of 6-8 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Hands on Couch',
        primaryMuscles: ['Anterior Deltoids', 'Upper Chest'],
        secondaryMuscles: ['Triceps', 'Traps'],
        animGifUrl: `${GIF_BASE}/0620.gif`,
        realImages: [`${IMG_BASE}/Pike_Push_Up/0.jpg`, `${IMG_BASE}/Pike_Push_Up/1.jpg`],
        cues: ['Hips high in inverted V position', 'Lower crown of head toward floor between hands', 'Drive up through shoulders explosively'],
        beginnerCues: ['Hands elevated on couch, hips high, press at shoulder angle to reduce load'],
        animationType: 'decline-pushup'
      },
      {
        id: 'm8', name: 'Wide-Grip Push-ups (Outer Chest)',
        beginnerName: 'Wide-Grip Incline Push-ups',
        sets: '3 sets of 12-15 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Couch or Table',
        primaryMuscles: ['Outer Pectorals', 'Front Delts'],
        secondaryMuscles: ['Serratus Anterior'],
        animGifUrl: `${GIF_BASE}/0670.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Hands placed 1.5x shoulder width', 'Flare elbows wider to target outer chest fibers', 'Deep stretch at bottom, squeeze at top'],
        beginnerCues: ['Wide hands on couch edge, focus on stretching outer chest fibers'],
        animationType: 'standard-pushup'
      },
      {
        id: 'm9', name: 'Pseudo Planche Lean Hold',
        beginnerName: 'Forward Lean Push-up Hold',
        sets: '3 sets of 20-30 seconds', beginnerSets: '3 sets of 15 seconds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Floor with Knees Down',
        primaryMuscles: ['Mid Chest', 'Front Delts', 'Core'],
        secondaryMuscles: ['Biceps', 'Forearms'],
        animGifUrl: `${GIF_BASE}/0308.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Push-up position with hands turned outward', 'Lean torso forward past hands', 'Hold intense chest tension isometrically'],
        beginnerCues: ['Knees on ground, lean forward gently to feel chest activation'],
        animationType: 'plank'
      },
      {
        id: 'm10', name: 'Isometric Chest Squeeze Press',
        beginnerName: 'Seated Chest Squeeze Press',
        sets: '3 sets of 30-40 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Towel or Hands Only', beginnerEquipment: 'Seated with Towel',
        primaryMuscles: ['Inner Chest', 'Pec Sternal Head'],
        secondaryMuscles: ['Front Delts'],
        animGifUrl: `${GIF_BASE}/0471.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Press palms together at chest height with max force', 'Maintain crushing inward pressure throughout', 'Breathe steadily while contracting'],
        beginnerCues: ['Seated or standing, press palms together to deeply activate inner chest fibers'],
        animationType: 'plank'
      }
    ],
    cooldown: {
      name: 'Pectoral Wall Stretch',
      duration: '5 Mins',
      cues: ['Doorway 90/90 chest stretch', 'Child pose with arms extended', 'Nasal diaphragm breathing']
    }
  },

  // ─────────────────────────────────────────────────────
  // TUESDAY: BACK, LATS & POSTERIOR CHAIN (10 exercises)
  // ─────────────────────────────────────────────────────
  {
    id: 'tue',
    day: 'Tuesday',
    focus: 'Back, Lats & Posterior Chain',
    tagline: 'V-Taper Lat Width, Scapular Control & Spinal Health',
    targetCalories: '570 kcal',
    intensity: 'High Rigor',
    totalMinutes: 60,
    warmup: {
      name: 'Cat-Cow & Hamstring Mobility',
      duration: '5 Mins',
      cues: ['Cat-cow spinal waves', 'Standing toe touches', 'Scapular squeezes']
    },
    exercises: [
      {
        id: 't1', name: 'Backpack Bent-over Rows',
        beginnerName: 'Supported Backpack Rows',
        sets: '3 sets of 12-15 reps', beginnerSets: '3 sets of 10-12 reps',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Loaded Backpack (8–14 kg)', beginnerEquipment: 'Backpack (5–8 kg)',
        primaryMuscles: ['Latissimus Dorsi', 'Rhomboids'],
        secondaryMuscles: ['Biceps', 'Rear Delts'],
        animGifUrl: `${GIF_BASE}/0027.gif`,
        realImages: [`${IMG_BASE}/Bent_Over_Two-Dumbbell_Row/0.jpg`, `${IMG_BASE}/Bent_Over_Two-Dumbbell_Row/1.jpg`],
        cues: ['Hinge at hips at 45° with flat lumbar spine', 'Pull backpack handles directly to lower ribs', '2-second controlled negative lowering'],
        beginnerCues: ['Support one hand on couch while rowing with the other for lower back safety'],
        animationType: 'bent-row'
      },
      {
        id: 't2', name: 'Isometric Superman Holds',
        beginnerName: 'Prone Scapular Flutter Arches',
        sets: '3 sets of 40 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Mat / Floor', beginnerEquipment: 'Carpet',
        primaryMuscles: ['Lower Back Erector Spinae', 'Glutes'],
        secondaryMuscles: ['Rear Deltoids', 'Hamstrings'],
        animGifUrl: `${GIF_BASE}/0688.gif`,
        realImages: [`${IMG_BASE}/Superman/0.jpg`, `${IMG_BASE}/Superman/1.jpg`],
        cues: ['Lie prone with arms extended overhead', 'Simultaneously raise chest and thighs off floor', 'Hold peak extension squeeze'],
        beginnerCues: ['Lift chest 2 inches off ground and hold, breathing calmly'],
        animationType: 'superman-hold'
      },
      {
        id: 't3', name: 'Glute Bridge Hip Thrusts',
        beginnerName: 'Floor Glute Bridges',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
        secondaryMuscles: ['Lower Back'],
        animGifUrl: `${GIF_BASE}/0578.gif`,
        realImages: [`${IMG_BASE}/Butt_Lift_Bridge/0.jpg`, `${IMG_BASE}/Butt_Lift_Bridge/1.jpg`],
        cues: ['Drive through heels to bridge hips upward', 'Squeeze glutes hard for 2 seconds at top', 'Avoid hyperextending the lower back'],
        beginnerCues: ['Feet flat, drive hips up and squeeze glutes to activate posterior chain'],
        animationType: 'superman-hold'
      },
      {
        id: 't4', name: 'Hollow Body Isometric Plank',
        beginnerName: 'Incline Forearm Couch Plank',
        sets: '3 sets of 45 seconds', beginnerSets: '3 sets of 25 seconds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Couch or Floor',
        primaryMuscles: ['Rectus Abdominis', 'Transverse Abs'],
        secondaryMuscles: ['Shoulders', 'Quads'],
        animGifUrl: `${GIF_BASE}/0308.gif`,
        realImages: [`${IMG_BASE}/Plank/0.jpg`, `${IMG_BASE}/Plank/1.jpg`],
        cues: ['Forearms planted under shoulders', 'Posterior pelvic tilt to flatten lower back', 'Keep active tension through floor'],
        beginnerCues: ['Forearms on couch or knees on floor to protect heavy lower back'],
        animationType: 'plank'
      },
      {
        id: 't5', name: 'Alternate Heel Touchers',
        beginnerName: 'Alternate Heel Touchers',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 15 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Obliques', 'Upper Abs'],
        secondaryMuscles: ['Transverse Core'],
        animGifUrl: `${GIF_BASE}/0006.gif`,
        realImages: [`${IMG_BASE}/Alternate_Heel_Touchers/0.jpg`, `${IMG_BASE}/Alternate_Heel_Touchers/1.jpg`],
        cues: ['Feet flat on ground, knees bent', 'Crunch up and reach side to side to touch heels', 'Feel deep lateral contraction in obliques'],
        beginnerCues: ['Small controlled lateral reaches to fire obliques without neck strain'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 't6', name: 'Prone Scapular Retractions',
        beginnerName: 'Standing Towel Pull-Aparts',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Towel',
        primaryMuscles: ['Rhomboids', 'Mid Traps'],
        secondaryMuscles: ['Rear Delts'],
        animGifUrl: `${GIF_BASE}/0652.gif`,
        realImages: [`${IMG_BASE}/Superman/0.jpg`, `${IMG_BASE}/Superman/1.jpg`],
        cues: ['Lie chest-down with arms in W shape', 'Pinch shoulder blades hard toward spine', 'Hold 2-second isometric contraction at apex'],
        beginnerCues: ['Pull towel apart at chest level to fire upper back and fix slouching posture'],
        animationType: 'superman-hold'
      },
      {
        id: 't7', name: 'Reverse Snow Angels',
        beginnerName: 'Prone Arm Slides',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Mat / Floor', beginnerEquipment: 'Carpet',
        primaryMuscles: ['Rear Deltoids', 'Rhomboids'],
        secondaryMuscles: ['Lower Traps', 'Erector Spinae'],
        animGifUrl: `${GIF_BASE}/0603.gif`,
        realImages: [`${IMG_BASE}/Superman/0.jpg`, `${IMG_BASE}/Superman/1.jpg`],
        cues: ['Lie face-down, arms at sides with thumbs up', 'Sweep arms overhead in arc while lifting chest', 'Reverse the arc slowly back to sides'],
        beginnerCues: ['Keep arms low, slide along floor in small arcs to build upper back endurance'],
        animationType: 'superman-hold'
      },
      {
        id: 't8', name: 'Towel Face Pulls',
        beginnerName: 'Towel Rear Delt Pulls',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Towel + Door Handle', beginnerEquipment: 'Towel',
        primaryMuscles: ['Rear Deltoids', 'Mid Traps'],
        secondaryMuscles: ['Rotator Cuff', 'Biceps'],
        animGifUrl: `${GIF_BASE}/0027.gif`,
        realImages: [`${IMG_BASE}/Bent_Over_Two-Dumbbell_Row/0.jpg`, `${IMG_BASE}/Bent_Over_Two-Dumbbell_Row/1.jpg`],
        cues: ['Loop towel around door handle, lean back', 'Pull toward face, flaring elbows high and wide', 'Squeeze rear delts and hold 1 second'],
        beginnerCues: ['Stand with towel, pull apart at face height to activate rear shoulders'],
        animationType: 'bent-row'
      },
      {
        id: 't9', name: 'Dead Bug Core Stabilizers',
        beginnerName: 'Bent-Knee Dead Bug',
        sets: '3 sets of 10 reps per side', beginnerSets: '3 sets of 8 reps per side',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Deep Core', 'Transverse Abs'],
        secondaryMuscles: ['Hip Flexors', 'Shoulders'],
        animGifUrl: `${GIF_BASE}/0289.gif`,
        realImages: [`${IMG_BASE}/Dead_Bug/0.jpg`, `${IMG_BASE}/Dead_Bug/1.jpg`],
        cues: ['Lie on back, arms straight up, knees at 90°', 'Extend opposite arm and leg simultaneously', 'Keep lower back pressed firmly into floor'],
        beginnerCues: ['Only extend legs, keep arms stationary overhead for stability'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 't10', name: 'Bird-Dog Spinal Stabilizers',
        beginnerName: 'All-Fours Arm-Only Bird-Dog',
        sets: '3 sets of 10 reps per side', beginnerSets: '3 sets of 8 reps per side',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Mat / Floor', beginnerEquipment: 'Carpet',
        primaryMuscles: ['Erector Spinae', 'Glute Medius'],
        secondaryMuscles: ['Deep Core', 'Rear Delts'],
        animGifUrl: `${GIF_BASE}/0185.gif`,
        realImages: [`${IMG_BASE}/Bird_Dog/0.jpg`, `${IMG_BASE}/Bird_Dog/1.jpg`],
        cues: ['All fours, extend opposite arm and leg straight', 'Hold extension for 2 seconds at peak', 'Move slowly without rocking hips or torso'],
        beginnerCues: ['Extend one arm at a time, keeping hips square and spine neutral'],
        animationType: 'plank'
      }
    ],
    cooldown: {
      name: 'Cat-Cow & Lumbar Relief',
      duration: '5 Mins',
      cues: ['Gentle cobra spinal extension', 'Seated forward hamstring fold', 'Deep diaphragmatic breathing']
    }
  },

  // ─────────────────────────────────────────────────────
  // WEDNESDAY: LEG HYPERTROPHY & CALORIC FURNACE (10)
  // ─────────────────────────────────────────────────────
  {
    id: 'wed',
    day: 'Wednesday',
    focus: 'Leg Hypertrophy & Caloric Furnace',
    tagline: 'Quad Drive, Hamstring Sweep & Maximum Caloric Burn',
    targetCalories: '660 kcal',
    intensity: 'High Rigor',
    totalMinutes: 60,
    warmup: {
      name: 'Air Squats & Ankle Mobilization',
      duration: '5 Mins',
      cues: ['Bodyweight pause squats', 'Lunge with torso twist', 'Ankle rocking against wall']
    },
    exercises: [
      {
        id: 'w1', name: 'Backpack Goblet Squats',
        beginnerName: 'Assisted Chair / Box Squats',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 10-12 reps',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Heavy Backpack hugged to chest', beginnerEquipment: 'Sturdy Chair or Couch',
        primaryMuscles: ['Quadriceps', 'Glutes'],
        secondaryMuscles: ['Core Stabilizers', 'Calves'],
        animGifUrl: `${GIF_BASE}/0798.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Squat/0.jpg`, `${IMG_BASE}/Bodyweight_Squat/1.jpg`],
        cues: ['Hug backpack against sternum with elbows tucked', 'Sink hips back and down below parallel', 'Drive through mid-foot to stand with glute squeeze'],
        beginnerCues: ['Sit down lightly onto chair edge, then drive through heels to stand'],
        animationType: 'goblet-squat'
      },
      {
        id: 'w2', name: 'Bulgarian Split Squats (Rear Elevated)',
        beginnerName: 'Assisted Reverse Lunges',
        sets: '3 sets of 10 reps per leg', beginnerSets: '3 sets of 8 reps per leg',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Couch or Chair', beginnerEquipment: 'Hand on Wall for Balance',
        primaryMuscles: ['Unilateral Quads', 'Glute Medius'],
        secondaryMuscles: ['Hamstrings'],
        animGifUrl: `${GIF_BASE}/0567.gif`,
        realImages: [`${IMG_BASE}/Split_Squats/0.jpg`, `${IMG_BASE}/Split_Squats/1.jpg`],
        cues: ['Rest rear foot on couch edge behind you', 'Drop rear knee straight down toward floor', 'Press through front heel without leaning forward'],
        beginnerCues: ['Step backward into lunge with hand resting on wall for balance'],
        animationType: 'split-squat'
      },
      {
        id: 'w3', name: 'Bodyweight Walking Lunges',
        beginnerName: 'Stationary Step Lunges',
        sets: '3 sets of 16 strides', beginnerSets: '3 sets of 10 steps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor Space', beginnerEquipment: 'Floor',
        primaryMuscles: ['Quads', 'Glutes'],
        secondaryMuscles: ['Hip Flexors', 'Calves'],
        animGifUrl: `${GIF_BASE}/1432.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Walking_Lunge/0.jpg`, `${IMG_BASE}/Bodyweight_Walking_Lunge/1.jpg`],
        cues: ['Confident forward strides with upright torso', 'Lower rear knee until it lightly kisses carpet', 'Smooth continuous pacing'],
        beginnerCues: ['Step forward smoothly without slamming knee to floor'],
        animationType: 'split-squat'
      },
      {
        id: 'w4', name: 'Single-Leg Glute Bridges',
        beginnerName: 'Two-Leg Glute Bridge Hold',
        sets: '3 sets of 10 reps per leg', beginnerSets: '3 sets of 25 second holds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
        secondaryMuscles: ['Core'],
        animGifUrl: `${GIF_BASE}/0578.gif`,
        realImages: [`${IMG_BASE}/Butt_Lift_Bridge/0.jpg`, `${IMG_BASE}/Butt_Lift_Bridge/1.jpg`],
        cues: ['One foot planted, opposite leg held vertical', 'Drive hips up using single working glute', 'Pause 1 second at top elevation'],
        beginnerCues: ['Both feet flat, bridge hips high and hold peak glute squeeze'],
        animationType: 'superman-hold'
      },
      {
        id: 'w5', name: 'Air Squats (Tempo Burnout)',
        beginnerName: 'Quarter-Squat Tempo Pulses',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Bodyweight', beginnerEquipment: 'Bodyweight',
        primaryMuscles: ['Quads', 'Cardio MetCon'],
        secondaryMuscles: ['Calves'],
        animGifUrl: `${GIF_BASE}/0798.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Squat/0.jpg`, `${IMG_BASE}/Bodyweight_Squat/1.jpg`],
        cues: ['High tempo, full depth squats', 'Chest proud, knees tracking over toes', 'Keep continuous muscular tension'],
        beginnerCues: ['Squat to comfortable depth, drive up and squeeze quads'],
        animationType: 'goblet-squat'
      },
      {
        id: 'w6', name: 'Standing Calf Raises (Eccentric)',
        beginnerName: 'Standing Calf Raises',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 15 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Step or Floor', beginnerEquipment: 'Wall for Balance',
        primaryMuscles: ['Gastrocnemius', 'Soleus'],
        secondaryMuscles: ['Ankles'],
        animGifUrl: `${GIF_BASE}/0240.gif`,
        realImages: [`${IMG_BASE}/Standing_Calf_Raises/0.jpg`, `${IMG_BASE}/Standing_Calf_Raises/1.jpg`],
        cues: ['Raise high on balls of feet', 'Hold peak calf contraction for 2 seconds', 'Slow 3-second descent'],
        beginnerCues: ['Hands on wall for support, press high on toes to tone lower legs'],
        animationType: 'goblet-squat'
      },
      {
        id: 'w7', name: 'Wall Sit Endurance Hold',
        beginnerName: 'Partial Wall Sit (Higher Angle)',
        sets: '3 sets of 40 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Wall', beginnerEquipment: 'Wall',
        primaryMuscles: ['Quadriceps', 'Glutes'],
        secondaryMuscles: ['Core', 'Calves'],
        animGifUrl: `${GIF_BASE}/0881.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Squat/0.jpg`, `${IMG_BASE}/Bodyweight_Squat/1.jpg`],
        cues: ['Back flat against wall, thighs parallel to floor', 'Knees at 90° directly above ankles', 'Breathe steadily through burn'],
        beginnerCues: ['Slide down to comfortable angle, hold as long as possible'],
        animationType: 'plank'
      },
      {
        id: 'w8', name: 'Backpack Step-ups (Power Drive)',
        beginnerName: 'Bodyweight Step-ups on Stair',
        sets: '3 sets of 10 per leg', beginnerSets: '3 sets of 8 per leg',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Sturdy Chair + Backpack', beginnerEquipment: 'Bottom Stair Step',
        primaryMuscles: ['Quads', 'Glutes'],
        secondaryMuscles: ['Hip Flexors', 'Calves'],
        animGifUrl: `${GIF_BASE}/0729.gif`,
        realImages: [`${IMG_BASE}/Step-Up_with_Knee_Raise/0.jpg`, `${IMG_BASE}/Step-Up_with_Knee_Raise/1.jpg`],
        cues: ['Step up driving through heel of working leg', 'Stand fully tall at top before descending', 'Control the negative step-down'],
        beginnerCues: ['Use bottom stair, step up and down controlled with hand on railing'],
        animationType: 'split-squat'
      },
      {
        id: 'w9', name: 'Sumo Squat Pulses',
        beginnerName: 'Wide-Stance Quarter Squats',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Bodyweight', beginnerEquipment: 'Bodyweight',
        primaryMuscles: ['Inner Thighs (Adductors)', 'Glutes'],
        secondaryMuscles: ['Quads', 'Core'],
        animGifUrl: `${GIF_BASE}/1576.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Squat/0.jpg`, `${IMG_BASE}/Bodyweight_Squat/1.jpg`],
        cues: ['Wide stance, toes pointed outward 45°', 'Sink hips low and pulse at bottom range', 'Keep torso upright throughout'],
        beginnerCues: ['Wide comfortable stance, small controlled pulses at quarter depth'],
        animationType: 'goblet-squat'
      },
      {
        id: 'w10', name: 'Side-Lying Hip Abductions',
        beginnerName: 'Side-Lying Leg Lifts',
        sets: '3 sets of 15 per side', beginnerSets: '3 sets of 10 per side',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Mat / Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Glute Medius', 'Hip Abductors'],
        secondaryMuscles: ['Obliques'],
        animGifUrl: `${GIF_BASE}/0591.gif`,
        realImages: [`${IMG_BASE}/Side_Lying_Hip_Adduction/0.jpg`, `${IMG_BASE}/Side_Lying_Hip_Adduction/1.jpg`],
        cues: ['Lie on side, legs stacked, hips forward', 'Lift top leg 18 inches with control', 'Pause 1 second at top, lower slowly'],
        beginnerCues: ['Lift top leg to comfortable height and lower with control'],
        animationType: 'superman-hold'
      }
    ],
    cooldown: {
      name: 'Pigeon Pose & Quad Stretch',
      duration: '5 Mins',
      cues: ['Pigeon pose 1 min per side', 'Couch quad stretch', 'Seated butterfly groin opener']
    }
  },

  // ─────────────────────────────────────────────────────
  // THURSDAY: CARDIO ENGINE & METCON FAT SHRED (10)
  // ─────────────────────────────────────────────────────
  {
    id: 'thu',
    day: 'Thursday',
    focus: 'Cardio Engine & MetCon Fat Shred',
    tagline: 'High Intensity Intervals, Core Conditioning & Lipid Mobilization',
    targetCalories: '630 kcal',
    intensity: 'Maximum Pacing',
    totalMinutes: 60,
    warmup: {
      name: 'Light Shuffles & Windmills',
      duration: '5 Mins',
      cues: ['Arm windmills', 'Side shuffles', 'Gentle boxer hops']
    },
    exercises: [
      {
        id: 'th1', name: 'Mountain Climber Sprints',
        beginnerName: 'Elevated Couch Mountain Climbers',
        sets: '3 sets of 40 seconds', beginnerSets: '3 sets of 25 seconds',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Hands on Couch',
        primaryMuscles: ['Core', 'Cardiovascular Engine'],
        secondaryMuscles: ['Shoulders', 'Quads'],
        animGifUrl: `${GIF_BASE}/0658.gif`,
        realImages: [`${IMG_BASE}/Mountain_Climbers/0.jpg`, `${IMG_BASE}/Mountain_Climbers/1.jpg`],
        cues: ['Solid push-up plank starting position', 'Drive knees rapidly into chest like sprint pistons', 'Keep hips down level with shoulders'],
        beginnerCues: ['Hands elevated on couch. Drive knees at a steady, joint-safe rhythm'],
        animationType: 'mountain-climbers'
      },
      {
        id: 'th2', name: 'Air Bike Bicycle Crunches',
        beginnerName: 'Seated In-Chair Bicycle Twists',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Mat / Floor', beginnerEquipment: 'Chair or Mat',
        primaryMuscles: ['Obliques', 'Rectus Abdominis'],
        secondaryMuscles: ['Hip Flexors'],
        animGifUrl: `${GIF_BASE}/0003.gif`,
        realImages: [`${IMG_BASE}/Air_Bike/0.jpg`, `${IMG_BASE}/Air_Bike/1.jpg`],
        cues: ['Rotate opposite armpit to knee, not just elbow', 'Fully extend non-working leg forward', 'Rhythmic controlled pedaling cadence'],
        beginnerCues: ['Sit tall, bring opposite elbow toward knee to target belly fat'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 'th3', name: 'Flutter Kicks (Core Burnout)',
        beginnerName: 'Bent-Knee Alternating Heel Taps',
        sets: '3 sets of 40 seconds', beginnerSets: '3 sets of 25 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Lower Abdominals', 'Hip Flexors'],
        secondaryMuscles: ['Quads'],
        animGifUrl: `${GIF_BASE}/0372.gif`,
        realImages: [`${IMG_BASE}/Flutter_Kicks/0.jpg`, `${IMG_BASE}/Flutter_Kicks/1.jpg`],
        cues: ['Hands under glutes to support lower back', 'Legs straight, kick small rapid flutter pulses', 'Keep lower back pressed firmly into floor'],
        beginnerCues: ['Knees bent, lower one heel to tap floor and return'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 'th4', name: 'Standard Burpees (Chest to Deck)',
        beginnerName: 'Low-Impact Step-Back Burpees',
        sets: '3 sets of 10 reps', beginnerSets: '3 sets of 6 reps',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Floor', beginnerEquipment: 'Floor or Couch',
        primaryMuscles: ['Full Body Compound', 'Cardio MetCon'],
        secondaryMuscles: ['Chest', 'Quads', 'Calves'],
        animGifUrl: `${GIF_BASE}/0514.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Drop to squat, kick out to push-up plank', 'Perform full chest-to-deck push-up', 'Snap feet forward and jump vertically'],
        beginnerCues: ['Hands to couch, step back one foot at a time, step forward, stand tall'],
        animationType: 'burpees'
      },
      {
        id: 'th5', name: 'Plank Shoulder Taps',
        beginnerName: 'Knee Plank Shoulder Taps',
        sets: '3 sets of 16 taps', beginnerSets: '3 sets of 10 taps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Anti-Rotational Core', 'Shoulders'],
        secondaryMuscles: ['Abs'],
        animGifUrl: `${GIF_BASE}/0493.gif`,
        realImages: [`${IMG_BASE}/Plank/0.jpg`, `${IMG_BASE}/Plank/1.jpg`],
        cues: ['Feet slightly wider than shoulders for stability', 'Tap opposite shoulder without rocking hips', 'Maintain absolute core rigidity'],
        beginnerCues: ['Knees on floor, tap shoulders alternately while tightening belly'],
        animationType: 'plank'
      },
      {
        id: 'th6', name: 'High-Knee Sprint In Place',
        beginnerName: 'High-Knee March In Place',
        sets: '3 rounds of 45 seconds', beginnerSets: '3 rounds of 30 seconds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Cardiovascular System', 'Calves'],
        secondaryMuscles: ['Hip Flexors', 'Core'],
        animGifUrl: `${GIF_BASE}/1000.gif`,
        realImages: [`${IMG_BASE}/Mountain_Climbers/0.jpg`, `${IMG_BASE}/Mountain_Climbers/1.jpg`],
        cues: ['Drive knees above hip crease rapidly', 'Pump arms aggressively in sync', 'Land softly on balls of feet'],
        beginnerCues: ['March briskly in place, driving knees to waist height'],
        animationType: 'jogging-metcon'
      },
      {
        id: 'th7', name: 'Star Jumps (Explosive Cardio)',
        beginnerName: 'Half-Jacks (Low Impact)',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Full Body Cardio', 'Calves'],
        secondaryMuscles: ['Shoulders', 'Quads'],
        animGifUrl: `${GIF_BASE}/0813.gif`,
        realImages: [`${IMG_BASE}/Jumping_Jacks/0.jpg`, `${IMG_BASE}/Jumping_Jacks/1.jpg`],
        cues: ['Squat down, explode upward spreading arms and legs', 'Land softly back into squat position', 'Maximize height and limb extension'],
        beginnerCues: ['Step one foot out at a time with arm raises, no jumping required'],
        animationType: 'burpees'
      },
      {
        id: 'th8', name: 'Squat Jump Explosions',
        beginnerName: 'Pulse Squat to Calf Raise',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Quads', 'Glutes', 'Calves'],
        secondaryMuscles: ['Cardiovascular System'],
        animGifUrl: `${GIF_BASE}/0514.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Squat/0.jpg`, `${IMG_BASE}/Bodyweight_Squat/1.jpg`],
        cues: ['Sink into deep squat, explode vertically', 'Swing arms up for momentum', 'Land softly and immediately sink into next rep'],
        beginnerCues: ['Squat to comfortable depth, rise up onto toes with arm swing, no jump'],
        animationType: 'goblet-squat'
      },
      {
        id: 'th9', name: 'Lateral Shuffle Sprints',
        beginnerName: 'Side Step Touches',
        sets: '3 sets of 30 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor Space', beginnerEquipment: 'Floor Space',
        primaryMuscles: ['Cardio Agility', 'Glute Medius'],
        secondaryMuscles: ['Calves', 'Core'],
        animGifUrl: `${GIF_BASE}/0529.gif`,
        realImages: [`${IMG_BASE}/Mountain_Climbers/0.jpg`, `${IMG_BASE}/Mountain_Climbers/1.jpg`],
        cues: ['Athletic stance, shuffle 3 steps left then right', 'Stay low in half-squat through entire movement', 'Touch floor at each end point'],
        beginnerCues: ['Side-step calmly with control, tap hand to thigh at each end'],
        animationType: 'mountain-climbers'
      },
      {
        id: 'th10', name: 'Bear Crawl Forward & Back',
        beginnerName: 'All-Fours Rocking Crawl',
        sets: '3 sets of 30 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor Space', beginnerEquipment: 'Floor',
        primaryMuscles: ['Core', 'Shoulders', 'Quads'],
        secondaryMuscles: ['Cardiovascular System'],
        animGifUrl: `${GIF_BASE}/0241.gif`,
        realImages: [`${IMG_BASE}/Plank/0.jpg`, `${IMG_BASE}/Plank/1.jpg`],
        cues: ['All fours with knees 1 inch off ground', 'Crawl forward 4 steps then backward 4 steps', 'Keep hips level and core braced throughout'],
        beginnerCues: ['Rock forward and back on hands and knees with control'],
        animationType: 'plank'
      }
    ],
    cooldown: {
      name: 'De-escalation Walk & Calf Stretch',
      duration: '5 Mins',
      cues: ['Slow walking cadence to drop heart rate', 'Calf wall stretches', 'Box breathing 4s-4s-4s-4s']
    }
  },

  // ─────────────────────────────────────────────────────
  // FRIDAY: CHEST VOLUME & ARM DENSITY (10 exercises)
  // ─────────────────────────────────────────────────────
  {
    id: 'fri',
    day: 'Friday',
    focus: 'Chest Volume & Arm Density',
    tagline: 'Triple-Angle Push Density, Bicep Overload & Tricep Finisher',
    targetCalories: '610 kcal',
    intensity: 'High Volume Burnout',
    totalMinutes: 60,
    warmup: {
      name: 'Scapular Push-ups & Arm Swings',
      duration: '5 Mins',
      cues: ['Scapular protraction push-ups', 'Pec deck arm swings', 'Arm windmills']
    },
    exercises: [
      {
        id: 'f1', name: 'Standard Calisthenic Push-ups',
        beginnerName: 'Incline Push-ups (Hands on Couch)',
        sets: '3 sets to technical failure', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Couch or Table',
        primaryMuscles: ['Mid Pectorals', 'Front Delts'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/0662.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Hands slightly wider than shoulders', 'Touch chest fully to floor', 'Lock out elbows with authority at top'],
        beginnerCues: ['Hands on couch, press with good form to build upper body strength'],
        animationType: 'standard-pushup'
      },
      {
        id: 'f2', name: 'Chair Deficit Dips',
        beginnerName: 'Chair Edge Dips (Feet Flat)',
        sets: '3 sets of 12-15 reps', beginnerSets: '3 sets of 8-10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Two Chairs', beginnerEquipment: 'Single Sturdy Chair',
        primaryMuscles: ['Triceps Brachii', 'Lower Chest'],
        secondaryMuscles: ['Front Shoulders'],
        animGifUrl: `${GIF_BASE}/0251.gif`,
        realImages: [`${IMG_BASE}/Bench_Dips/0.jpg`, `${IMG_BASE}/Bench_Dips/1.jpg`],
        cues: ['Grip chair edges securely', 'Descend until elbows reach 90 degrees', 'Drive through palms without shrugging'],
        beginnerCues: ['Feet flat on ground, use legs for assistance as needed'],
        animationType: 'chair-dips'
      },
      {
        id: 'f3', name: 'Incline Push-ups (Hands on Couch)',
        beginnerName: 'Elevated High-Incline Burnout',
        sets: '3 sets to failure', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Couch or Table', beginnerEquipment: 'Couch',
        primaryMuscles: ['Lower Sternal Chest'],
        secondaryMuscles: ['Triceps'],
        animGifUrl: `${GIF_BASE}/1396.gif`,
        realImages: [`${IMG_BASE}/Incline_Push-Up/0.jpg`, `${IMG_BASE}/Incline_Push-Up/1.jpg`],
        cues: ['Hands grip edge of couch cushion', 'High repetition tempo to technical failure', 'Squeeze chest at peak contraction'],
        beginnerCues: ['Continuous controlled pressing reps to fatigue chest fibers'],
        animationType: 'incline-pushup'
      },
      {
        id: 'f4', name: 'Close Triceps Diamond Push-ups',
        beginnerName: 'Close-Grip Wall Push-ups',
        sets: '3 sets of 10-12 reps', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Wall or Countertop',
        primaryMuscles: ['Triceps Horseshoe'],
        secondaryMuscles: ['Inner Chest', 'Front Delts'],
        animGifUrl: `${GIF_BASE}/0496.gif`,
        realImages: [`${IMG_BASE}/Push-Ups_-_Close_Triceps_Position/0.jpg`, `${IMG_BASE}/Push-Ups_-_Close_Triceps_Position/1.jpg`],
        cues: ['Thumbs and index fingers touching in diamond', 'Tuck elbows tight against ribcage', 'Explode through palms to recruit all tricep heads'],
        beginnerCues: ['Hands close together on wall, press with triceps emphasis'],
        animationType: 'diamond-pushup'
      },
      {
        id: 'f5', name: 'Backpack Bicep Hammer Curls',
        beginnerName: 'Backpack Hammer Curls (Light)',
        sets: '3 sets of 12-15 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Loaded Backpack (side handles)', beginnerEquipment: 'Light Backpack (4–6 kg)',
        primaryMuscles: ['Biceps Brachii', 'Brachialis'],
        secondaryMuscles: ['Forearms'],
        animGifUrl: `${GIF_BASE}/0027.gif`,
        realImages: [`${IMG_BASE}/Alternate_Hammer_Curl/0.jpg`, `${IMG_BASE}/Alternate_Hammer_Curl/1.jpg`],
        cues: ['Grip top strap or side handles firmly', 'Keep upper arms pinned strictly to sides', 'Squeeze biceps hard at top of curl'],
        beginnerCues: ['Elbows tucked, curl backpack smoothly to chest'],
        animationType: 'bent-row'
      },
      {
        id: 'f6', name: 'Deltoid Arm Circles & Shoulder Burnout',
        beginnerName: 'Deltoid Arm Circles',
        sets: '3 sets of 45 seconds', beginnerSets: '3 sets of 30 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Bodyweight', beginnerEquipment: 'Bodyweight',
        primaryMuscles: ['Lateral Deltoids', 'Rotator Cuff'],
        secondaryMuscles: ['Traps'],
        animGifUrl: `${GIF_BASE}/0652.gif`,
        realImages: [`${IMG_BASE}/Arm_Circles/0.jpg`, `${IMG_BASE}/Arm_Circles/1.jpg`],
        cues: ['Arms straight out at shoulder height', 'Small controlled circular rotations', 'Total shoulder lactic burnout'],
        beginnerCues: ['Keep shoulders rolled back, small circles to tone arms and delts'],
        animationType: 'standard-pushup'
      },
      {
        id: 'f7', name: 'Backpack Overhead Tricep Extension',
        beginnerName: 'Seated Overhead Tricep Press',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Loaded Backpack', beginnerEquipment: 'Light Backpack',
        primaryMuscles: ['Triceps Long Head'],
        secondaryMuscles: ['Shoulders'],
        animGifUrl: `${GIF_BASE}/0251.gif`,
        realImages: [`${IMG_BASE}/Bench_Dips/0.jpg`, `${IMG_BASE}/Bench_Dips/1.jpg`],
        cues: ['Hold backpack behind head with both hands', 'Extend arms straight overhead fully', 'Lower behind head with 2-second negative'],
        beginnerCues: ['Seated for stability, press light backpack overhead, focusing on tricep squeeze'],
        animationType: 'chair-dips'
      },
      {
        id: 'f8', name: 'Towel Bicep Isometric Curls',
        beginnerName: 'Standing Towel Curls',
        sets: '3 sets of 30 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Towel + Foot Anchor', beginnerEquipment: 'Towel',
        primaryMuscles: ['Biceps Brachii', 'Brachialis'],
        secondaryMuscles: ['Forearms'],
        animGifUrl: `${GIF_BASE}/0027.gif`,
        realImages: [`${IMG_BASE}/Alternate_Hammer_Curl/0.jpg`, `${IMG_BASE}/Alternate_Hammer_Curl/1.jpg`],
        cues: ['Step on center of towel, grip both ends', 'Curl up against towel resistance and hold peak', 'Maximum contraction throughout hold'],
        beginnerCues: ['Stand on towel, curl handles up and hold the squeeze position'],
        animationType: 'bent-row'
      },
      {
        id: 'f9', name: 'Backpack Reverse Curls',
        beginnerName: 'Light Backpack Reverse Curls',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Loaded Backpack', beginnerEquipment: 'Light Backpack',
        primaryMuscles: ['Brachioradialis', 'Forearm Extensors'],
        secondaryMuscles: ['Biceps'],
        animGifUrl: `${GIF_BASE}/0027.gif`,
        realImages: [`${IMG_BASE}/Alternate_Hammer_Curl/0.jpg`, `${IMG_BASE}/Alternate_Hammer_Curl/1.jpg`],
        cues: ['Overhand grip on backpack top strap', 'Curl upward keeping wrists rigid', 'Control the descent slowly for forearm burn'],
        beginnerCues: ['Light backpack, overhand grip, curl with rigid wrists to build forearms'],
        animationType: 'bent-row'
      },
      {
        id: 'f10', name: 'Isometric Wall Push Hold',
        beginnerName: 'Wall Push Isometric',
        sets: '3 sets of 30 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Wall', beginnerEquipment: 'Wall',
        primaryMuscles: ['Chest', 'Front Delts', 'Triceps'],
        secondaryMuscles: ['Core'],
        animGifUrl: `${GIF_BASE}/1396.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Push against wall with maximum force at chest height', 'Maintain full body tension throughout', 'Breathe normally while pushing as hard as possible'],
        beginnerCues: ['Stand at arms length from wall, push with max effort to fire all push muscles'],
        animationType: 'plank'
      }
    ],
    cooldown: {
      name: 'Overhead Triceps & Chest Stretch',
      duration: '5 Mins',
      cues: ['Behind-head triceps stretch 45s each', 'Clasp hands behind back chest expander', 'Child pose decompression']
    }
  },

  // ─────────────────────────────────────────────────────
  // SATURDAY: 360° CORE SHRED & EXPLOSIVE HIIT (10)
  // ─────────────────────────────────────────────────────
  {
    id: 'sat',
    day: 'Saturday',
    focus: '360° Core Shred & Explosive HIIT',
    tagline: 'Abdominal Density, Oblique Power & Total Caloric Output',
    targetCalories: '640 kcal',
    intensity: 'High Rigor',
    totalMinutes: 60,
    warmup: {
      name: 'Glute Bridges & Bird-Dogs',
      duration: '5 Mins',
      cues: ['Bird-dogs 8 reps each side', 'Glute bridge activation holds', 'Jumping jacks']
    },
    exercises: [
      {
        id: 's1', name: 'Air Bike Bicycle Crunches',
        beginnerName: 'Gentle Floor Bicycle Pulses',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Mat / Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Internal & External Obliques', 'Rectus Abs'],
        secondaryMuscles: ['Hip Flexors'],
        animGifUrl: `${GIF_BASE}/0003.gif`,
        realImages: [`${IMG_BASE}/Air_Bike/0.jpg`, `${IMG_BASE}/Air_Bike/1.jpg`],
        cues: ['Fingertips behind ears without pulling neck', 'Rotate armpit toward opposite knee', 'Extend non-working leg forward 6 inches off ground'],
        beginnerCues: ['Slow rotational crunches, targeting midsection'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's2', name: 'Mountain Climber Piston Sprints',
        beginnerName: 'Incline Mountain Climbers',
        sets: '3 sets of 40 seconds', beginnerSets: '3 sets of 25 seconds',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Couch',
        primaryMuscles: ['Transverse Core', 'Cardiovascular Output'],
        secondaryMuscles: ['Shoulders', 'Quads'],
        animGifUrl: `${GIF_BASE}/0658.gif`,
        realImages: [`${IMG_BASE}/Mountain_Climbers/0.jpg`, `${IMG_BASE}/Mountain_Climbers/1.jpg`],
        cues: ['High plank starting position', 'Drive knees rapidly into chest with piston rhythm', 'Keep hips down level with shoulders'],
        beginnerCues: ['Hands on couch for joint relief, steady knee drives'],
        animationType: 'mountain-climbers'
      },
      {
        id: 's3', name: 'Bent-Knee Hip & Pelvic Raises',
        beginnerName: 'Bent-Knee Hip Raises',
        sets: '3 sets of 15 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Lower Abdominals'],
        secondaryMuscles: ['Hip Flexors'],
        animGifUrl: `${GIF_BASE}/0001.gif`,
        realImages: [`${IMG_BASE}/Bent-Knee_Hip_Raise/0.jpg`, `${IMG_BASE}/Bent-Knee_Hip_Raise/1.jpg`],
        cues: ['Lie on back with knees bent at 90°', 'Curl pelvis upward toward ribcage using lower abs', 'Lower under control without swinging legs'],
        beginnerCues: ['Curl hips up off floor with lower abdominal control'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's4', name: 'Explosive Full Body Burpees',
        beginnerName: 'Step-Back Burpees (No Jump)',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 6 reps',
        workMinutes: 5, restSeconds: 60,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Full Body Compound', 'Metabolic Engine'],
        secondaryMuscles: ['Chest', 'Quads', 'Glutes'],
        animGifUrl: `${GIF_BASE}/0514.gif`,
        realImages: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`],
        cues: ['Drop to squat, kick feet back to plank', 'Full chest-to-deck floor push-up', 'Snap feet forward and explode vertically'],
        beginnerCues: ['Step feet back, step forward, stand tall with hands overhead'],
        animationType: 'burpees'
      },
      {
        id: 's5', name: 'Isometric Side & Center Plank',
        beginnerName: 'Knee Side Plank Hold',
        sets: '3 sets of 35 seconds', beginnerSets: '3 sets of 20 seconds',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Transverse Core', 'Lateral Obliques'],
        secondaryMuscles: ['Shoulder Girdle'],
        animGifUrl: `${GIF_BASE}/0308.gif`,
        realImages: [`${IMG_BASE}/Plank/0.jpg`, `${IMG_BASE}/Plank/1.jpg`],
        cues: ['Elbow stacked under shoulder', 'Straight line from ankles to head', 'Squeeze obliques and glutes'],
        beginnerCues: ['Bend bottom knee on floor for support, raise hips to firm side waist'],
        animationType: 'plank'
      },
      {
        id: 's6', name: 'Alternate Heel Touchers',
        beginnerName: 'Alternate Heel Touchers',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Oblique Walls', 'Upper Abs'],
        secondaryMuscles: ['Core'],
        animGifUrl: `${GIF_BASE}/0006.gif`,
        realImages: [`${IMG_BASE}/Alternate_Heel_Touchers/0.jpg`, `${IMG_BASE}/Alternate_Heel_Touchers/1.jpg`],
        cues: ['Shoulder blades lifted 1 inch off floor', 'Side-bend to tap left heel, then right heel', 'Constant isometric abdominal burn'],
        beginnerCues: ['Tap heels alternately to trim love handles'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's7', name: 'V-Up Jackknife Crunches',
        beginnerName: 'Seated Knee Tucks',
        sets: '3 sets of 12 reps', beginnerSets: '3 sets of 8 reps',
        workMinutes: 5, restSeconds: 50,
        equipment: 'Mat / Floor', beginnerEquipment: 'Mat or Chair Edge',
        primaryMuscles: ['Rectus Abdominis', 'Hip Flexors'],
        secondaryMuscles: ['Lower Abs'],
        animGifUrl: `${GIF_BASE}/0860.gif`,
        realImages: [`${IMG_BASE}/Air_Bike/0.jpg`, `${IMG_BASE}/Air_Bike/1.jpg`],
        cues: ['Lie flat, simultaneously raise legs and torso', 'Touch toes at the top forming a V shape', 'Lower under total control, no bouncing'],
        beginnerCues: ['Sit on chair edge, lean back slightly, tuck knees to chest'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's8', name: 'Dead Bug Anti-Extension',
        beginnerName: 'Bent-Knee Dead Bug',
        sets: '3 sets of 10 per side', beginnerSets: '3 sets of 8 per side',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor', beginnerEquipment: 'Mat',
        primaryMuscles: ['Deep Core', 'Transverse Abs'],
        secondaryMuscles: ['Hip Flexors'],
        animGifUrl: `${GIF_BASE}/0289.gif`,
        realImages: [`${IMG_BASE}/Dead_Bug/0.jpg`, `${IMG_BASE}/Dead_Bug/1.jpg`],
        cues: ['Arms straight up, knees at 90°', 'Extend opposite arm and leg while keeping back flat', 'Exhale as you extend, inhale as you return'],
        beginnerCues: ['Only extend legs while keeping arms fixed overhead'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's9', name: 'Russian Twists (Oblique Shred)',
        beginnerName: 'Seated Rotational Twists',
        sets: '3 sets of 20 reps', beginnerSets: '3 sets of 12 reps',
        workMinutes: 5, restSeconds: 45,
        equipment: 'Floor + Backpack', beginnerEquipment: 'Floor',
        primaryMuscles: ['Obliques', 'Transverse Abs'],
        secondaryMuscles: ['Hip Flexors'],
        animGifUrl: `${GIF_BASE}/0680.gif`,
        realImages: [`${IMG_BASE}/Alternate_Heel_Touchers/0.jpg`, `${IMG_BASE}/Alternate_Heel_Touchers/1.jpg`],
        cues: ['Lean back 45°, feet off ground if possible', 'Rotate torso fully side to side touching floor', 'Hold backpack for added resistance'],
        beginnerCues: ['Feet on floor, twist torso gently side to side engaging obliques'],
        animationType: 'bicycle-crunches'
      },
      {
        id: 's10', name: 'Jumping Lunge Alternates',
        beginnerName: 'Alternating Reverse Lunges',
        sets: '3 sets of 16 reps', beginnerSets: '3 sets of 10 reps',
        workMinutes: 5, restSeconds: 55,
        equipment: 'Floor', beginnerEquipment: 'Floor',
        primaryMuscles: ['Quads', 'Glutes', 'Cardio HIIT'],
        secondaryMuscles: ['Calves', 'Core'],
        animGifUrl: `${GIF_BASE}/1007.gif`,
        realImages: [`${IMG_BASE}/Bodyweight_Walking_Lunge/0.jpg`, `${IMG_BASE}/Bodyweight_Walking_Lunge/1.jpg`],
        cues: ['Lunge position, jump and switch legs mid-air', 'Land softly with knee tracking over toe', 'Continuous explosive alternation'],
        beginnerCues: ['Step back into lunge, step forward, switch legs with control — no jumping'],
        animationType: 'split-squat'
      }
    ],
    cooldown: {
      name: 'Full Body Decompression & Hip Opener',
      duration: '5 Mins',
      cues: ['Downward dog calf pedaling', 'Cobra pose core stretch', 'Box breathing in corpse pose']
    }
  },

  // ─────────────────────────────────────────────────────
  // SUNDAY: ACTIVE RECOVERY & TISSUE REPAIR (6 exercises)
  // ─────────────────────────────────────────────────────
  {
    id: 'sun',
    day: 'Sunday',
    focus: 'Active Recovery & Tissue Repair',
    tagline: 'Systemic Regeneration, Fascia Release & Metabolic Reset',
    targetCalories: '330 kcal',
    intensity: 'Low Impact Restoration',
    totalMinutes: 60,
    warmup: {
      name: 'Hydration & Joint Rotations',
      duration: '6 Mins',
      cues: ['Full body neck and shoulder circles', '500ml water intake with electrolyte pinch']
    },
    exercises: [
      {
        id: 'su1', name: 'Behind-Head Chest & Thoracic Opener',
        sets: '3 sets of 60 seconds',
        workMinutes: 8, restSeconds: 45,
        equipment: 'Mat / Floor',
        primaryMuscles: ['Pectorals', 'Front Delts'],
        secondaryMuscles: ['Thoracic Spine'],
        animGifUrl: `${GIF_BASE}/0688.gif`,
        realImages: [`${IMG_BASE}/Behind_Head_Chest_Stretch/0.jpg`, `${IMG_BASE}/Behind_Head_Chest_Stretch/1.jpg`],
        cues: ['Clasp hands behind head, gently open elbows wide', 'Breathe deeply into ribcage to expand chest wall', 'Feel posture resetting'],
        animationType: 'mobility-flow'
      },
      {
        id: 'su2', name: 'Child\'s Pose Spinal Decompression',
        sets: '3 sets of 90 seconds',
        workMinutes: 9, restSeconds: 45,
        equipment: 'Mat',
        primaryMuscles: ['Lats', 'Lumbar Spine'],
        secondaryMuscles: ['Glutes', 'Hips'],
        animGifUrl: `${GIF_BASE}/0688.gif`,
        realImages: [`${IMG_BASE}/Childs_Pose/0.jpg`, `${IMG_BASE}/Childs_Pose/1.jpg`],
        cues: ['Knees wide, sink hips back toward heels', 'Walk fingertips forward to elongate spine', 'Sink chest into carpet on every exhale'],
        animationType: 'mobility-flow'
      },
      {
        id: 'su3', name: 'Cat-Cow Spinal Fluidity Waves',
        sets: '3 sets of 60 seconds',
        workMinutes: 8, restSeconds: 45,
        equipment: 'Mat',
        primaryMuscles: ['Spine Articulation', 'Neck'],
        secondaryMuscles: ['Abs'],
        animGifUrl: `${GIF_BASE}/0185.gif`,
        realImages: [`${IMG_BASE}/Cat_Stretch/0.jpg`, `${IMG_BASE}/Cat_Stretch/1.jpg`],
        cues: ['Inhale to arch spine and look up (Cow)', 'Exhale to round spine toward ceiling (Cat)', 'Smooth fluid undulating rhythm'],
        animationType: 'mobility-flow'
      },
      {
        id: 'su4', name: 'All-Fours Deep Quad Mobilizer',
        sets: '3 sets of 60 seconds per leg',
        workMinutes: 9, restSeconds: 45,
        equipment: 'Mat',
        primaryMuscles: ['Quadriceps', 'Hip Flexors'],
        secondaryMuscles: ['Knee Joint'],
        animGifUrl: `${GIF_BASE}/0185.gif`,
        realImages: [`${IMG_BASE}/All_Fours_Quad_Stretch/0.jpg`, `${IMG_BASE}/All_Fours_Quad_Stretch/1.jpg`],
        cues: ['On all fours, reach back to grip ankle', 'Gently pull heel towards glute', 'Breathe into anterior thigh stretch'],
        animationType: 'mobility-flow'
      },
      {
        id: 'su5', name: 'IT Band & Glute Cross Stretch',
        sets: '3 sets of 60 seconds per side',
        workMinutes: 9, restSeconds: 45,
        equipment: 'Floor',
        primaryMuscles: ['IT Band', 'Glute Medius'],
        secondaryMuscles: ['Lower Back'],
        animGifUrl: `${GIF_BASE}/0289.gif`,
        realImages: [`${IMG_BASE}/IT_Band_and_Glute_Stretch/0.jpg`, `${IMG_BASE}/IT_Band_and_Glute_Stretch/1.jpg`],
        cues: ['Cross one leg over the other while supine', 'Pull knee across body toward opposite shoulder', 'Release lateral hip tension'],
        animationType: 'mobility-flow'
      },
      {
        id: 'su6', name: '90/90 Hamstring & Posterior Chain Sweep',
        sets: '3 sets of 60 seconds per leg',
        workMinutes: 8, restSeconds: 45,
        equipment: 'Floor',
        primaryMuscles: ['Hamstrings', 'Calves'],
        secondaryMuscles: ['Spine'],
        animGifUrl: `${GIF_BASE}/0578.gif`,
        realImages: [`${IMG_BASE}/90_90_Hamstring/0.jpg`, `${IMG_BASE}/90_90_Hamstring/1.jpg`],
        cues: ['Leg elevated at 90°, hold back of thigh', 'Gently flex foot to release hamstring fascia', 'Relax shoulders into ground'],
        animationType: 'mobility-flow'
      }
    ],
    cooldown: {
      name: 'Parasympathetic Reset',
      duration: '8 Mins',
      cues: ['Legs up the wall posture', 'Slow diaphragmatic relaxation', 'Prepare for next week\'s training']
    }
  }
];


// ─────────────────────────────────────────────────────────────────
// SMART PERSONALIZATION ENGINE
// Adapts workouts based on BMI, focus area, and fitness level
// ─────────────────────────────────────────────────────────────────

function getCardioRelevance(ex) {
  const keywords = ['cardio', 'hiit', 'metcon', 'burpee', 'climber', 'sprint', 'jump', 'high-knee', 'star', 'shuffle', 'bear'];
  const text = (ex.name + ' ' + (ex.primaryMuscles || []).join(' ')).toLowerCase();
  return keywords.some(k => text.includes(k)) ? 1 : 0;
}

function getChestCoreRelevance(ex) {
  const keywords = ['chest', 'pec', 'push', 'abs', 'core', 'oblique', 'crunch', 'plank', 'squeeze'];
  const text = (ex.name + ' ' + (ex.primaryMuscles || []).join(' ')).toLowerCase();
  return keywords.some(k => text.includes(k)) ? 1 : 0;
}

/**
 * Returns structured workout schedule tailored to user profile.
 *
 * Personalization layers:
 * 1. BMI-based rest scaling — heavier users get longer recovery between sets
 * 2. Fitness level branching — beginners get joint-safe exercise variants
 * 3. Focus area prioritization — reorders exercises to front-load priority muscles
 * 4. Calorie target adjustment — heavier bodies burn more calories per movement
 */
export function getStructuredSchedule(userProfile = {}) {
  const weight = parseFloat(userProfile?.currentWeight) || 96;
  const height = parseFloat(userProfile?.height) || 176;
  const bmi = weight / Math.pow(height / 100, 2);
  const fitnessLevel = userProfile?.fitnessLevel || 'beginner';
  const focusArea = userProfile?.focusArea || 'chest_belly';
  const isBeginner = fitnessLevel === 'beginner';

  // BMI tiers for adaptive scaling
  const isObese = bmi >= 30;
  const isOverweight = bmi >= 25 && bmi < 30;

  // Rest period multiplier: heavier/less conditioned users need more recovery
  const restMultiplier = isObese ? 1.4 : isOverweight ? 1.15 : 1.0;

  // Heavier individuals burn more calories per unit of work
  const calorieMultiplier = weight > 100 ? 1.2 : weight > 85 ? 1.08 : 1.0;

  return BASE_WORKOUT_SCHEDULE.map(day => {
    let exercises = day.exercises.map(ex => {
      const adjustedRest = Math.round((ex.restSeconds || 60) * restMultiplier);

      // Beginner scaling: swap to joint-safe variants
      if (isBeginner && ex.beginnerName) {
        return {
          ...ex,
          name: ex.beginnerName,
          sets: ex.beginnerSets || ex.sets,
          equipment: ex.beginnerEquipment || ex.equipment,
          cues: (ex.beginnerCues && ex.beginnerCues.length > 0) ? ex.beginnerCues : ex.cues,
          restSeconds: adjustedRest,
          isScaledForBeginner: true
        };
      }

      return { ...ex, restSeconds: adjustedRest };
    });

    // Focus area exercise prioritization (reorder without removing)
    if (focusArea === 'visceral_belly') {
      // Front-load cardio/metabolic exercises for maximum caloric output
      const cardio = exercises.filter(ex => getCardioRelevance(ex));
      const other = exercises.filter(ex => !getCardioRelevance(ex));
      exercises = [...cardio, ...other];
    } else if (focusArea === 'chest_belly') {
      // Front-load chest and core exercises for targeted development
      const priority = exercises.filter(ex => getChestCoreRelevance(ex));
      const other = exercises.filter(ex => !getChestCoreRelevance(ex));
      exercises = [...priority, ...other];
    }
    // 'all_over' = balanced, keep original order

    // Adjust calorie target based on body weight
    const baseCalories = parseInt(day.targetCalories) || 550;
    const adjustedCalories = Math.round(baseCalories * calorieMultiplier);

    return {
      ...day,
      exercises,
      targetCalories: `${adjustedCalories} kcal`,
      bmiTier: isObese ? 'high-support' : isOverweight ? 'moderate' : 'standard',
      userBmi: Math.round(bmi * 10) / 10
    };
  });
}


// ─────────────────────────────────────────────────────────────────
// EQUIPMENT GUIDE
// ─────────────────────────────────────────────────────────────────

export const EQUIPMENT_GUIDE = [
  {
    title: 'Heavy Backpack',
    badge: 'Progressive Overload',
    iconName: 'Briefcase',
    description: 'Filled with books or water bottles (6–16 kg). Worn for push-ups and rows, hugged for squats.'
  },
  {
    title: 'Two Sturdy Chairs',
    badge: 'Elevation & Dips',
    iconName: 'Armchair',
    description: 'Shoulder-width for tricep dips, or placed under hands for deep chest deficit push-ups.'
  },
  {
    title: 'Couch or Bed',
    badge: 'Incline Platform',
    iconName: 'Sofa',
    description: 'Elevate hands for joint-safe beginner push-ups, or elevate toes for decline chest presses.'
  }
];
