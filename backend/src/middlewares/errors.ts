export enum Errors {
  'BadRequestError' = 'BadRequestError',
  'NotFoundError' = 'NotFoundError',
  'ConflictError' = 'ConflictError',
};

type ErrorResponse = {
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in Errors]: ErrorResponse
};


export const errorCatalog: ErrorCatalog = {
  BadRequestError: {
      httpStatus: 400,
  },
  NotFoundError: {
      httpStatus: 404,
  },
  ConflictError: {
      httpStatus: 409,
  }
};
