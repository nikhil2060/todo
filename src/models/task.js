import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // required: true,
    // ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);