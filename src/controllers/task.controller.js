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
export const RenderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
};

// TODO: Credo para enviar nuevo formulario actualizado
export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  // * Realiza la redireción
  res.redirect("/");
};

export const toogleTaskDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
