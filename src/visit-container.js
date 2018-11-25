import { cancelVisit, fetchVisit } from "./actions/visit";
import { connect } from "react-redux";
import Visit from "./visit";
import {Content} from "./models/content";
import {changeContent} from "./actions/navigation";

const mapStateToProps = state => ({
  isVisitCanceled: state.visitView.isVisitCanceled,
  visit: state.visitView.visit
});
const mapDispatchToProps = dispatch => ({
  cancelVisit: visitId => dispatch(cancelVisit(visitId)),
  navigateToSchedulerView: eventId => dispatch(changeContent(Content.SCHEDULE, eventId)),
  fetchVisit: visitId => dispatch(fetchVisit(visitId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Visit);