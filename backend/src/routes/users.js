const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour l'inscription d'un utilisateur
router.post('/register', userController.register);

// Route pour la connexion d'un utilisateur
router.post('/login', userController.login);

// Exporter le routeur
module.exports = router;