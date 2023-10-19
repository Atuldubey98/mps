import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
      enum: [
        "-1",
        "0",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ],
    },
    rollNumber: Number,
  },
  { versionKey: false, timestamps: true }
);

const StudentModel = model("student", studentSchema);
export default StudentModel;
