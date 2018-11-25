import {Content} from "./models/content";
import PageContent from "./page-content";
import PetsContainer from "./pets-container";
import React from "react";
import { connect } from "react-redux";
import ScheduleContainer from "./schedule-container";
import VetsContainer from "./vets-container";
import VisitContainer from "./visit-container";

const getContentState = content => {
  switch(content) {
    case Content.PETS:
      return <PetsContainer/>;
    case Content.SCHEDULE:
      return <ScheduleContainer/>;
    case Content.VETS:
      return <VetsContainer/>;
    case Content.VISIT_VIEW:
      return <VisitContainer />;
    default:
      throw new Error("Unknown content: " + content);
  }
};

const mapStateToProps = state => ({
  selectedContent: getContentState(state.selectedContent)
});

export default connect(mapStateToProps)(PageContent);