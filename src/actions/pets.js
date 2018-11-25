import PetResponseAdapter from "../adapters/pet-response-adapter";
import { API_BASE_URL } from "../config";

export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST';
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';

export function fetchPets() {
  return dispatch => {
    dispatch({ type: FETCH_PETS_REQUEST });
    return fetch(API_BASE_URL + "/pets")
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_PETS_FAILURE,
            error: body.error
          });
        } else {
          const petModels = [];
          body.forEach(pet => (petModels.push(new PetResponseAdapter(pet).toPet())));
          dispatch({
            type: FETCH_PETS_SUCCESS,
            pets: petModels
          });
        }
      });
  };
}