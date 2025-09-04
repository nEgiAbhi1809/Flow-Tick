import { Task } from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        const task = new Task({ title, description, userId });
        await task.save();
        res.status(201).json(task);
    } 
    catch (err) {
        console.error("Error creating task:", err);
        res.status(500).json({ error: 'Failed to create task' });
    }}


export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } 
    catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }}

export const getTasksByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const tasks = await Task.find({ userId });
        res.json(tasks);
    } 
    catch (err) {
        console.error("Error fetching tasks for user:", err);
        res.status(500).json({ error: 'Failed to fetch tasks for user' });
    }}