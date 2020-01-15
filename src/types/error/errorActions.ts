
export const HANDLE_ERROR = 'HANDLE_ERROR';

export interface updateErrorAction {
  type: typeof HANDLE_ERROR;
  status: boolean,
};

export type ErrorActionTypes = updateErrorAction;
