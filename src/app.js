const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/todos', (req, res) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    res.json(todos);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});