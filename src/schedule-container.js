import { fetchPets } from "./actions/pets";
import { changeContent } from "./actions/navigation";
import { fetchVets } from "./actions/vets";
import { createNewVisit, fetchVisits } from "./actions/visit";
import { updateVisitDescription, updateVisitPet } from "./actions/scheduler";
import { Content } from "./models/content";
import moment from "moment";
import { DATETIME_FORMAT } from "react-big-scheduler";
import { connect } from "react-redux";
import Schedule from "./schedule";
import { hideUnavailableTimeAlert, showNewVisitForm, showScheduler, showUnavailableTimeAlert } from "./actions/scheduler";

const mapStateToProps = (state) => {

  const vets = state.vets.map(vet => ({ id: vet.id, name: vet.firstName +  " " + vet.lastName }));
  const events = state.scheduler.visits.map(visit => ({
    id: visit.id,
    start: moment(visit.startDate).format(DATETIME_FORMAT),
    end: moment(visit.startDate).add(1,'hour').format(DATETIME_FORMAT),
    resourceId: visit.vetId,
    title: visit.petName + " (" + visit.petOwnerName + ") - " + visit.description
  }));

  const schedulerData = state.scheduler.schedulerData;
  schedulerData.setResources(vets);
  schedulerData.setEvents(events);

  return {
    newVisit: state.scheduler.newVisit,
    pets: state.pets,
    schedulerData: schedulerData,
    shouldRefreshVisits: state.scheduler.shouldRefreshVisits,
    shouldShowNewVisitForm: state.scheduler.shouldShowNewVisitForm,
    shouldShowScheduler: state.scheduler.shouldShowScheduler,
    shouldShowUnavailableTimeAlert: state.scheduler.shouldShowUnavailableTimeAlert,
    vets: vets
  }
};
const mapDispatchToProps = (dispatch) => ({
  createNewVisit: (visit) => dispatch(createNewVisit(visit)),
  fetchPets: () => dispatch(fetchPets()),
  fetchVets: () => dispatch(fetchVets()),
  fetchVisits: () => dispatch(fetchVisits()),
  handleDescriptionChange: e => dispatch(updateVisitDescription(e.target.value)),
  handlePetChange: e => dispatch(updateVisitPet(parseInt(e.target.value))),
  hideUnavailableTimeAlert: () => dispatch(hideUnavailableTimeAlert()),
  navigateToVisitView: eventId => dispatch(changeContent(Content.VISIT_VIEW, eventId)),
  showNewVisitForm: (visit) => dispatch(showNewVisitForm(visit)),
  showScheduler: () => dispatch(showScheduler()),
  showUnavailableTimeAlert: () => dispatch(showUnavailableTimeAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);