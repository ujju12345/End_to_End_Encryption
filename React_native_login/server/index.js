const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
 
dotenv.config();
 
const app = express();
const port = process.env.PORT || 3000;
const MONGODB_URI= "mongodb+srv://ashishpal2204:22816166@cluster0.pqrrrug.mongodb.net/testDB?retryWrites=true&w=majority";

 
app.use(express.json());
 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
 
// Import routes
const allRoutes = require('../src/routes/routes');
 
// Use routes
app.use('/api', allRoutes);
 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});