import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  const projectDocument = new Project(req.body);

  await projectDocument.save();

  res.json(projectDocument);
};

export const deleteProject = async (req, res) => {
  try {

    await Project.findByIdAndDelete(req.params.id);

    res.json({ message: "Project deleted" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting project" });
  }
};

export const updateProject = async (req, res) => {

  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(project);

  } catch (error) {

    res.status(500).json({ message: "Update failed" });

  }
};

export const getProjects = async (req, res) => {
  const projectList = await Project.find().populate("team");

  res.json(projectList);
};