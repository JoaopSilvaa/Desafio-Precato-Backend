import { ErrorRequestHandler } from 'express';
import { errorCatalog, Errors } from './errors';

const errorMiddleware: ErrorRequestHandler = (
  err: Error,
  _req,
  res,
  _next,
) => {
  const nameAsErrorType = err.name as keyof typeof Errors;

  const mappedError = errorCatalog[nameAsErrorType];
  if (mappedError) {
    const { httpStatus } = mappedError;
    const { message } = err;

    return res.status(httpStatus).json({ message });
  }

  return res.status(500).json({ message: 'Ops! Internal Error' });
};

export default errorMiddleware;
