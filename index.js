const express = require('express');
const cors = require('cors');
const quizRoutes = require('./src/routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());
app.use('/api', quizRoutes);

//enable cors
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
