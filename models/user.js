import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  id: { type: String },
  tel: { type: String },
  introduction: { type: String },
  role: { type: String },
});

export default mongoose.model("Users", userSchema);
