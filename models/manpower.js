import mongoose from "mongoose";
const ManpowerSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    manpowerList: { type: Array, required: ture },
  },
  { timestamps: true }
);

export default mongoose.model("Manpower", ManpowerSchema);
