

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { createTask, getAllTasks, getTasksByUserId } from './controllers/task.controller.js';


const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Task Service is up and running!");
})


// mongoose.connect('mongodb://localhost:27017/tasks',)
// .then(()=>{console.log("Connected to MongoDB")})
// .catch(err=>{console.error("MongoDB connection error:", err)})

mongoose.connect('mongodb://mongo:27017/tasks',)
.then(()=>{console.log("Connected to MongoDB")})
.catch(err=>{console.error("MongoDB connection error:", err)})

app.post('/tasks', createTask);
app.get("/tasks", getAllTasks);
app.get("/tasks/user/:userId", getTasksByUserId);


app.listen(PORT, () => {
  console.log(`Task service running on port ${PORT}`);
})