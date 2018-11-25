import React from "react";

const NavigationListItem = ({ cssClass, text, onClick }) => (
  <li onClick={onClick}><a href="#"><i className={cssClass} /> {text}</a></li>
);

export default NavigationListItem;