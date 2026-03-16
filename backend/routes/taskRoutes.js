import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const taskDocument = new Task(req.body);
    await taskDocument.save();
    res.json(taskDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Tasks
router.get("/", async (req, res) => {
  try {
    const taskList = await Task.find()
      .populate("project")
      .populate("assignedTo");

    res.json(taskList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;