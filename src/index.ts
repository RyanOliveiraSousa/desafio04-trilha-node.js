import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { usersRoutes } from './routes/users.routes';
import swaggerFille from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFille));

app.use('/users', usersRoutes);

export { app };
