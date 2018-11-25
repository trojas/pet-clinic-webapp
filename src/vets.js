import React, { Component } from "react";

class Vets extends Component {
  componentDidMount() {
    this.props.fetchVets();
  }

  render() {
    const vetList = this.props.vets.map(vet => (
      <tr key={vet.id}>
        <td>{vet.firstName}</td>
        <td>{vet.lastName}</td>
        <td>{vet.specialties}</td>
      </tr>));
    return (<div className="row">
      <div className="col-lg-12">
        <h1>Vets</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Specialties</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
        </table>
      </div>
    </div>);
  }
}

export default Vets;