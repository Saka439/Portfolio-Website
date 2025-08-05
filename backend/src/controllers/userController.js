const User = require('../models/User');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username: newUser.username, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ 
            message: 'User logged in successfully', 
            user: { id: user.id, username: user.username, email: user.email } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};