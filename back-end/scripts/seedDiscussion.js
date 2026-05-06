// Seed discussion form posts via the backend API
// Requires the backend server to be running on localhost:3030
// Usage: node scripts/seedDiscussion.js <email> <password>
//   e.g. node scripts/seedDiscussion.js test@example.com mypassword

const API_BASE_URL = 'http://localhost:3030';

const posts = [
  // Workout Tips & Motivation
  {
    content: "Just hit a new PR on bench press — 100kg! 💪 Consistency really does pay off. Started at 40kg six months ago. Never give up on your goals!"
  },
  {
    content: "Morning workout tip: Try doing 10 minutes of stretching before your main workout. It reduces injury risk by 40% and improves your range of motion significantly."
  },
  {
    content: "Completed my first ever pull-up today! 🎉 After weeks of negatives and band-assisted reps, I finally got one clean rep. Small wins matter!"
  },
  {
    content: "Leg day is NOT optional. Your lower body has the largest muscles. Training them boosts testosterone and growth hormone naturally. Embrace the squat rack! 🦵"
  },
  {
    content: "Hot take: Rest days are just as important as workout days. Your muscles grow during recovery, not during training. Listen to your body! 🧘‍♂️"
  },

  // Nutrition Discussions
  {
    content: "Meal prep Sunday done! 🍗 Grilled chicken, brown rice, and roasted veggies for the whole week. Saves time, money, and keeps me on track with my macros."
  },
  {
    content: "Anyone else struggle with hitting protein goals? I started adding Greek yogurt to smoothies — an extra 20g protein per serving. Game changer!"
  },
  {
    content: "Hydration reminder 💧 — If you're feeling tired during workouts, you might just be dehydrated. Aim for at least 3L of water daily, more if you're training hard."
  },
  {
    content: "Unpopular opinion: You don't need supplements to get fit. Whole foods, proper sleep, and consistency will get you 90% of the way there."
  },

  // Community & Support
  {
    content: "To everyone just starting their fitness journey — the hardest part is showing up. The gym is not a competition. Everyone started somewhere. You've got this! 🏋️"
  },
  {
    content: "Looking for a workout buddy in the morning slot (6-7 AM). Having someone to train with keeps me accountable. Drop a comment if interested!"
  },
  {
    content: "Week 4 of my 12-week transformation. Down 3kg and feeling stronger than ever. Posting progress pics next month. This community keeps me going! 📸"
  },
  {
    content: "Form check request: Can someone review my deadlift form? I keep getting lower back pain after heavy sets. Any tips on hip hinge cues would be appreciated 🙏"
  },
  {
    content: "Just finished a 5K run in under 25 minutes! 🏃 Three months ago I couldn't run for 2 minutes straight. Progressive overload works for cardio too!"
  },
  {
    content: "Reminder: Compare yourself only to who you were yesterday. Everyone's body responds differently. Focus on YOUR progress and celebrate YOUR wins! 🌟"
  }
];

const comments = [
  "Great job! Keep pushing! 💪",
  "This is so inspiring, thanks for sharing!",
  "I needed to hear this today 🙏",
  "Absolutely agree! Consistency is everything.",
  "Can you share your routine? Would love to try it.",
  "Way to go! That's amazing progress!",
  "This is gold advice right here 👏",
  "Added this to my routine, thanks!",
  "Love this community, so supportive!",
  "Keep it up, you're doing amazing!"
];

async function seedDiscussion() {
  // Get credentials from command line args
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: node scripts/seedDiscussion.js <email> <password>');
    console.error('  e.g. node scripts/seedDiscussion.js test@example.com mypassword');
    process.exit(1);
  }

  // Step 1: Login to get a token
  console.log(`Logging in as ${email}...`);
  let token;
  try {
    const loginRes = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!loginRes.ok) {
      const err = await loginRes.json();
      console.error('Login failed:', err.error || err);
      process.exit(1);
    }

    const loginData = await loginRes.json();
    token = loginData.token;
    console.log(`Logged in successfully as ${loginData.user?.name || email}\n`);
  } catch (err) {
    console.error('Could not connect to backend:', err.message);
    process.exit(1);
  }

  // Step 2: Create posts
  console.log(`Creating ${posts.length} discussion posts...\n`);
  const createdTweets = [];
  let success = 0;
  let failed = 0;

  for (const post of posts) {
    try {
      const res = await fetch(`${API_BASE_URL}/api/tweets/tweets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: post.content })
      });

      if (res.ok) {
        const tweet = await res.json();
        createdTweets.push(tweet);
        success++;
        const preview = post.content.substring(0, 50) + (post.content.length > 50 ? '...' : '');
        console.log(`  ✓ "${preview}"`);
      } else {
        const err = await res.json();
        failed++;
        console.log(`  ✗ Failed: ${err.error}`);
      }
    } catch (err) {
      failed++;
      console.log(`  ✗ Error: ${err.message}`);
    }
  }

  // Step 3: Add some comments to posts
  console.log(`\nAdding comments to posts...\n`);
  let commentCount = 0;

  for (let i = 0; i < createdTweets.length && i < comments.length; i++) {
    const tweet = createdTweets[i];
    const comment = comments[i];
    try {
      const res = await fetch(`${API_BASE_URL}/api/tweets/tweets/${tweet._id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: comment })
      });

      if (res.ok) {
        commentCount++;
        console.log(`  ✓ Comment on: "${tweet.content.substring(0, 40)}..."`);
      }
    } catch (err) {
      console.log(`  ✗ Comment failed: ${err.message}`);
    }
  }

  // Step 4: Like some posts
  console.log(`\nLiking posts...\n`);
  let likeCount = 0;

  for (let i = 0; i < createdTweets.length; i += 2) {
    const tweet = createdTweets[i];
    try {
      const res = await fetch(`${API_BASE_URL}/api/tweets/tweets/${tweet._id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        likeCount++;
        console.log(`  ♥ Liked: "${tweet.content.substring(0, 40)}..."`);
      }
    } catch (err) {
      console.log(`  ✗ Like failed: ${err.message}`);
    }
  }

  console.log(`\n========== SEED COMPLETE ==========`);
  console.log(`  Posts created:  ${success}/${posts.length}`);
  console.log(`  Posts failed:   ${failed}`);
  console.log(`  Comments added: ${commentCount}`);
  console.log(`  Likes added:    ${likeCount}`);
}

seedDiscussion();
