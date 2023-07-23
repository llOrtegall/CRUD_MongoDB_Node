import Task from "../models/Task";

// TODO: renderiza las tareas ya creadas
export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks });
};

// TODO: agregando las tareas y insertandolas en la base de datos
export const createTask = async (req, res) => {
  try {
    const tasks = Task(req.body);
    await tasks.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// TODO: Utilizado para editar las tareas
export const RendereditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};
