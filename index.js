const express = require('express');
const app = express();

// Render provee el puerto en process.env.PORT
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo desde Render!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
