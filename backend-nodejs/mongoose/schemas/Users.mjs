import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: mongoose.Schema.Types.String, require: true },
  email: { type: mongoose.Schema.Types.String, require: true },
  password: { type: mongoose.Schema.Types.String, require: true },
});

export const Users = mongoose.model("Users", userSchema);
