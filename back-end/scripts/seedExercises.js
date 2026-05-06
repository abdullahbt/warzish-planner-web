// Seed exercises via the backend API (POST /exercise/exercises)
// Requires the backend server to be running on localhost:3030

const API_BASE_URL = 'http://localhost:3030';

const exercises = [
  // ========================
  // CHEST
  // ========================
  {
    name: 'Barbell Bench Press',
    muscleGroup: 'Chest',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'A fundamental compound movement that targets the pectoralis major, anterior deltoids, and triceps. Lie on a flat bench and press the barbell upward from chest level.',
    formGuidance: 'Keep your feet flat on the floor, retract your shoulder blades, and maintain a slight arch in your lower back. Lower the bar to mid-chest and press up in a slight arc. Avoid flaring your elbows excessively.'
  },
  {
    name: 'Incline Dumbbell Press',
    muscleGroup: 'Chest',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    description: 'Targets the upper chest (clavicular head of the pectoralis major). Performed on an incline bench set at 30-45 degrees with a dumbbell in each hand.',
    formGuidance: 'Set the bench to 30-45 degrees. Press the dumbbells up and slightly inward without clanking them together at the top. Lower with control until your upper arms are parallel to the floor.'
  },
  {
    name: 'Dumbbell Flyes',
    muscleGroup: 'Chest',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'An isolation exercise that stretches and contracts the chest through a wide arc of motion. Great for developing the inner and outer chest.',
    formGuidance: 'Keep a slight bend in your elbows throughout the movement. Lower the dumbbells in a wide arc until you feel a stretch in your chest, then squeeze them back up. Do not go too heavy — control is key.'
  },
  {
    name: 'Push-Ups',
    muscleGroup: 'Chest',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    description: 'A classic bodyweight exercise that builds chest, shoulder, and tricep strength. Can be performed anywhere without any equipment.',
    formGuidance: 'Keep your body in a straight line from head to heels. Place hands slightly wider than shoulder-width. Lower your chest to the ground and press back up. Engage your core throughout.'
  },
  {
    name: 'Cable Crossover',
    muscleGroup: 'Chest',
    equipment: 'Cable Machine',
    difficulty: 'Intermediate',
    description: 'An isolation exercise using cables to provide constant tension on the chest muscles through the full range of motion. Excellent for shaping the chest.',
    formGuidance: 'Stand in the center of the cable machine with a slight forward lean. Pull the handles down and together in a hugging motion. Squeeze at the bottom and return slowly. Keep elbows slightly bent.'
  },
  {
    name: 'Decline Bench Press',
    muscleGroup: 'Chest',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'Targets the lower portion of the pectoralis major. Performed on a decline bench, this variation shifts emphasis to the lower chest fibers.',
    formGuidance: 'Secure your legs on the decline bench. Lower the bar to your lower chest and press up. Keep your grip slightly wider than shoulder width and maintain control throughout.'
  },

  // ========================
  // BACK
  // ========================
  {
    name: 'Deadlift',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    difficulty: 'Advanced',
    description: 'The king of compound exercises. Targets the entire posterior chain including erector spinae, lats, traps, glutes, and hamstrings.',
    formGuidance: 'Stand with feet hip-width apart, bar over mid-foot. Hinge at the hips, grip the bar just outside your knees. Keep your back flat, chest up, and drive through your heels. Lock out at the top by squeezing your glutes.'
  },
  {
    name: 'Pull-Ups',
    muscleGroup: 'Back',
    equipment: 'Pull-Up Bar',
    difficulty: 'Intermediate',
    description: 'A challenging bodyweight exercise that primarily targets the latissimus dorsi, rhomboids, and biceps. One of the best exercises for building a wide back.',
    formGuidance: 'Hang from the bar with an overhand grip slightly wider than shoulder-width. Pull yourself up until your chin clears the bar. Lower with control. Avoid swinging or using momentum.'
  },
  {
    name: 'Barbell Bent-Over Row',
    muscleGroup: 'Back',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'A compound rowing movement that targets the middle back, lats, rhomboids, and rear deltoids. Essential for building back thickness.',
    formGuidance: 'Bend at the hips to about 45 degrees with knees slightly bent. Pull the barbell to your lower chest/upper abdomen. Squeeze your shoulder blades together at the top. Keep your core tight and back flat.'
  },
  {
    name: 'Lat Pulldown',
    muscleGroup: 'Back',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    description: 'A machine-based exercise that mimics the pull-up movement. Great for beginners building lat strength or for higher-rep back training.',
    formGuidance: 'Sit with thighs secured under the pads. Grip the bar wider than shoulder-width. Pull the bar down to your upper chest while leaning slightly back. Squeeze your lats and return slowly.'
  },
  {
    name: 'Seated Cable Row',
    muscleGroup: 'Back',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    description: 'A seated rowing exercise that targets the middle back, lats, and biceps. The cable provides constant tension throughout the movement.',
    formGuidance: 'Sit upright with feet on the platform and knees slightly bent. Pull the handle to your lower chest, squeezing your shoulder blades together. Extend your arms with control. Avoid rounding your back.'
  },
  {
    name: 'Single-Arm Dumbbell Row',
    muscleGroup: 'Back',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'A unilateral rowing exercise that helps correct muscle imbalances. Targets the lats, rhomboids, and rear deltoids one side at a time.',
    formGuidance: 'Place one knee and hand on a bench for support. Row the dumbbell to your hip, keeping your elbow close to your body. Squeeze at the top and lower slowly. Keep your back flat and core engaged.'
  },

  // ========================
  // BICEPS
  // ========================
  {
    name: 'Barbell Curl',
    muscleGroup: 'Biceps',
    equipment: 'Barbell',
    difficulty: 'Beginner',
    description: 'The classic bicep exercise. Targets the biceps brachii for building arm size and strength. A staple in any arm training routine.',
    formGuidance: 'Stand with feet shoulder-width apart, grip the barbell with an underhand grip. Curl the weight up by flexing your elbows, keeping your upper arms stationary. Lower with control. Avoid swinging your body.'
  },
  {
    name: 'Dumbbell Hammer Curl',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'Targets the brachialis and brachioradialis in addition to the biceps. The neutral grip helps build forearm thickness and overall arm width.',
    formGuidance: 'Hold dumbbells at your sides with palms facing each other (neutral grip). Curl the weights up without rotating your wrists. Keep your elbows pinned to your sides and lower under control.'
  },
  {
    name: 'Incline Dumbbell Curl',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    description: 'Performed on an incline bench to place the biceps in a stretched position, emphasizing the long head. Excellent for building the bicep peak.',
    formGuidance: 'Set the bench to 45 degrees and let your arms hang straight down. Curl the dumbbells up while keeping your upper arms stationary against the bench. Squeeze at the top and lower slowly.'
  },
  {
    name: 'Preacher Curl',
    muscleGroup: 'Biceps',
    equipment: 'EZ Bar',
    difficulty: 'Intermediate',
    description: 'An isolation curl performed on a preacher bench that eliminates momentum and strictly targets the biceps. Great for building the lower bicep.',
    formGuidance: 'Rest your upper arms firmly on the preacher pad. Curl the bar up to shoulder level without lifting your arms off the pad. Lower slowly to full extension but do not hyperextend your elbows.'
  },
  {
    name: 'Cable Bicep Curl',
    muscleGroup: 'Biceps',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    description: 'A cable variation of the bicep curl that provides constant tension throughout the range of motion. Ideal for time under tension training.',
    formGuidance: 'Attach a straight or EZ bar to the low pulley. Stand upright, curl the handle up while keeping your elbows at your sides. Squeeze at the top and lower with control.'
  },
  {
    name: 'Concentration Curl',
    muscleGroup: 'Biceps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'A seated isolation exercise that targets the bicep peak. The braced position prevents cheating and maximizes bicep engagement.',
    formGuidance: 'Sit on a bench with your elbow braced against the inside of your thigh. Curl the dumbbell up toward your shoulder, squeezing at the top. Lower slowly. Keep your upper arm completely still.'
  },

  // ========================
  // TRICEPS
  // ========================
  {
    name: 'Tricep Dips',
    muscleGroup: 'Triceps',
    equipment: 'Dip Bars',
    difficulty: 'Intermediate',
    description: 'A compound bodyweight exercise that targets all three heads of the triceps. Also engages the chest and anterior deltoids.',
    formGuidance: 'Grip the parallel bars and extend your arms. Lower your body by bending your elbows until your upper arms are parallel to the floor. Press back up to full extension. Keep your torso upright to emphasize triceps.'
  },
  {
    name: 'Skull Crushers',
    muscleGroup: 'Triceps',
    equipment: 'EZ Bar',
    difficulty: 'Intermediate',
    description: 'A lying tricep extension that targets the long head of the triceps. One of the most effective exercises for building tricep mass.',
    formGuidance: 'Lie on a flat bench and hold the EZ bar with arms extended above your chest. Lower the bar toward your forehead by bending only at the elbows. Extend back up and squeeze. Keep your upper arms stationary.'
  },
  {
    name: 'Tricep Pushdown',
    muscleGroup: 'Triceps',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    description: 'A cable isolation exercise that targets the lateral and medial heads of the triceps. A staple exercise for tricep definition.',
    formGuidance: 'Stand facing the cable machine with the rope or bar attachment at the high pulley. Push the handle down by extending your elbows while keeping your upper arms pinned to your sides. Squeeze at the bottom.'
  },
  {
    name: 'Overhead Tricep Extension',
    muscleGroup: 'Triceps',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'Targets the long head of the triceps through an overhead pressing motion. Can be performed seated or standing with one or two dumbbells.',
    formGuidance: 'Hold a dumbbell overhead with both hands or one hand. Lower it behind your head by bending at the elbows. Extend back up to full lockout. Keep your elbows pointing forward and close to your head.'
  },
  {
    name: 'Close-Grip Bench Press',
    muscleGroup: 'Triceps',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'A bench press variation with a narrow grip that shifts emphasis from the chest to the triceps. Excellent for building pressing strength and tricep mass.',
    formGuidance: 'Lie on a flat bench and grip the bar with hands about shoulder-width apart. Lower the bar to your lower chest, keeping your elbows tucked. Press up explosively. Keep your wrists straight.'
  },
  {
    name: 'Diamond Push-Ups',
    muscleGroup: 'Triceps',
    equipment: 'Bodyweight',
    difficulty: 'Intermediate',
    description: 'A push-up variation where the hands form a diamond shape beneath the chest, shifting emphasis to the triceps. A challenging bodyweight tricep exercise.',
    formGuidance: 'Place your hands together under your chest forming a diamond shape with your thumbs and index fingers. Lower your chest to your hands and press back up. Keep your elbows close to your body.'
  },

  // ========================
  // LEGS
  // ========================
  {
    name: 'Barbell Back Squat',
    muscleGroup: 'Legs',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'The king of leg exercises. A compound movement targeting the quadriceps, glutes, hamstrings, and core. Essential for building lower body strength and mass.',
    formGuidance: 'Place the bar on your upper traps. Stand with feet shoulder-width apart, toes slightly out. Squat down by pushing your hips back and bending your knees. Go to parallel or below, then drive up through your heels.'
  },
  {
    name: 'Leg Press',
    muscleGroup: 'Legs',
    equipment: 'Leg Press Machine',
    difficulty: 'Beginner',
    description: 'A machine-based compound exercise for the quads, glutes, and hamstrings. Allows heavy loading with less spinal stress than squats.',
    formGuidance: 'Sit in the machine with your back flat against the pad. Place feet shoulder-width apart on the platform. Lower the platform by bending your knees to 90 degrees, then press up without locking your knees.'
  },
  {
    name: 'Romanian Deadlift',
    muscleGroup: 'Legs',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'A hip-hinge movement that primarily targets the hamstrings and glutes. Excellent for building posterior chain strength and improving hip mobility.',
    formGuidance: 'Hold the barbell at hip level with an overhand grip. Push your hips back while keeping a slight bend in your knees. Lower the bar along your legs until you feel a deep stretch in your hamstrings, then drive your hips forward to stand.'
  },
  {
    name: 'Leg Extension',
    muscleGroup: 'Legs',
    equipment: 'Leg Extension Machine',
    difficulty: 'Beginner',
    description: 'An isolation exercise targeting the quadriceps. The machine guides the movement, making it beginner-friendly and ideal for quad-focused work.',
    formGuidance: 'Sit in the machine with your back against the pad and shins behind the roller pad. Extend your legs fully, squeezing your quads at the top. Lower with control. Avoid using momentum.'
  },
  {
    name: 'Leg Curl',
    muscleGroup: 'Legs',
    equipment: 'Leg Curl Machine',
    difficulty: 'Beginner',
    description: 'An isolation exercise for the hamstrings. Performed on a machine in either lying or seated position to target the back of the thighs.',
    formGuidance: 'Lie face down on the machine with the roller pad behind your ankles. Curl your legs up by bending your knees, squeezing your hamstrings at the top. Lower slowly without letting the weight slam down.'
  },
  {
    name: 'Bulgarian Split Squat',
    muscleGroup: 'Legs',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    description: 'A unilateral leg exercise that builds quad and glute strength while improving balance and stability. Targets each leg independently.',
    formGuidance: 'Stand a few feet in front of a bench with one foot elevated behind you. Hold dumbbells at your sides. Lower into a lunge until your front thigh is parallel to the floor. Drive up through your front heel.'
  },
  {
    name: 'Walking Lunges',
    muscleGroup: 'Legs',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'A dynamic leg exercise that targets the quads, glutes, and hamstrings while improving coordination and balance. Can be done with or without weights.',
    formGuidance: 'Hold dumbbells at your sides. Step forward into a lunge, lowering until both knees are at 90 degrees. Push off your front foot and step the back leg forward into the next lunge. Keep your torso upright.'
  },
  {
    name: 'Calf Raises',
    muscleGroup: 'Legs',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    description: 'An isolation exercise for the calf muscles (gastrocnemius and soleus). Can be performed standing or seated, with or without added weight.',
    formGuidance: 'Stand on the edge of a step or platform with your heels hanging off. Rise up onto your toes as high as possible, squeezing your calves. Lower slowly below the platform for a full stretch. Pause at the top.'
  },

  // ========================
  // SHOULDERS
  // ========================
  {
    name: 'Overhead Press',
    muscleGroup: 'Shoulders',
    equipment: 'Barbell',
    difficulty: 'Intermediate',
    description: 'A compound pressing movement that targets the anterior and medial deltoids, upper chest, and triceps. Builds overhead pressing strength and shoulder mass.',
    formGuidance: 'Stand with feet shoulder-width apart, barbell at collarbone height. Press the bar overhead to full lockout. Tilt your head slightly back as the bar passes your face, then push it forward once cleared. Keep your core braced.'
  },
  {
    name: 'Dumbbell Lateral Raise',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbells',
    difficulty: 'Beginner',
    description: 'An isolation exercise that targets the medial (side) deltoids. Key for building shoulder width and the coveted capped shoulder look.',
    formGuidance: 'Stand with dumbbells at your sides, palms facing in. Raise the dumbbells out to the sides until your arms are parallel to the floor. Lead with your elbows, not your wrists. Lower with control.'
  },
  {
    name: 'Face Pull',
    muscleGroup: 'Shoulders',
    equipment: 'Cable Machine',
    difficulty: 'Beginner',
    description: 'Targets the rear deltoids, rhomboids, and external rotators. An essential exercise for shoulder health, posture, and balanced shoulder development.',
    formGuidance: 'Set a cable pulley at upper chest height with a rope attachment. Pull the rope toward your face, separating the ends as you pull. Squeeze your rear delts and upper back. Keep your elbows high.'
  },
  {
    name: 'Arnold Press',
    muscleGroup: 'Shoulders',
    equipment: 'Dumbbells',
    difficulty: 'Intermediate',
    description: 'A rotational dumbbell press that hits all three heads of the deltoid through a single movement. Named after Arnold Schwarzenegger.',
    formGuidance: 'Start with dumbbells at shoulder level, palms facing you. As you press up, rotate your palms to face forward at the top. Reverse the rotation as you lower. Keep the motion smooth and controlled.'
  },
  {
    name: 'Reverse Pec Deck',
    muscleGroup: 'Shoulders',
    equipment: 'Pec Deck Machine',
    difficulty: 'Beginner',
    description: 'An isolation exercise for the rear deltoids. Performed facing the pec deck machine to target the posterior shoulder and upper back.',
    formGuidance: 'Sit facing the machine pad. Grip the handles with your arms extended in front of you. Pull the handles back by squeezing your rear delts. Keep a slight bend in your elbows and control the return.'
  },

  // ========================
  // CORE / ABS
  // ========================
  {
    name: 'Plank',
    muscleGroup: 'Core',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    description: 'An isometric core exercise that strengthens the entire midsection including the rectus abdominis, obliques, and transverse abdominis.',
    formGuidance: 'Support your body on your forearms and toes. Keep your body in a straight line from head to heels. Engage your core and glutes. Do not let your hips sag or pike up. Hold for the prescribed time.'
  },
  {
    name: 'Hanging Leg Raise',
    muscleGroup: 'Core',
    equipment: 'Pull-Up Bar',
    difficulty: 'Advanced',
    description: 'A challenging core exercise that targets the lower abs and hip flexors. Performed hanging from a bar for maximum abdominal engagement.',
    formGuidance: 'Hang from a pull-up bar with a shoulder-width grip. Raise your legs until they are parallel to the floor or higher. Lower with control, avoiding swinging. For added difficulty, keep your legs straight.'
  },
  {
    name: 'Cable Woodchop',
    muscleGroup: 'Core',
    equipment: 'Cable Machine',
    difficulty: 'Intermediate',
    description: 'A rotational core exercise that targets the obliques and transverse abdominis. Mimics athletic twisting movements for functional core strength.',
    formGuidance: 'Set the cable at the highest position. Stand sideways to the machine and grip the handle with both hands. Pull the cable diagonally across your body from high to low. Rotate through your torso, not your arms. Control the return.'
  },
  {
    name: 'Ab Wheel Rollout',
    muscleGroup: 'Core',
    equipment: 'Ab Wheel',
    difficulty: 'Advanced',
    description: 'One of the most effective core exercises for building anterior core strength and stability. Challenges the entire abdominal wall through a full stretch.',
    formGuidance: 'Kneel on the floor holding the ab wheel with both hands. Roll the wheel forward, extending your body as far as you can while keeping your core tight. Pull yourself back to the starting position using your abs. Do not arch your lower back.'
  },
  {
    name: 'Russian Twist',
    muscleGroup: 'Core',
    equipment: 'Bodyweight',
    difficulty: 'Beginner',
    description: 'A rotational core exercise that targets the obliques. Can be performed with bodyweight or with a medicine ball or dumbbell for added resistance.',
    formGuidance: 'Sit on the floor with knees bent and feet slightly elevated. Lean back slightly to engage your core. Rotate your torso from side to side, touching the ground beside your hips. Keep your back straight and core engaged.'
  }
];

