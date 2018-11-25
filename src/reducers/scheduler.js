import Visit from "../models/visit";
import moment from "moment";
import { SchedulerData, ViewTypes } from "react-big-scheduler";
import {
  HIDE_UNAVAILABLE_TIME_ALERT,
  SHOW_NEW_VISIT_FORM,
  SHOW_SCHEDULER,
  SHOW_UNAVAILABLE_TIME_ALERT,
  UPDATE_VISIT_DESCRIPTION,
  UPDATE_VISIT_PET
} from "../actions/scheduler";
import { CREATE_NEW_VISIT_REQUEST, CREATE_NEW_VISIT_SUCCESS, FETCH_VISITS_SUCCESS } from "../actions/visit";

const getNewVisit = () => new Visit({
  id: 0,
  vetId: 0,
  petId: 0,
  description: ""
});

const initialSchedulerDataState = {
  newVisit: getNewVisit(),
  schedulerData: new SchedulerData(moment(),
    ViewTypes.Day,
    false,
    false,
    {
      dayStartFrom: 9,
      dayStopTo: 17,
      resourceName: 'Vet',
      schedulerWidth: 700
    }),
  shouldRefreshVisits: false,
  shouldShowNewVisitForm: false,
  shouldShowScheduler: true,
  shouldShowUnavailableTimeAlert: false,
  visits: []
};

function scheduler(state = initialSchedulerDataState, action) {
  switch (action.type) {

    case CREATE_NEW_VISIT_REQUEST:
    case SHOW_SCHEDULER:
      return Object.assign({}, state, {
        newVisit: getNewVisit(),
        shouldRefreshVisits: false,
        shouldShowNewVisitForm: false,
        shouldShowScheduler: true,
        shouldShowUnavailableTimeAlert: false
      });
    case CREATE_NEW_VISIT_SUCCESS:
      return Object.assign({}, state, { shouldRefreshVisits: true });
    case FETCH_VISITS_SUCCESS:
      return Object.assign({}, state, { shouldRefreshVisits: false, visits: action.visits });
    case HIDE_UNAVAILABLE_TIME_ALERT:
      return Object.assign({}, state, { shouldShowUnavailableTimeAlert: false });
    case SHOW_NEW_VISIT_FORM:
      return Object.assign({}, state, {
        newVisit: action.visit,
        shouldRefreshVisits: false,
        shouldShowNewVisitForm: true,
        shouldShowScheduler: false
      });
    case SHOW_UNAVAILABLE_TIME_ALERT:
      return Object.assign({}, state, { shouldShowUnavailableTimeAlert: true });
    case UPDATE_VISIT_DESCRIPTION:
      const updatedVisitDescription = Object.assign(Object.create(Object.getPrototypeOf(state.newVisit)), state.newVisit, { description: action.description });
      return Object.assign({}, state, { newVisit: updatedVisitDescription });
    case UPDATE_VISIT_PET:
      const updatedVisitPetId = Object.assign(Object.create(Object.getPrototypeOf(state.newVisit)), state.newVisit, { petId: action.petId });
      return Object.assign({}, state, { newVisit: updatedVisitPetId });
    default:
      return state;
  }
}

export default scheduler;