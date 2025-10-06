import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const routers = Router();

routers.use('/contacts',authenticate, contactsRouter);
routers.use('/auth', authRouter);

export default routers;