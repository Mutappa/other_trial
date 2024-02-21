const express = require('express');
const json = require('body-parser');

const facets = [];

const app = express();
app.use(json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.post('/api/facets', (req, res) => {
    facets.push(req.body);
    res.send(req.body);
});

app.put('/api/facets/:index', (req, res) => {
    facets[req.param.index] = req.body;
    res.send(req.body);
});

app.delete('/api/facets/:index', ((req, res) => {
    facets.splice(req.param.index, 1);
    res.send(facets);
}));

app.listen(1337, () => {
    console.log('Server is runing');
});