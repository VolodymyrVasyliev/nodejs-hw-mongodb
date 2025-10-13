import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+380\d{9}$/) // Ukraine phone number format
    .required()
    .messages({
      'string.pattern.base':
        'The phone number must be in the format +380XXXXXXXXX',
    })
    .required(),
  email: Joi.string().email().lowercase().trim().required(),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number(),
  email: Joi.string().email().trim().lowercase(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
