import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/crud-mongo";

export const PORT = process.env.PORT || 3000;
