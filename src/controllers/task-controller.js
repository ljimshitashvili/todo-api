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

export const deleteAll = async (req, res) => {
  try {
    await Task.deleteMany();
    res.status(200).json({ message: "All tasks deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting tasks." });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findOneAndDelete({ _id: taskId });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found." });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompleted = async (req, res) => {
  try {
    await Task.deleteMany({ completed: false });
    res.status(200).json({ message: "Completed tasks deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting completed tasks." });
  }
};

export const changeCompletion = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    task.completed = !task.completed;

    await task.save();

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
