import axios from 'axios';

import types from '../types';

import {
  apiUrl,
  apiKey,
  apiTag,
  recordPerPage,
  dataFormat,
  searchPhotosMethod,
} from '../../constants/apiConstants';

const URL = `${apiUrl}&method=${searchPhotosMethod}&api_key=${apiKey}&tags=${apiTag}&format=${dataFormat}&per_page=${recordPerPage}&nojsoncallback=1`;

function fetchDogsRequest() {
  return {
    type: types.FETCH_DOGS_REQUEST,
  };
}

function fetchDogsSuccess(fetchedData) {
  return {
    type: types.FETCH_DOGS_SUCCESS,
    payload: fetchedData,
  };
}

function fetchDogsFailure(res) {
  return {
    type: types.FETCH_DOGS_FAILURE,
    payload: res.data.message,
  };
}

export function fetchDogs(pageNumber) {
  return (dispatch) => {
    dispatch(fetchDogsRequest());
    return axios.get(`${URL}&page=${pageNumber}`).then((res) => {
      if (res.data && res.data.stat === 'ok') {
        return dispatch(fetchDogsSuccess(res.data.photos.photo));
      }
      dispatch(fetchDogsFailure(res));
      return false;
    });
  };
}
