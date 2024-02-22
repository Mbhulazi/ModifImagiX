import { PhoneNumberJSON } from "@clerk/nextjs/server";
import { truncateSync } from "fs";
import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstname: string;
  lastname: string;
  planId: number;
  creditBalance?: number;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true , unique: true},
  photo: { type: String, required: true },
  firstname: { type: String},
  lastname: { type: String},
  planId: { type: Number, default: 1},
  creditBalance : { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
