import React, { Component } from "react";
import Visit from "./models/visit";
import moment from "moment";
import Scheduler from "react-big-scheduler";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import 'react-big-scheduler/lib/css/style.css'

class Schedule extends Component {

  constructor(props) {
    super(props);
    props.fetchVets();
    props.fetchPets();
    props.fetchVisits();
  }

  render() {

    const petOptions = this.props.pets.map(pet => (<option value={pet.id} key={pet.id}>{ pet.name + " (" + pet.ownerFirstName + " " + pet.ownerLastName + ")"}</option>));

    const createNewVisit = () => this.props.createNewVisit(this.props.newVisit);

    const newVisit = (schedulerData, slotId, slotName, start) => {

      this.props.hideUnavailableTimeAlert();
      const startDateTime = moment(start);

      if (startDateTime.hours() >= 17 && startDateTime.minutes() > 0) {
        this.props.showUnavailableTimeAlert();
        return;
      }

      let timeConflictExists = false;
      const events = this.props.schedulerData.eventGroups;
      if (events) {
        for (let i = 0; i < events.length; i++) {
          if (events[i].state.resourceId === slotId
            && Math.abs(startDateTime.unix()-moment(events[i].state.start).unix()) < (60 * 60)) {
            timeConflictExists = true;
            break;
          }
        }
      }
      if (timeConflictExists) {
        this.props.showUnavailableTimeAlert();
      } else {
        const visit = new Visit({
          vetId: parseInt(slotId),
          vetName: slotName,
          startDate: start,
          petId: 0,
          description: ""
        });
        this.props.showNewVisitForm(visit);
      }
    };

    const eventClicked = (schedulerData, event) => {
      this.props.navigateToVisitView(event.id);
    };

    const nextClick = schedulerData => {
      schedulerData.next();
      this.props.fetchVisits();
    };

    const prevClick = schedulerData => {
      schedulerData.prev();
      this.props.fetchVisits();
    };

    const onSelectDate= (schedulerData, date) => {
      schedulerData.setDate(date);
      this.props.fetchVisits();
    };

    const onViewChange = (schedulerData, view) => {
      schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
      this.props.fetchVisits();
    };

    return (<div className="row">
      <div className="col-lg-12">
        <h1>Schedule</h1>
        <div className={this.props.shouldShowNewVisitForm ? "" : "hidden"}>
          <h2>New Visit</h2>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Date</label>
              <div className="col-sm-10">
                <p className="form-control-static">{ this.props.newVisit.startDate ? this.props.newVisit.startDate.substr(0, this.props.newVisit.startDate.length-3) : "" }</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Vet</label>
              <div className="col-sm-10">
                <p className="form-control-static">{ this.props.newVisit.vetName ? this.props.newVisit.vetName : "" }</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Pet</label>
              <div className="col-sm-8">
                <select value={this.props.newVisit.petId} className="form-control" onChange={this.props.handlePetChange}>
                  <option value="0">--Select a pet--</option>
                  { petOptions }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Description</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" value={this.props.newVisit.description} onChange={this.props.handleDescriptionChange} placeholder="Reason for visit" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">&nbsp;</div>
              <div className="col-sm-8">
                <button type="button" className="btn btn-primary" onClick={createNewVisit}>Create</button>&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-default" onClick={this.props.showScheduler}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div className={this.props.shouldShowScheduler ? "" : "hidden"}>
          <div className={"alert alert-danger" + (this.props.shouldShowUnavailableTimeAlert ? "" : " hidden")} role="alert">The time you selected is not available. Please select a different time.</div>
          <Scheduler schedulerData={this.props.schedulerData}
                     prevClick={prevClick}
                     nextClick={nextClick}
                     onSelectDate={onSelectDate}
                     onViewChange={onViewChange}
                     eventItemClick={eventClicked}
                     newEvent={newVisit}
          />
        </div>
      </div>
    </div>);
  }
}

export default DragDropContext(HTML5Backend)(Schedule);