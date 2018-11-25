export const HIDE_UNAVAILABLE_TIME_ALERT = "HIDE_UNAVAILABLE_TIME_ALERT";
export const SHOW_NEW_VISIT_FORM = "SHOW_NEW_VISIT_FORM";
export const SHOW_SCHEDULER = "SHOW_SCHEDULER";
export const SHOW_UNAVAILABLE_TIME_ALERT = "SHOW_UNAVAILABLE_TIME_ALERT";
export const UPDATE_VISIT_DESCRIPTION = "UPDATE_VISIT_DESCRIPTION";
export const UPDATE_VISIT_PET = "UPDATE_VISIT_PET";

export function hideUnavailableTimeAlert() {
  return dispatch => dispatch({ type: HIDE_UNAVAILABLE_TIME_ALERT })
}

export function showNewVisitForm(visit) {
  return dispatch => dispatch({
    type: SHOW_NEW_VISIT_FORM,
    visit: visit
  })
}

export function showScheduler() {
  return dispatch => dispatch({ type: SHOW_SCHEDULER })
}

export function showUnavailableTimeAlert() {
  return dispatch => dispatch({ type: SHOW_UNAVAILABLE_TIME_ALERT })
}

export function updateVisitDescription(description) {
  return dispatch => dispatch({ type: UPDATE_VISIT_DESCRIPTION, description: description })
}

export function updateVisitPet(petId) {
  return dispatch => dispatch({ type: UPDATE_VISIT_PET, petId: petId })
}