import { Router } from 'express';

import studentController from './app/controllers/StudentController';

import sessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/students', studentController.store);

routes.get('/users', sessionController.store);

export default routes;
