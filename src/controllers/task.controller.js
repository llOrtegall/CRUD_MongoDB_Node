import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks });
};

export const createTask = async (req, res) => {
  try {
    const tasks = Task(req.body);
    await tasks.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
