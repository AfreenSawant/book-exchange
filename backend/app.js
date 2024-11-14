const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require('express');
// const db = require('./db');  // Import the database connection

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Welcome to the Book Exchange Platform!');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

