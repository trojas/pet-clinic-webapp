import { SHOW_CONTENT_VISIT } from "../actions/navigation";
import Visit from "../models/visit";
import { CANCEL_VISIT_SUCCESS, FETCH_VISIT_SUCCESS } from "../actions/visit";

const initialState = {
  isVisitCanceled: false,
  visit: new Visit({})
};

export default function visitView(state = initialState, action) {
  switch(action.type) {
    case CANCEL_VISIT_SUCCESS:
      return Object.assign({}, state, { isVisitCanceled: true });
    case FETCH_VISIT_SUCCESS:
      return Object.assign({}, state, { visit: action.visit });
    case SHOW_CONTENT_VISIT:
      return Object.assign({}, state, { isVisitCanceled: false, visit: new Visit({ id: action.eventId })});
    default:
      return state;
  }
}