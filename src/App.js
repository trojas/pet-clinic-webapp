import "./App.css";
import Navigation from "./navigation";
import PageContentContainer from "./page-content-container";
import React, { Component} from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import "./sb-admin-2.css";

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Navigation/>
        <PageContentContainer/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
