import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import { User } from './models/user.model.js';
import { getAllUser, registerUser } from './controllers/user.controller.js';


const app = express();
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("User Service is up and running!");
})

mongoose.connect('mongodb://mongo:27017/users',).then(()=>{console.log("Connected to MongoDB")}).catch(err=>{console.error("MongoDB connection error:", err)})


// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);

app.post('/users', registerUser);
app.get("/users", getAllUser);


app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});