const express = require('express')
const app = express()
const port = 3004
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/detalle-alquiler.html'));
});

app.listen(port, () => {
    console.log('Página de alquiler de casas '+ port);
});
