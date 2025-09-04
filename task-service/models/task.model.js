import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: String,
    createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
});

export const Task = new mongoose.model('Task', taskSchema);