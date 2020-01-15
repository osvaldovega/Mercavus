import * as actions from './error';
import { HANDLE_ERROR } from '../types/error/errorActions';

describe('Error Actions', () => {
  it('should crate an action to update the error status with FALSE value', () => {
    const status = false;
    const expectedAction = {
      type: HANDLE_ERROR,
      status,
    };

    expect(actions.updateError(status)).toEqual(expectedAction);
  });

  it('should crate an action to update the error status with TRUE value', () => {
    const status = true;
    const expectedAction = {
      type: HANDLE_ERROR,
      status,
    };

    expect(actions.updateError(status)).toEqual(expectedAction);
  });
});