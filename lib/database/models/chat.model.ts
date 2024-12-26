import { model, models } from "mongoose";
import { Schema } from "mongoose";
export interface IChatRoom extends Document {
  _id: string;
  isGroupChat: boolean;
  groupName: string;
  groupDescription: string;
  groupPhoto: string;
  host: string;
  membersWithTheirInfo: {
    userId: string;
    sentCount: number;
    readCount: number;
  }[];
  totalMessages: number;
  messages: string[];
  requests: string[];
  createdAt: Date;
}

export type memberType = {
  userId: string;
  sentCount: number;
  readCount: number;
};

const ChatRoomModel = new Schema({
  isGroupChat: { type: Boolean, default: false },
  groupName: { type: String, default: "" },
  groupDescription: { type: String, default: "" },
  groupPhoto: { type: String, default: "" },

  host: { type: Schema.Types.ObjectId, default: null, ref: "User" },

  membersWithTheirInfo: [
    {
      _id: false,
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      sentCount: { type: Number, default: 0 },
      readCount: { type: Number, default: 0 },
    },
  ],

  totalMessages: { type: Number, default: 0 },

  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],

  requests: [{ type: Schema.Types.ObjectId, unique: true, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const ChatRoom = models?.ChatRoom || model("ChatRoom", ChatRoomModel);

export default ChatRoom;
