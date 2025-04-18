export enum ErrorCode {
  INVALID_ID_FORMAT = 'INVALID_ID_FORMAT',
  NO_FIELDS_TO_UPDATE = 'NO_FIELDS_TO_UPDATE',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  ERROR_WHILE_FETCHING = 'ERROR_WHILE_FETCHING',
  ERROR_WHILE_DELETING = 'ERROR_WHILE_DELETING',
  ERROR_WHILE_CREATING = 'ERROR_WHILE_CREATING',
  ERROR_WHILE_UPDATING = 'ERROR_WHILE_UPDATING',
  NOT_FOUND = 'NOT_FOUND',
  ALREADY_EXISTS = 'ALREADY_EXISTS'
}

export const ErrorMessages = {
  [ErrorCode.INVALID_ID_FORMAT]: 'Invalid Id Format',
  [ErrorCode.NO_FIELDS_TO_UPDATE]: 'No fields to update',
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [ErrorCode.ERROR_WHILE_FETCHING]: 'Error while fetching',
  [ErrorCode.ERROR_WHILE_DELETING]: 'Error while deleting',
  [ErrorCode.ERROR_WHILE_CREATING]: 'Error while creating',
  [ErrorCode.ERROR_WHILE_UPDATING]: 'Error while updating',
  [ErrorCode.NOT_FOUND]: 'not found',
  [ErrorCode.ALREADY_EXISTS]: 'already exists'
}
