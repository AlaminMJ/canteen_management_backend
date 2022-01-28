import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    img_url: { type: String },
    role: {
      type: String,
      enum: ["admin", "store", "canteen", "user"],
      default: "user",
      lowercase: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
