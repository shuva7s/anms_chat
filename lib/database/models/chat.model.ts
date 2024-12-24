import { model, models } from "mongoose";
import { Schema } from "mongoose";
export interface IChatRoom extends Document {
  _id: string;
  passWord: string;
  roomName: string;
  roomDescription: string;
  members: string[];
  messages: string[];
  host: string;
  createdAt: Date;
  remainingDays: number;
  currentDayCount: number;
}

const ChatRoomModel = new Schema({
  passWord: { type: String, length: 16, required: true },
  roomName: { type: String, required: true },
  roomDescription: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, unique: true, ref: "User" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  host: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  remainingDays: { type: Number, default: 1 },
  currentDayCount: { type: Number, default: 0 },
});

const ChatRoom = models?.ChatRoom || model("ChatRoom", ChatRoomModel);

export default ChatRoom;
