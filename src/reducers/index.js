import { combineReducers } from "redux";
import pets from "./pets";
import scheduler from "./scheduler";
import selectedContent from "./selected-content";
import vets from "./vets";
import visitView from "./visit-view";

const petClinicApp = combineReducers({
  pets,
  scheduler,
  selectedContent,
  vets,
  visitView
});

export default petClinicApp;