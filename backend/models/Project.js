import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,

  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization"
  },

  budget: Number,

  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  status: {
    type: String,
    default: "Active"
  }
});

export default mongoose.model("Project", ProjectSchema);