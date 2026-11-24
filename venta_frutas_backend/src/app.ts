import express from 'express';
import cors from 'cors';

import materiasRoutes from './routes/materias.routes';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/v1/health', (req, res) => {

  res.json({
    status: 'OK'
  });

});

app.use('/api/v1/materias', materiasRoutes);
app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

export default app;
