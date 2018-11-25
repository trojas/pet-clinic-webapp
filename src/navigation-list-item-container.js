import { changeContent } from "./actions/navigation";
import NavigationListItem from "./navigation-list-item";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  cssClass: ownProps.cssClass,
  text: ownProps.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeContent(ownProps.content))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationListItem);