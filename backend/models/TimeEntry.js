import mongoose from "mongoose";

const TimeEntrySchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },

  fromTime: Date,

  toTime: Date,

  hours: Number,

  description: String,

  date: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("TimeEntry", TimeEntrySchema);