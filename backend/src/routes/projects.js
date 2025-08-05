const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

// Route to get all projects
router.get('/', ProjectController.getAllProjects);

// Route to create a new project
router.post('/', ProjectController.createProject);

// Route to get a project by ID
router.get('/:id', ProjectController.getProjectById);

// Route to update a project by ID
router.put('/:id', ProjectController.updateProject);

// Route to delete a project by ID
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;