import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Bad Request', {
      errors: err.details,
    });
    next(error);
  }
};

export const validateId = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.params, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Invalid ID', {
      errors: err.details,
    });
    next(error);
  }
};
