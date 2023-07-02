import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  // OUR TODO SCHEMA
  const TodoSchema = new mongoose.Schema({
    item: String,
    completed: Boolean,
  })

  // OUR TODO MODEL
  const Todo = mongoose.models.todo || mongoose.model("Todo", TodoSchema)

  return { conn, Todo }
}