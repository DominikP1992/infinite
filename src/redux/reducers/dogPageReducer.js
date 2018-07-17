import types from '../types';
import { updateData } from '../utils/utils';

const defaultState = {
  photos: [],
  pageNumber: 1,
  error: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_DOGS_SUCCESS:
      return ({
        ...state,
        photos: state.photos.concat(updateData(action.payload)),
        pageNumber: state.pageNumber + 1,
      });
    case types.FETCH_DOGS_FAILURE:
      return ({
        ...state,
        error: action.payload,
      });
    default:
      return state;
  }
};
