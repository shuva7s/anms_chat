import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  console.log("trying to connect");
  if (cached.conn) return cached.conn;
  if (!MONGODB_URL) throw new Error("missing mongodb url");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "anms_chats",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
