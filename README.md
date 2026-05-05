# Warzish - Fitness & Nutrition Tracker

A comprehensive full-stack web application for fitness enthusiasts to track workouts, plan meals, monitor nutrition, and achieve their health goals.

## Overview

Warzish is a modern fitness and nutrition tracking platform that helps users manage their workout routines, track calorie intake, create meal plans, and monitor progress toward their fitness goals. The application features a personalized dashboard, exercise library, workout history, and social features for sharing achievements.

## Features

### Workout Management
- **Exercise Library**: Browse 100+ pre-loaded exercises with detailed instructions
- **Workout Creator**: Design custom workout plans with exercises, sets, reps, and rest periods
- **Saved Workouts**: Save and manage favorite workout routines
- **Workout History**: Track completed workouts with calendar heatmap visualization
- **Progress Tracking**: View workout stats and weight progression charts

### Nutrition Tracking
- **Calorie Tracking**: Log daily meals and monitor caloric intake
- **Meal Plans**: Create and manage weekly meal plans
- **Food Database**: Search and add foods with complete nutritional information
- **Nutrition Calculator**: Calculate personalized daily calorie and macronutrient targets based on age, weight, height, activity level, and goals
- **Daily Targets**: Set and track protein, carbs, and fat intake goals

### User Features
- **Authentication**: Secure JWT-based user registration and login
- **User Profile**: Manage personal information, profile picture, and fitness metrics
- **Goal Setting**: Set and track fitness goals (weight loss, muscle gain, maintenance)
- **Dashboard**: Personalized overview with workout stats, nutrition summary, and motivational quotes
- **Social Features**: Share workouts and engage with community (discussion board)

## Technology Stack

### Frontend
- **React 18.2** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Material-UI (MUI)** - Component library
- **Recharts** - Data visualization
- **React Big Calendar** - Calendar component
- **React Calendar Heatmap** - Workout frequency visualization
- **React Toastify** - Toast notifications
- **JWT Decode** - Token handling

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Project Structure

```
warzish-main/
├── src/
│   ├── screens/          # Main page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── Goals.jsx
│   │   ├── WorkoutHistory.jsx
│   │   ├── workout/      # Workout-related screens
│   │   └── nutrition/    # Nutrition-related screens
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── WorkoutCard.jsx
│   │   ├── MealLog.jsx
│   │   └── ...
│   ├── styles/           # CSS stylesheets
│   ├── assets/           # Images and SVG files
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── back-end/
│   ├── controllers/      # Route controllers
│   │   ├── exercise/
│   │   ├── food/
│   │   └── profile/
│   ├── models/           # Mongoose schemas
│   │   ├── userModel.js
│   │   ├── exercises.js
│   │   ├── food.js
│   │   ├── mealPlan.js
│   │   └── ...
│   ├── routes/           # API route definitions
│   ├── middlewares/      # Authentication middleware
│   ├── db/               # Database connection
│   ├── scripts/          # Seed scripts
│   └── server.js         # Express server
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd warzish-main
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd back-end
npm install
cd ..
```

4. **Configure environment variables**

Create a `config/config.env` file in the `back-end` directory:
```env
MONGO_URI=mongodb://localhost:27017/warzish
JWT_SECRET=your_jwt_secret_key_here
PORT=3030
```

For MongoDB Atlas:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/warzish
JWT_SECRET=your_jwt_secret_key_here
PORT=3030
```

5. **Seed the database (optional)**
```bash
cd back-end
npm run seed
```

## Running the Application

### Development Mode

1. **Start the backend server**
```bash
cd back-end
npm run dev
# Server will run on http://localhost:3030
```

2. **Start the frontend development server** (in a new terminal)
```bash
npm run dev
# Application will run on http://localhost:5173
```

3. **Access the application**
Open your browser and navigate to `http://localhost:5173`

### Production Build

1. **Build the frontend**
```bash
npm run build
```

2. **Preview the production build**
```bash
npm run preview
```

3. **Start the backend in production**
```bash
cd back-end
npm start
```

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `GET /verify-token` - Verify JWT token

### User Profile
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/profile/upload` - Upload profile picture

### Goals
- `GET /api/user/goals` - Get user goals
- `POST /api/user/goals` - Create new goal
- `PUT /api/user/goals/:id` - Update goal

### Workouts
- `GET /exercise/exercises` - Get all exercises
- `POST /exercise/workout-plans` - Create workout plan
- `GET /exercise/workout-plans` - Get user workout plans
- `GET /api/workout-history` - Get workout history

### Nutrition
- `GET /food/foods` - Get all foods
- `POST /food/meal-entries` - Log meal
- `GET /food/meal-entries` - Get meal logs
- `POST /food/meal-plans` - Create meal plan
- `GET /food/daily-targets` - Get daily nutrition targets

### Social
- `GET /api/tweets` - Get community posts
- `POST /api/tweets` - Create new post

## Key Features Implementation

### Authentication Flow
- JWT tokens stored in localStorage
- Protected routes using ProtectedRoute component
- Token verification on page load
- Automatic redirect to login for unauthenticated users

### State Management
- React hooks (useState, useEffect) for local state
- localStorage for persistent data caching
- Axios for API communication

### Data Visualization
- Recharts for workout statistics
- Calendar heatmap for workout frequency
- Progress bars for nutrition tracking
- Circular progress indicators for goal completion

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Mobile responsive design improvements
- Progressive Web App (PWA) capabilities
- Real-time notifications
- Social features expansion (friends, challenges)
- Integration with fitness wearables
- AI-powered workout recommendations
- Barcode scanning for food logging
- Advanced analytics and reporting

## License

This project is private and not licensed for public use.

## Contact

For questions or support, please contact the development team.

---

Built with passion for fitness and wellness.
