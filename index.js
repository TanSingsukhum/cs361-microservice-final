const express = require('express');
const cors = require('cors');
const quizRoutes = require('./src/routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());
app.use('/api', quizRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
