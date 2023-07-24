import { Router } from "express";
import {
  createTask,
  renderTask,
  RenderTaskEdit,
  editTask,
  deleteTask,
  toogleTaskDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/task/:id/toggleDone", toogleTaskDone);

router.get("/task/:id/edit", editTask);

router.post("/task/:id/edit", renderTask);

router.get("/task/:id/delete", deleteTask);

export default router;
