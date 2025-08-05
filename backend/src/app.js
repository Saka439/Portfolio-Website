const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://portfolio-frontend.onrender.com', 'https://*.onrender.com']
        : 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to PostgreSQL
const { sequelize } = require('./config/database');

// Test database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('PostgreSQL connected successfully');
        // Sync database (creates tables if they don't exist)
        return sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    })
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Database error:', err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});