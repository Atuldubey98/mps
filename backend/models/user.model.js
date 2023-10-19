import { Schema, model } from "mongoose";
import { beforeUserSave } from "../helpers/user.helper.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      index: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", beforeUserSave);
const UserModel = model("user", userSchema);

export default UserModel;
