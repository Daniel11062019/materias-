import { Request, Response } from 'express';
import { MateriasModel } from '../models/materias.models';

export const obtenerMaterias = async (_req: Request, res: Response) => {
  res.json(await MateriasModel.obtenerTodos());
};
