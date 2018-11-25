import VisitResponseAdapter from "../adapters/visit-response-adapter";
import VisitRequestAdapter from "../adapters/visit-request-adapter";
import { API_BASE_URL } from "../config";

export const CANCEL_VISIT_REQUEST = "CANCEL_VISIT_REQUEST";
export const CANCEL_VISIT_SUCCESS = "CANCEL_VISIT_SUCCESS";
export const CANCEL_VISIT_FAILURE = "CANCEL_VISIT_FAILURE";

export const CREATE_NEW_VISIT_REQUEST = "CREATE_NEW_VISIT_REQUEST";
export const CREATE_NEW_VISIT_SUCCESS = "CREATE_NEW_VISIT_SUCCESS";
export const CREATE_NEW_VISIT_FAILURE = "CREATE_NEW_VISIT_FAILURE";

export const FETCH_VISIT_REQUEST = "FETCH_VISIT_REQUEST";
export const FETCH_VISIT_SUCCESS = "FETCH_VISIT_SUCCESS";
export const FETCH_VISIT_FAILURE = "FETCH_VISIT_FAILURE";

export const FETCH_VISITS_REQUEST = "FETCH_VISITS_REQUEST";
export const FETCH_VISITS_SUCCESS = "FETCH_VISITS_SUCCESS";
export const FETCH_VISITS_FAILURE = "FETCH_VISITS_FAILURE";

export function cancelVisit(visitId) {
  return dispatch => {
    dispatch({ type: CANCEL_VISIT_REQUEST });
    fetch(API_BASE_URL + "/visits/" + visitId, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        dispatch({
          type: CANCEL_VISIT_FAILURE,
          error: response.status + " " + response.statusText
        });
      } else {
        dispatch({
          type: CANCEL_VISIT_SUCCESS
        });
      }
    });
  }
}

export function createNewVisit(visit) {
  return dispatch => {
    dispatch({ type: CREATE_NEW_VISIT_REQUEST });
    return fetch(API_BASE_URL + "/visits", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(new VisitRequestAdapter(visit).toRequest())
    }).then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: CREATE_NEW_VISIT_FAILURE,
            error: body.error
          });
        } else {
          dispatch(fetchVisits());
          dispatch({
            type: CREATE_NEW_VISIT_SUCCESS
          });
        }
      });
  }
}

export function fetchVisit(visitId) {
  return dispatch => {
    dispatch({ type: FETCH_VISIT_REQUEST });
    fetch(API_BASE_URL + "/visits/" + visitId)
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_VISIT_FAILURE,
            error: body.error
          });
        } else {
          const visit = new VisitResponseAdapter(body).toVisit();
          dispatch({
            type: FETCH_VISIT_SUCCESS,
            visit: visit
          });
        }
      });
  }
}

export function fetchVisits() {
  return dispatch => {
    dispatch({ type: FETCH_VISITS_REQUEST });
    return fetch(API_BASE_URL + "/visits")
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_VISITS_FAILURE,
            error: body.error
          });
        } else {
          const visits = [];
          body.forEach(visitResponse => (visits.push(new VisitResponseAdapter(visitResponse).toVisit())));
          dispatch({
            type: FETCH_VISITS_SUCCESS,
            visits: visits
          });
        }
      });
  }
}