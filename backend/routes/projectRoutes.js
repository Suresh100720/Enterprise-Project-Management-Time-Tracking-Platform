import express from "express";
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;