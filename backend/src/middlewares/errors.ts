export enum Errors {
  'ValidationError' = 'ValidationError',
  'NotFoundError' = 'NotFoundError',
  'ConflictError' = 'ConflictError',
  'UnauthorizedError' = 'UnauthorizedError',
};

type ErrorResponse = {
  error: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in Errors]: ErrorResponse
};


export const errorCatalog: ErrorCatalog = {
  ValidationError: {
      error: 'Invalid Fields',
      httpStatus: 400,
  },
  NotFoundError: {
      error: 'Not Found',
      httpStatus: 404,
  },
  ConflictError: {
      error: 'Already Exists',
      httpStatus: 409,
  },
  UnauthorizedError: {
      error: 'Not Authorized',
      httpStatus: 401,
  },
};
