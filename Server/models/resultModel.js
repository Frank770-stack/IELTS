import mongoose from "mongoose";

// Student Results Schema
const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    idNumber: { type: String, required: true, unique: true },
    studentNumber: { type: String, required: true, unique: true },
    centerNumber: { type: String, required: true }, // New field
    nationality: { type: String, required: true }, // New field
    passportNumber: { type: String, required: true }, // New field
    scores: {
      listening: { type: Number, required: true },
      reading: { type: Number, required: true },
      writing: { type: Number, required: true },
      speaking: { type: Number, required: true },
      overall: { type: Number, required: true },
      CEFR: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;
