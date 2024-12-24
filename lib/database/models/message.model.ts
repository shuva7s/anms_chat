import { Schema, model, models } from "mongoose";

export interface IMessage extends Document {
  id: string;
  chatRoomId: string;
  creator: string;
  message: string;
  createdAt: Date;
}

const MessageSchema = new Schema({
  chatRoomId: { type: Schema.Types.ObjectId, ref: "ChatRoom" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = models?.Message || model("Message", MessageSchema);

export default Message;
