import mongoose from "mongoose";
const ManpowerSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    manpowerList: [
      {
        nameOfDepertment: { type: String, required: true },
        numberOfPeople: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Manpower", ManpowerSchema);
