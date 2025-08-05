const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

// Route to get all projects
router.get('/', ProjectController.getProjects);

// Route to create a new project
router.post('/', ProjectController.createProject);

// Route to delete a project by ID
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;