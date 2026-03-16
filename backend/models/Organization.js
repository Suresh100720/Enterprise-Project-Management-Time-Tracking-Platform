import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Organization", OrganizationSchema);