async function seedExercises() {
  console.log(`Seeding ${exercises.length} exercises via API at ${API_BASE_URL}...\n`);

  let success = 0;
  let failed = 0;
  const errors = [];

  for (const exercise of exercises) {
    try {
      const response = await fetch(`${API_BASE_URL}/exercise/exercises`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exercise)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        success++;
        console.log(`  ✓ ${exercise.name} (${exercise.muscleGroup})`);
      } else {
        failed++;
        errors.push({ name: exercise.name, error: data.message });
        console.log(`  ✗ ${exercise.name} — ${data.message}`);
      }
    } catch (err) {
      failed++;
      errors.push({ name: exercise.name, error: err.message });
      console.log(`  ✗ ${exercise.name} — ${err.message}`);
    }
  }

  console.log(`\n========== SEED COMPLETE ==========`);
  console.log(`  Total:   ${exercises.length}`);
  console.log(`  Success: ${success}`);
  console.log(`  Failed:  ${failed}`);

  if (errors.length > 0) {
    console.log(`\nFailed exercises:`);
    errors.forEach(e => console.log(`  - ${e.name}: ${e.error}`));
  }

  // Print summary by muscle group
  const groups = {};
  exercises.forEach(ex => {
    groups[ex.muscleGroup] = (groups[ex.muscleGroup] || 0) + 1;
  });
  console.log('\nExercises by muscle group:');
  Object.entries(groups).forEach(([group, count]) => {
    console.log(`  ${group}: ${count}`);
  });
}

seedExercises();
