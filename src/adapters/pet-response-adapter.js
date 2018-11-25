import Pet from "../models/pet";

export default class PetResponseAdapter {
  constructor(response) {
    this.response = response;
  }

  toPet() {
    return new Pet({
      id: this.response.id,
      name: this.response.name,
      ownerFirstName: this.response.owner.firstName,
      ownerLastName: this.response.owner.lastName,
      type: this.response.type.name,
      birthDate: this.response.birthDate
    });
  }
}