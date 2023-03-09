import { ErrorRequestHandler } from 'express';
import { errorCatalog, Errors } from './errors';

const errorMiddleware: ErrorRequestHandler = (
  err: Error,
  _req,
  res,
  _next,
) => {
  const messageAsErrorType = err.message as keyof typeof Errors;

  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { error, httpStatus } = mappedError;
    
    return res.status(httpStatus).json({ error });
  }

  return res.status(500).json({ message: 'Ops! Internal Error' });
};

export default errorMiddleware;
