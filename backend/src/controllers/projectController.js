const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        await project.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};