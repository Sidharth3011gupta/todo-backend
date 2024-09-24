const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createTodo = async (req, res) => {
    const { description } = req.body;
    try {
        const newTodo = new Todo({ description });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { description }, { new: true });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.toggleTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        todo.completed = true
        await todo.save();
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
