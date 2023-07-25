import { Router } from "express";
import {
  renderTask,
  createTask,
  editTask,
  toogleTaskDone,
  RenderTaskEdit,
  deleteTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/task/:id/toggleDone", toogleTaskDone);

router.get("/tasks/:id/edit", RenderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

export default router;
