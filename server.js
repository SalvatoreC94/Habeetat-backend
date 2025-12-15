const express = require('express');
const app = express();
const port = 3000;
const authorsProvider = require('./providers/authorsProvider');

 app.get('/authors', (req, res) => {
        //res.send('Hello, World!');
     res.json(authorsProvider.getAllAuthors());
 });

app.get('/authors/id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json(authorsProvider.getAuthorById(parseInt(id)));
});

app.get('/authors', (req, res) => {
    const { age } = req.query;
    console.log(age);
    res.json(authorsProvider.getAuthorsByfilter(parseInt(age)));
});

app.get('/authors/:id', (req, res) => {
    const { id } = req.params;
});

app.patch('/authors/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
});

app.delete('/authors/:id', (req, res) => {
    const { id } = req.params;
});

app.listen(port, () => {
console.log(`test app listening on port ${port}`);
});

