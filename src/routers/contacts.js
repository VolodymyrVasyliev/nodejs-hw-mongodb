import express from 'express';

import {
  getAllContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';

const router = express.Router();

router.get('/contacts', getAllContactsController);

router.get('/contacts/:contactId', getContactByIdController);

export default router;
