import { Router } from 'express';
import { obtenerMaterias } from '../controller/materias.controller';

const router = Router();
router.get('/', obtenerMaterias);

export default router;
