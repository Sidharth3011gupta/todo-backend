require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
// app.use(cors({
//     credentials: true,
//     origin: ['https://todo-app-frontend-teal-two.vercel.app/',],
//     methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH','OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//  }))

//  app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/todos', todoRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
