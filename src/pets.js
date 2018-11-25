import React, { Component } from "react";

class Pets extends Component {
  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    const petList = this.props.pets.map(pet => (
    <tr key={pet.id}>
      <td>{pet.ownerFirstName}</td>
      <td>{pet.ownerLastName}</td>
      <td>{pet.name}</td>
      <td>{pet.type}</td>
      <td>{pet.birthDate}</td>
    </tr>));
    return (<div className="row">
      <div className="col-lg-12">
        <h1>Pets</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Owner First Name</th>
              <th>Owner Last Name</th>
              <th>Pet Name</th>
              <th>Type</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
          {petList}
          </tbody>
        </table>
      </div>
    </div>);
  }
}

export default Pets;
