import { fetchPets } from "./actions/pets";
import Pets from "./pets";
import { connect } from "react-redux";

const mapStateToProps = state => ({ pets: state.pets });
const mapDispatchToProps = dispatch => ({ fetchPets: () => dispatch(fetchPets()) });

export default connect(mapStateToProps, mapDispatchToProps)(Pets);