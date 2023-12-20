import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectTodb = async () => {
  if (cached.conn) return cached.conn;
  if (!mongoURI) throw new Error("Connection failed to MONGODB_URI");
  cached.promise =
    cached.promise ||
    mongoose.connect(mongoURI, {
      dbName: "evently",
      bufferCommands: false,
    });
    cached.conn = await cached.promise
    return cached.conn
};
