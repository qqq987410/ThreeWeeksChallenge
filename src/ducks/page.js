import { GET_PAGE } from './constants/actionType';
import { getPathName } from '../utils/urlUtils';

export const getPage = () => {
  const path = getPathName();

  return {
    type: GET_PAGE,
    payload: path,
  };
};

// -------------------- Reducer --------------------

const INIT_STATE = {
  page: '',
};

export default function page(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
