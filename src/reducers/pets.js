import { FETCH_PETS_SUCCESS } from "../actions/pets";

export default function pets(state = [], action) {
  switch (action.type) {
    case FETCH_PETS_SUCCESS:
      return action.pets;
    default:
      return state;
  }
}