import mongoose from 'mongoose';

//LOCAL DB SETTING TEMPORARY
const uri = "mongodb://abdullahbintariq123_db_user:Pgi4yOrr5jrMkERb@ac-hzxpo0k-shard-00-00.2krxqii.mongodb.net:27017,ac-hzxpo0k-shard-00-01.2krxqii.mongodb.net:27017,ac-hzxpo0k-shard-00-02.2krxqii.mongodb.net:27017/?ssl=true&replicaSet=atlas-asz7xm-shard-0&authSource=admin&appName=Cluster0";
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
