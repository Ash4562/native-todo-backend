import mongoose, { models } from "mongoose";

const todoSchema = new mongoose.Schema({
    task: string,
    desc: string,
    complete: {
        type: boolean,
        default: false
    }
}, { timestamps: true })
const Todo = models.todo || mongoose.model("todo", todoSchema)
export default Todo