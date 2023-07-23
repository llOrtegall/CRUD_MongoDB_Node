import { Router, request } from "express";
import {
  createTask,
  renderTask,
  RendereditTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/edit/:id", RendereditTask);

// ? utilizado para actualizar la tareas sin embargo no es buena practica hacerlo por este metodo
router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id);
  res.redirect("/");
});

// ? para eliminar las peticiones
router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  // * Realiza la redireción
  res.redirect("/");
});

router.get("/toggleDone/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
});

export default router;
