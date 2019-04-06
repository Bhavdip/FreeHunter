import {
  REQ_FOR_RANDOM_USER,
  RANDOM_USERS_LIST,
  RANDOM_USERS_LIST_FAIL
} from './constants';
const initialState = {
  isFetching: false,
  randomUsersList: '',
  randomUsersListFail: ''
};
import { log } from '@utils';
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ_FOR_RANDOM_USER: {
      return {
        ...state,
        isFetching: true,
        randomUsersList: '',
        randomUsersListFail: ''
      };
    }
    case RANDOM_USERS_LIST: {
      return {
        ...state,
        isFetching: false,
        randomUsersList: action.payload.results,
        randomUsersListFail: ''
      };
    }
    case RANDOM_USERS_LIST_FAIL: {
      return {
        ...state,
        isFetching: false,
        randomUsersList: '',
        randomUsersListFail: action.payload.error
      };
    }

    default: {
      return { ...state };
    }
  }
};
export default ProfileReducer;
