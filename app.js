const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const views = path.join(__dirname, 'views');

app.listen(port, () => console.log("servidor corriendo en el puerto 3030"));
app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(views,'home.html')));
app.get('/contacto', (req,res) => res.sendFile(path.join(views,'contacto.html')));
app.get('/producto', (req,res) => res.sendFile(path.join(views,'producto.html')));