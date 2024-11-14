const User = require('../models/userModel');

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = { name, email, password }; // Hash password in production
    const query = 'INSERT INTO users SET ?';
    connection.query(query, newUser, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error registering user', error: err });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
