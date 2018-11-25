import { fetchVets } from "./actions/vets";
import { connect } from "react-redux";
import Vets from "./vets";

const mapStateToProps = state => ({ vets: state.vets });
const mapDispatchToProps = dispatch => ({ fetchVets: () => dispatch(fetchVets()) });

export default connect(mapStateToProps, mapDispatchToProps)(Vets);