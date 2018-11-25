import React, { Component } from "react";

class Visit extends Component {
  componentWillMount() {
    this.props.fetchVisit(this.props.visit.id);
  }

  componentDidUpdate() {
    if (this.props.isVisitCanceled) {
      this.props.navigateToSchedulerView();
    }
  }

  render() {
    console.log(this.props);
    const cancelVisit = () => this.props.cancelVisit(this.props.visit.id);

    return (<div className="row">
      <div className="col-lg-12">
        <h1>Visit</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Date</label>
            <div className="col-sm-10">
              <p className="form-control-static">{ this.props.visit.startDate ? this.props.visit.startDate.substr(0, this.props.visit.startDate.length-3) : "" }</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Vet</label>
            <div className="col-sm-10">
              <p className="form-control-static">{ this.props.visit.vetName }</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Pet</label>
            <div className="col-sm-10">
              <p className="form-control-static">{ this.props.visit.petName }</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Owner</label>
            <div className="col-sm-10">
              <p className="form-control-static">{ this.props.visit.petOwnerName }</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <p className="form-control-static">{ this.props.visit.description }</p>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2">&nbsp;</div>
            <div className="col-sm-8">
              <button type="button" className="btn btn-default" onClick={this.props.navigateToSchedulerView}>Back</button>&nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-danger" onClick={cancelVisit}>Cancel Visit</button>
            </div>
          </div>
        </form>
      </div>
    </div>);
  }
}

export default Visit;