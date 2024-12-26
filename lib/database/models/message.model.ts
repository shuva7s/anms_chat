import { Schema, model, models } from "mongoose";

export interface IMessage extends Document {
  _id: string;
  image: string;
  text: string;
  belongsTo: string;
  sentBy: string;
  readBy: string[];
  createdAt: Date;
}

const MessageSchema = new Schema({
  image: { type: String, default: "" },
  text: { type: String, required: true },

  belongsTo: { type: Schema.Types.ObjectId, ref: "ChatRoom" },

  sentBy: { type: Schema.Types.ObjectId, ref: "User" },
  readBy: [{ type: Schema.Types.ObjectId, ref: "User" }],

  createdAt: { type: Date, default: Date.now },
});

const Message = models?.Message || model("Message", MessageSchema);

export default Message;
