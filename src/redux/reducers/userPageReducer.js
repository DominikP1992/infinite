import types from '../types';
import { updateData } from '../utils/utils';

const defaultState = {
  photos: [],
  error: false,
  pageNumber: 1,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: state.photos.concat(updateData(action.payload)),
        pageNumber: state.pageNumber + 1,
      };
    case types.FETCH_USER_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.CLEAR_USER_DATA:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};
