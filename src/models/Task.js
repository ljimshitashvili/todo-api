import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  id: {
    type: Schema.Types.String,
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  completed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Task = model("tasks", taskSchema);

export default Task;
