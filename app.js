require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors({
    credentials: true,
    origin: ['https://todo-app-react-kud8x13f7-eshan-sharmas-projects.vercel.app','https://todo-app-react-seven-navy.vercel.app',`http://localhost:5173`,'http://127.0.0.1:5500',`https://eshan-009.github.io/TodoApp_FrontEnd/`,`https://eshan-009.github.io`,`https://eshan-009.github.io/TodoApp_FrontEnd`,`https://eshan-009.github.io/`],
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
 }))
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/todos', todoRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
