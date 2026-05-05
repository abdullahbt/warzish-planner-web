import mongoose from 'mongoose';

//LOCAL DB SETTING TEMPORARY
const uri = "mongodb+srv://abdullahbintariq123_db_user:Pgi4yOrr5jrMkERb@cluster0.2krxqii.mongodb.net/?appName=Cluster0";

// Connect to MongoDB with Mongoose
async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, { dbName: 'warzishPlanner' });
    console.log('Connected to MongoDB via Mongoose');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
} 

export default connectToMongoDB; 
