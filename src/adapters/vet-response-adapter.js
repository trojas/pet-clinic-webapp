import Vet from "../models/vet";

export default class VetResponseAdapter {
  constructor(response) {
    this.response = response;
  }

  toVet() {
    return new Vet({
      id: this.response.id,
      firstName: this.response.firstName,
      lastName: this.response.lastName,
      specialties: this.response.specialties.map(specialty => specialty.name.charAt(0).toUpperCase() + specialty.name.slice(1)).join()
    });
  }
}