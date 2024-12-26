import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerk_id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  photo: string;
  chatRooms: string[];
  invitations: string[];
}

const UserSchema = new Schema({
  clerk_id: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, default: "" },
  last_name: { type: String, default: "" },
  photo: { type: String, default: "" },
  chatRooms: [{ type: Schema.Types.ObjectId, unique: true, ref: "ChatRoom" }],
  invitations: [{ type: Schema.Types.ObjectId, unique: true, ref: "ChatRoom" }],
});

const User = models?.User || model("User", UserSchema);

export default User;
