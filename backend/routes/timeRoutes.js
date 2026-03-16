import express from "express";
import TimeEntry from "../models/TimeEntry.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { fromTime, toTime, description } = req.body;

    const start = new Date(fromTime);
    const end = new Date(toTime);

    const hours = (end - start) / (1000 * 60 * 60);

    const entry = new TimeEntry({
      fromTime,
      toTime,
      hours,
      description
    });

    await entry.save();

    res.json(entry);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

router.get("/", async (req, res) => {

  const entries = await TimeEntry.find();

  res.json(entries);

});

export default router;