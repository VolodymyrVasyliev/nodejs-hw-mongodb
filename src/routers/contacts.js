import Router from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactControllers,
} from '../controllers/contacts.js';
import { validateBody, validateId } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

router.get('/', validateBody(createContactSchema), getAllContactsController);

router.get(
  '/:contactId',
  validateId(createContactSchema),
  getContactByIdController,
);

router.post('/', validateBody(createContactSchema), createContactController);

router.delete('/:contactId', deleteContactController);

router.patch(
  '/:contactId',
  validateId(updateContactSchema),
  patchContactControllers,
);

export default router;
