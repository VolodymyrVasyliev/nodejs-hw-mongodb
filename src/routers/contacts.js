import Router from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactControllers,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts';

const router = Router();

router.get('/', getAllContactsController);

router.get('/:contactId', getContactByIdController);

router.post('/', validateBody(createContactSchema), createContactController);

router.delete('/:contactId', deleteContactController);

router.patch('/:contactId', patchContactControllers);

export default router;
