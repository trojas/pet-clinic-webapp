import { Content } from "./models/content";
import NavigationListItemContainer from "./navigation-list-item-container";
import React, { Component} from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<nav className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar"/>
          <span className="icon-bar"/>
        </button>
        <a className="navbar-brand" href="#">Pet Clinic System</a>
      </div>
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav in" id="side-menu">
            <NavigationListItemContainer content={Content.SCHEDULE} cssClass="fa fa-calendar fa-fw" text="Schedule" />
            <NavigationListItemContainer content={Content.VETS} cssClass="fa fa-user-md fa-fw" text="Vets"/>
            <NavigationListItemContainer content={Content.PETS} cssClass="fa fa-paw fa-fw" text="Pets"/>
          </ul>
        </div>
      </div>
    </nav>);
  }
}

export default Navigation;