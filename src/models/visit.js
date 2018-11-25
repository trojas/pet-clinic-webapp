export default class Visit {
  constructor(params) {
    this.id = params.id ? params.id : 0;
    this.vetId = params.vetId;
    this.vetName = params.vetName;
    this.startDate = params.startDate;
    this.description = params.description;
    this.petId = params.petId;
    this.petName = params.petName;
    this.petOwnerName = params.petOwnerName
  }
}