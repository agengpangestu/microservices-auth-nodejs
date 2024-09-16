import mongoose, { Document, Schema } from "mongoose";

export interface UserInterface extends Document {
  email: string;
  username: string;
  password: string;
  role: Role;
  profileImage: string;
}

enum Role {
  super_admin = "super_admin",
  admin = "admin",
  regular = "regular",
}

const userSchema = new Schema<UserInterface>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: Role.regular,
  },
  profileImage: {
    type: String,
  },
});

const User = mongoose.model<UserInterface>("User", userSchema);

export default User;
