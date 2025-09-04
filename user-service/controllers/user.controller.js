import { User } from '../models/user.model.js';

export const registerUser = async (req, res) => {
  try{
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  }
  catch(err){
    console.error("Error creating user:", err);
    res.status(500).json({ error: 'Failed to create user' });
  }}

  export const getAllUser = async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }
  catch(err){
    console.error("Error fetching users:", err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }}