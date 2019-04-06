import { fetchCall } from '@request';
import { log } from '@utils';
import {
  REQ_FOR_RANDOM_USER,
  RANDOM_USERS_LIST,
  RANDOM_USERS_LIST_FAIL
} from './constants';

const reqForRandomUser = () => ({
  type: REQ_FOR_RANDOM_USER,
  payload: {}
});

const randomUsersList = results => ({
  type: RANDOM_USERS_LIST,
  payload: { results: results }
});

const randomUserListError = error => ({
  type: RANDOM_USERS_LIST_FAIL,
  payload: { error: error }
});

export const fetchRandomUserList = pageSize => dispatch => {
  dispatch(reqForRandomUser());
  const request = {
    url: `results=${pageSize}`,
    type: 'GET'
  };
  return fetchCall(request)
    .then(response => {
      const { results } = response;
      dispatch(randomUsersList(results));
    })
    .catch(error => {
      dispatch(randomUserListError(error.err));
    });
};
