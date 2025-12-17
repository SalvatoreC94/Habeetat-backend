const express = require('express');
const app = express();
const port = 3000;
const authorsProvider = require('./providers/authorsProvider');

app.use(express.json());

app.get('/authors', (req, res) => {
    const { age } = req.query;
    
    if (age) {
        const filtered = authorsProvider.getAuthorsByfilter(parseInt(age));
        return res.json(filtered);
    }
    
    res.json(authorsProvider.getAllAuthors());
});

app.get('/authors/:id', (req, res) => {
    const { id } = req.params;
    const author = authorsProvider.getAuthorById(parseInt(id));
    
    
    res.json(author);
});

app.patch('/authors/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    
    res.json({ 
        message: 'Aggiornato',
        id: parseInt(id),
        updates: { name, email }
    });
});

app.delete('/authors/:id', (req, res) => {
    const { id } = req.params;
    
    res.json({ 
        message: 'Eliminato',
        id: parseInt(id)
    });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});