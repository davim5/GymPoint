import { Router } from 'express';

import studentController from './app/controllers/StudentController';
import sessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users', sessionController.store);

routes.use(authMiddleware);
routes.get('/students', studentController.store);
routes.post('/students', studentController.update);

export default routes;
