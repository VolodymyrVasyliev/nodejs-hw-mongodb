import Router from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  patchContactControllers,
} from '../controllers/contacts.js';

const router = Router();

router.get('/', getAllContactsController);

router.get('/:contactId', getContactByIdController);

router.post('/', createContactController);

router.delete('/:contactId', deleteContactController);

router.patch('/:contactId', patchContactControllers);

export default router;
