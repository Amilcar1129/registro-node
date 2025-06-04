// index.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const puerto = 3000;

// Middleware para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para mostrar el formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Ruta para procesar el formulario
app.post('/registrar', (req, res) => {
  const { nombre, email, edad } = req.body;

  res.send(`
    <h1>Registro exitoso</h1>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Edad: ${edad}</p>
    <a href="/">Volver al formulario</a>
  `);
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
