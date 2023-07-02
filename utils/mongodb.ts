import mongoose, { Model, Schema } from "mongoose"

// Define the TodoSchema
const TodoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
})

// Define the Todo model based on the TodoSchema
const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGODB_URL } = process.env

// Connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URL as string)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  return { conn, Todo }
}
