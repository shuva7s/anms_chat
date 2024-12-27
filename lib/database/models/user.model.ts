import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerk_id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  photo: string;
  bio: string;
  chatRooms: string[];
  invitations: string[];
  createdAt: Date;
}

const UserSchema = new Schema({
  clerk_id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  photo: { type: String, default: "" },
  bio: { type: String, default: "" },
  
  chatRooms: { type: [Schema.Types.ObjectId], ref: "ChatRoom", default: [] },
  invitations: { type: [Schema.Types.ObjectId], ref: "ChatRoom", default: [] },
  
  createdAt: { type: Date, default: Date.now },
});

const User = models?.User || model("User", UserSchema);

export default User;
