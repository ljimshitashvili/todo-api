import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const data = await Task.find();
  return res.status(200).json(data);
};

export const postTodo = async (req, res) => {
  try {
    const { id, title, completed } = req.body;

    const newTask = new Task({
      id,
      title,
      completed,
    });

    const savedTask = await newTask.save();

    return res.status(201).json(savedTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
