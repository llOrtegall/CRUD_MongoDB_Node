import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks });
});

// TODO: agregando las tareas y insertandolas en la base de datos
router.post("/tasks/add", async (req, res) => {
  try {
    const tasks = Task(req.body);
    await tasks.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error.message);
  }
});

// ? utilizado para actualizar la tareas sin embargo no es buena practica hacerlo por este metodo
router.post("/edit/:id", (req, res) => {
  console.log(req.body);
  res.send("recibido");
});

export default router;
