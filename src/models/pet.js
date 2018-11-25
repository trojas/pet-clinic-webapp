export default class Pet {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.ownerFirstName = params.ownerFirstName;
    this.ownerLastName = params.ownerLastName;
    this.type = params.type;
    this.birthDate = params.birthDate;
  }
}