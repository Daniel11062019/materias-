import { pool } from '../config/database';

export interface Materia {
  nombre: string;
}

export class MateriasModel {
  static async obtenerTodos(): Promise<Materia[]> {
    const { rows } = await pool.query<Materia>(
      `SELECT nombre
       FROM materias
       ORDER BY id_materia`
    );
    return rows;
  }
}
