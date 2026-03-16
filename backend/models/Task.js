import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,

  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project"
  },

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["Todo", "In Progress", "Done"],
    default: "Todo"
  },

  priority: String
});

export default mongoose.model("Task", TaskSchema);