import { Router } from 'express';
import {  obtenerVentasConDetalles } from '../controllers/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener todos los ventas
router.get('/obtenerdetallesventas/:id', obtenerVentasConDetalles);


export default router;