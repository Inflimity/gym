const fs = require('fs');
let content = fs.readFileSync('src/data/workoutData.js', 'utf8');

const replacements = {
  // Monday
  "Backpack Deficit Push-ups": "0662",
  "Decline Push-ups (Feet on Couch)": "0301",
  "Chair Dips (Lockout Focus)": "0251",
  "Diamond Close-Grip Push-ups": "0496",
  "Incline Push-ups (Volume Burnout)": "1396", // Wall push-up
  "Standard Calisthenic Push-ups": "0662",
  "Pike Push-ups (Shoulder Blast)": "0620",
  "Wide-Grip Push-ups (Outer Chest)": "0670",
  "Pseudo Planche Lean Hold": "0308", // Forearm plank
  "Isometric Chest Squeeze Press": "0471", // Isometric chest squeeze
  
  // Tuesday
  "Backpack Bent-over Rows": "0027", // Barbell bent over row (closest)
  "Isometric Superman Holds": "0688",
  "Glute Bridge Hip Thrusts": "0578", // Glute bridge
  "Hollow Body Isometric Plank": "0308", // Forearm plank
  "Alternate Heel Touchers": "0006",
  "Prone Scapular Retractions": "0652", // Prone I to Y raise
  "Reverse Snow Angels": "0603",
  "Towel Face Pulls": "0027", // Reuse row
  "Dead Bug Core Stabilizers": "0289",
  "Bird-Dog Spinal Stabilizers": "0185",
  
  // Wednesday
  "Backpack Goblet Squats": "0798", // Bodyweight squat
  "Bulgarian Split Squats (Rear Elevated)": "0567", // Lunge (bodyweight)
  "Bodyweight Walking Lunges": "1432",
  "Single-Leg Glute Bridges": "0578",
  "Air Squats (Tempo Burnout)": "0798",
  "Standing Calf Raises (Eccentric)": "0240",
  "Wall Sit Endurance Hold": "0881",
  "Backpack Step-ups (Power Drive)": "0729",
  "Sumo Squat Pulses": "1576",
  "Side-Lying Hip Abductions": "0591",
  
  // Thursday
  "Mountain Climber Sprints": "0658",
  "Air Bike Bicycle Crunches": "0003",
  "Flutter Kicks (Core Burnout)": "0372",
  "Standard Burpees (Chest to Deck)": "0514", // Jump squat as proxy for burpee
  "Plank Shoulder Taps": "0493", // Push-up to side plank
  "High-Knee Sprint In Place": "1000",
  "Star Jumps (Explosive Cardio)": "0813",
  "Squat Jump Explosions": "0514",
  "Lateral Shuffle Sprints": "0529",
  "Bear Crawl Forward & Back": "0241",
  
  // Friday
  "Chair Deficit Dips": "0251",
  "Incline Push-ups (Hands on Couch)": "1396",
  "Close Triceps Diamond Push-ups": "0496",
  "Backpack Bicep Hammer Curls": "0027", // Reuse
  "Deltoid Arm Circles & Shoulder Burnout": "0652",
  "Backpack Overhead Tricep Extension": "0251",
  "Towel Bicep Isometric Curls": "0027",
  "Backpack Reverse Curls": "0027",
  "Isometric Wall Push Hold": "1396",
  
  // Saturday
  "Mountain Climber Piston Sprints": "0658",
  "Bent-Knee Hip & Pelvic Raises": "0001", // 3/4 sit-up
  "Explosive Full Body Burpees": "0514", // Jump squat
  "Isometric Side & Center Plank": "0308", // plank
  "V-Up Jackknife Crunches": "0860",
  "Dead Bug Anti-Extension": "0289",
  "Russian Twists (Oblique Shred)": "0680",
  "Jumping Lunge Alternates": "1007",
  
  // Sunday
  "Behind-Head Chest & Thoracic Opener": "0688",
  "Child's Pose Spinal Decompression": "0603",
  "Cat-Cow Spinal Fluidity Waves": "0185",
  "All-Fours Deep Quad Mobilizer": "0185",
  "IT Band & Glute Cross Stretch": "0289",
  "90/90 Hamstring & Posterior Chain Sweep": "0578",
};

Object.entries(replacements).forEach(([name, id]) => {
  // Use regex to strictly find the exercise name and replace its animGifUrl
  // Escaping special regex characters in the name like () / &
  const escapedName = name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(name:\\s*['"]${escapedName}['"][\\s\\S]*?animGifUrl:\\s*\`\\$\\{GIF_BASE\\}/)\\d{4}(\\.gif\`)`, 'g');
  content = content.replace(regex, `$1${id}$2`);
});

fs.writeFileSync('src/data/workoutData.js', content);
console.log("Replaced GIF IDs");
