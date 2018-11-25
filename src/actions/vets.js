import VetResponseAdapter from "../adapters/vet-response-adapter";
import {API_BASE_URL} from "../config";

export const FETCH_VETS_REQUEST = 'FETCH_VETS_REQUEST';
export const FETCH_VETS_SUCCESS = 'FETCH_VETS_SUCCESS';
export const FETCH_VETS_FAILURE = 'FETCH_VETS_FAILURE';

export function fetchVets() {
  return dispatch => {
    dispatch({ type: FETCH_VETS_REQUEST });
    return fetch(API_BASE_URL + "/vets")
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_VETS_FAILURE,
            error: body.error
          });
        } else {
          const vetModels = [];
          body.forEach(vet => (vetModels.push(new VetResponseAdapter(vet).toVet())));
          dispatch({
            type: FETCH_VETS_SUCCESS,
            vets: vetModels
          });
        }
      });
  };
}