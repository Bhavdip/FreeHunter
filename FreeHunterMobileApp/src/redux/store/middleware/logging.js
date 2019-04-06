import { infoAction, infoState } from '@utils';
const loggingMiddleware = store => next => action => {
  infoAction(action);
  const result = next(action);
  infoState(store);
  return result;
};

export default loggingMiddleware;
