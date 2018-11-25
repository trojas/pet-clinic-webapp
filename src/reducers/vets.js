import { FETCH_VETS_SUCCESS } from "../actions/vets";

export default function vets(state = [], action) {
  switch (action.type) {
    case FETCH_VETS_SUCCESS:
      return action.vets;
    default:
      return state;
  }
}