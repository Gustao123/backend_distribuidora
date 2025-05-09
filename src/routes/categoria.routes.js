import { Router } from 'express';
import {  actualizarCategoria, eliminarCategoria, obtenerCategorias, registrarCategoria } from '../controllers/categoria.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categoria', obtenerCategorias);
router.post('/registrarcategoria', registrarCategoria);
router.delete('/eliminarcategoria/:id', eliminarCategoria);
router.patch('/actualizarcategoria/:id', actualizarCategoria);

export default router;