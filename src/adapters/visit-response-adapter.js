import Visit from "../models/visit";

export default class VisitResponseAdapter {
  constructor(response) {
    this.response = response;
  }

  toVisit() {
    return new Visit({
      id: this.response.id,
      vetId: this.response.vet.id,
      vetName: this.response.vet.firstName + " " + this.response.vet.lastName,
      startDate: this.response.date,
      description: this.response.description,
      petId: this.response.pet.id,
      petName: this.response.pet.name,
      petOwnerName: this.response.pet.owner.firstName + " " + this.response.pet.owner.lastName
    });
  }
}