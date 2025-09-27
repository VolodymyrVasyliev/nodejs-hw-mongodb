import {
  getAllContacts,
  getContactById,
  createContacts,
  deleteContactById,
  patchContact,
} from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getAllContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const contacts = await getAllContacts({ page, perPage, sortBy, sortOrder });

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;

  const contacts = await getContactById(contactId);

  if (contacts === null) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contacts,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContacts(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created contact!',
    data: contact,
  });
};

export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContactById(contactId);

  if (contact === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(204).send();
};

export const patchContactControllers = async (req, res) => {
  const { contactId } = req.params;
  const result = await patchContact(contactId, req.body);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
};
