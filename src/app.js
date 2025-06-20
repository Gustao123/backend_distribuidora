import express from 'express';
import cors from 'cors';
import rutasClientes from './routes/clientes.routes.js';
import rutasUsuarios from './routes/usuarios.routes.js';
import rutasProductos from './routes/productos.routes.js';
import rutasCategorias from './routes/categoria.routes.js';
import rutasVentas from './routes/ventas.routes.js';
import rutasEmpleados from './routes/empleado.routes.js';
import rutasDetalle_ventas from './routes/detalle_ventas.routes.js';
import rutasDetallesCompras from './routes/detalles_compras.routes.js';
import rutasCompras from './routes/compras.routes.js';
import rutasEstadisticas from './routes/estadisticas.routes.js';
import rutasIA from './routes/ia.routes.js';



const app = express();

app.use(express.json({ limit: '10mb' })); // Aumenta a 10 MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Habilitar CORS para cualquier origen
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/api', rutasClientes);
app.use('/api', rutasUsuarios);
app.use('/api', rutasProductos);
app.use('/api', rutasCategorias);
app.use('/api', rutasVentas);
app.use('/api', rutasEmpleados);
app.use('/api', rutasDetalle_ventas);
app.use('/api', rutasDetallesCompras);
app.use('/api', rutasCompras);
app.use('/api', rutasEstadisticas);
app.use('/ia', rutasIA);



// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
    message: 'La ruta que ha especificado no se encuentra registrada.'
    });
});

export default app;