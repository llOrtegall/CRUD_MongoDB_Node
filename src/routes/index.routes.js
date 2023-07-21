import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/tasks/add", (req, res) => {
  const tasks = Task(req.body);
  res.send("add taks");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

export default router;
