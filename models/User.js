import mongoose from "mongoose";
var userSchema = mongoose.Schema(
  {
    name: { type: String, required: "nom is required" },
    telephone: { type: String, required: false },
    email: { type: String, required: "Email is required", unique: true },
    password: {
      type: String,
      required: "password is required",
    },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
