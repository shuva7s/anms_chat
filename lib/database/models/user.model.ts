import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  _id: string;
  userIp: string;
  chatRooms: string[];
}

const UserSchema = new Schema({
  userIp: { type: String, required: true, unique: true },
  chatRooms: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
});

const User = models?.User || model("User", UserSchema);

export default User;
