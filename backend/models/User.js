import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  role: {
    type: String,
    enum: [
      "SUPER_ADMIN",
      "ORG_ADMIN",
      "PROJECT_MANAGER",
      "TEAM_MEMBER",
      "CLIENT"
    ]
  },

  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization"
  }
});

export default mongoose.model("User", UserSchema);