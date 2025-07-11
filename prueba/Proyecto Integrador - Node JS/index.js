// generamos un servidor en express con modulos
import express from 'express';
//utilizamos cors
import cors from 'cors';

//importamos el router
import productsRoutes from './src/routes/products.routes.js';
//importamos router de auth
import authRoutes from './src/routes/auth.routes.js';

import { protect } from './src/middleware/auth.middleware.js';


//definimos puerto
const PORT = 3000;
//creamos la aplicacion express
const app = express();

//configuramos cors
app.use(cors());
//configuramos express para que entienda json
app.use(express.json());

//rutas publicas
app.use('/auth', authRoutes);


//rutas privadas, protegidas por token
app.use('/api',protect, productsRoutes);

//configuramos ruta 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

//iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});