const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 3000;

// Conexión a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/api', authRoutes);
app.use('/api', cartRoutes);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
